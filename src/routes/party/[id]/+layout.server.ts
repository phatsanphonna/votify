import { prisma } from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getObjectSignedUrl } from '$lib/server/s3';

export const load: LayoutServerLoad = async ({ params }) => {
	const data = await prisma.party.findUnique({
		where: {
			id: params.id
		},
	});

	if (!data) {
		return error(404, 'Party not found');
	}

	const parties = await prisma.party.findMany({
		orderBy: {
			votes: 'desc'
		}
	});

	const ranking = parties.findIndex(party => party.id === data.id) + 1;

	const candidate = await prisma.partyCandidate.findMany({
		where: {
			partyMember: {
				partyId: data.id
			},
		},
		include: {
			partyMember: true
		}
	});

	data.image = await getObjectSignedUrl(data.image);

	return {
		party: data,
		candidate: candidate[0],
		ranking: ranking
	};
};

