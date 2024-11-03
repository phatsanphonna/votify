import { prisma } from '$lib/server/database';
import { getObjectSignedUrl } from '$lib/server/s3';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user

	const data = await prisma.user.findUnique({
		where: {
			id: user?.id
		},
		include: {
			area: {
				include: {
					candidates: {
						include: {
							partyMember: {
								include: {
									party: true
								}
							},
						}
					}
				}
			}
		}
	});


	const candidates = await Promise.all(data!.area!.candidates.map(async (candidate) => ({
		...candidate,
		partyMember: {
			...candidate.partyMember,
			profileImage: await getObjectSignedUrl(candidate.partyMember.profileImage)
		}
	})))
	return {
		user: data!,
		area: data!.area!,
		candidates,
	}
};
