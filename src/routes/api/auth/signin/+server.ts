import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { object, string, ZodError } from 'zod'
import { compare } from 'bcrypt';
import { prisma } from '$lib/server/database';
import { createToken } from '$lib/jwt';

const signInSchema = object({
  nationalId: string().length(13),
  password: string().length(8),
})

export const POST: RequestHandler = async ({ request, cookies }) => {
  try {
    const body = await signInSchema.parseAsync(await request.json());

    console.log('ok1');

    const user = await prisma.user.findUnique({
      where: {
        nationalId: body.nationalId,
      }
    });

    console.log('ok2');

    if (!user) {
      console.log('ok3');
      return error(400, JSON.stringify({ message: 'User not found, Please register.' }));
    }

    if (!(await compare(body.password, user.password))) {
      console.log('ok4');
      return error(400, JSON.stringify({ message: 'Invalid password' }));
    }

    const accessToken = createToken({ id: user.id });

    cookies.set('access_token', accessToken, {
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: 'none',
      secure: false,
      path: '/',
    });

    return json({
      message: 'Sign in successfully',
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return error(400, JSON.stringify(err.errors));
    }

    console.error(err);

    return error(500, JSON.stringify(err));
  };
}