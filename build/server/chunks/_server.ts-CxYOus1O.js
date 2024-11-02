import { e as error, j as json } from './index2-DzcLzHBX.js';
import { o as objectType, s as stringType, Z as ZodError } from './index-lsPYacNX.js';
import { hash } from 'bcrypt';
import { p as prisma } from './index4-D9xrZjJk.js';
import '@prisma/client';

const createUserSchema = objectType({
  nationalId: stringType().length(13),
  password: stringType().length(8),
  confirmPassword: stringType()
});
const POST = async ({ request }) => {
  try {
    const body = await createUserSchema.parseAsync(await request.json());
    const user = await prisma.user.findUnique({
      where: {
        nationalId: body.nationalId
      }
    });
    if (user) {
      return error(400, JSON.stringify({ message: "User already exists" }));
    }
    const password = await hash(body.password, 5);
    await prisma.user.create({
      data: {
        nationalId: body.nationalId,
        password,
        firstname: "Test",
        lastname: "User"
      }
    });
    return json({
      message: "User created successfully"
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return error(400, JSON.stringify(err.errors));
    }
    return error(500, JSON.stringify(err));
  }
};

export { POST };
//# sourceMappingURL=_server.ts-CxYOus1O.js.map
