import { prisma } from "$lib/server/database";
import { json, type RequestHandler } from "@sveltejs/kit";
import { object, string, ZodError } from "zod";

const voteSchema = object({
  candidateId: string(),
  partyId: string(),
})

export const POST: RequestHandler = async ({ request, locals }) => {
  const user = locals.user;

  try {
    const body = await voteSchema.parseAsync(await request.json());

    await prisma.$transaction([
      prisma.areaCandidate.update({
        where: {
          id: body.candidateId,
        },
        data: {
          score: {
            increment: 1,
          },
        },
      }),
      prisma.party.update({
        where: {
          id: body.partyId,
        },
        data: {
          votes: {
            increment: 1,
          },
        },
      }),
      prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          isVoted: true,
          votedAt: new Date(),
        }
      })
    ])

    return json({ message: 'Vote successfully; Thank you for your vote.' });
  } catch (err) {
    console.error(err);

    if (err instanceof ZodError) {
      return json({ message: err.errors }, { status: 400 });
    }

    return json({ message: 'Internal server error' }, { status: 500 });
  }
}