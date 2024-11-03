import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
  const { party } = await parent();

  return {
    party: party,
  };
};