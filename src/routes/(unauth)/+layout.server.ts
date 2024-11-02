import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  const user = locals.user

  if (user) {
    return redirect(302, '/')
  }

  return {}
}
