import { handleSession } from '$lib/jwt';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(handleSession);
