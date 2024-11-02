import { prisma } from '$lib/server/database';
import type { PageServerLoad } from './$types';
import { getObjectSignedUrl } from '$lib/server/s3';

export const load: PageServerLoad = async () => {
	const data = await prisma.party.findMany();

	for (const party of data) {
    party.image = await getObjectSignedUrl(party.image);
  }

	return {
		parties: data
	};
};
