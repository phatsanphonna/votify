import { prisma } from '$lib/server/database';
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
					candidates: true
				}
			}
		}
	});
	

	return {
		user: data!,
		area: data!.area!,
		candidates: data!.area!.candidates!
	}
};
