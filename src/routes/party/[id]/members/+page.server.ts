import { prisma } from "$lib/server/database";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getObjectSignedUrl } from "$lib/server/s3";

export const load: PageServerLoad = async ({ params }) => {
  const data = await prisma.partyMember.findMany({
    where: {
      partyId: params.id
    },
  });

  if (!data) {
    return error(404, 'Party not found');
  }

  const parseData = await Promise.all(data.map(async (member) => {
    member.profileImage = await getObjectSignedUrl(member.profileImage);
    return member;
  }));

  return {
    members: parseData,
  };
};