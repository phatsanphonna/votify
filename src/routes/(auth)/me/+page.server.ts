import { prisma } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const user = locals.user;

  const userData = await prisma.user.findUnique({
    where: {
      id: user?.id
    },
    include: {
      area: true
    },
  });

  return {
    user: userData!,
    area: userData!.area!,
  };
};
