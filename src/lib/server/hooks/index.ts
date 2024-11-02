import type { Handle } from '@sveltejs/kit';
import { prisma } from '../database';

export const initUserHooks: Handle = async ({ event, resolve }) => {
	const user = await prisma.user.findUnique({
		where: {
			id: 'cm30aqhde00018gfgfan4turw'
		}
	});

	event.locals.user = user;

  return await resolve(event);
};
