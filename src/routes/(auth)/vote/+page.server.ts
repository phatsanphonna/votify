import { prisma } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const data = await prisma.user.findUnique({
		where: {
			id: locals.user!.id
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
		candidates: data!.area.candidates,
    area: data!.area,
    user: data!
	};
};
