import { p as prisma } from './index4-D9xrZjJk.js';
import { j as json } from './index2-DzcLzHBX.js';
import { o as objectType, s as stringType, Z as ZodError } from './index-lsPYacNX.js';
import '@prisma/client';

const voteSchema = objectType({
  candidateId: stringType(),
  partyId: stringType()
});
const POST = async ({ request, locals }) => {
  const user = locals.user;
  try {
    const body = await voteSchema.parseAsync(await request.json());
    await prisma.$transaction([
      prisma.areaCandidate.update({
        where: {
          id: body.candidateId
        },
        data: {
          score: {
            increment: 1
          }
        }
      }),
      prisma.party.update({
        where: {
          id: body.partyId
        },
        data: {
          votes: {
            increment: 1
          }
        }
      }),
      prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          isVoted: true,
          votedAt: /* @__PURE__ */ new Date()
        }
      })
    ]);
    return json({ message: "Vote successfully; Thank you for your vote." });
  } catch (err) {
    console.error(err);
    if (err instanceof ZodError) {
      return json({ message: err.errors }, { status: 400 });
    }
    return json({ message: "Internal server error" }, { status: 500 });
  }
};

export { POST };
//# sourceMappingURL=_server.ts-Dlr6iaGs.js.map
