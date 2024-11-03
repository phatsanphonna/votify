import { prisma } from "$lib/server/database";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const data = await prisma.party.findUnique({
    where: {
      id: params.id
    },
  });

  if (!data) {
    return error(404, 'Party not found');
  }

  return {
    party: data,
  };
};