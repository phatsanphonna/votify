import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { object, string, ZodError } from 'zod'
import { hash } from 'bcrypt';
import { prisma } from '$lib/server/database';

const createUserSchema = object({
  nationalId: string().length(13),
  password: string().length(8),
  confirmPassword: string(),
})

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await createUserSchema.parseAsync(await request.json());

    const user = await prisma.user.findUnique({
      where: {
        nationalId: body.nationalId,
      }
    });

    if (user) {
      return error(400, JSON.stringify({ message: 'User already exists' }));
    }

    const password = await hash(body.password, 5);

    await prisma.user.create({
      data: {
        nationalId: body.nationalId,
        password,
        firstname: 'Test',
        lastname: 'User',
      }
    });

    return json({
      message: 'User created successfully',
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return error(400, JSON.stringify(err.errors));
    }

    return error(500, JSON.stringify(err));
  };
}