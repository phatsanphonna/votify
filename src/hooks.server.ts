import { initUserHooks } from '$lib/server/hooks';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(initUserHooks);
