import { prisma } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const data = await prisma.party.findMany({
    orderBy: {
      votes: 'desc',
    }
  });

  return {
    parties: data
  };
};