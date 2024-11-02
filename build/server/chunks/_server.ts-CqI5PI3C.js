import { e as error, j as json } from './index2-DzcLzHBX.js';
import { o as objectType, s as stringType, Z as ZodError } from './index-lsPYacNX.js';
import { compare } from 'bcrypt';
import { p as prisma } from './index4-D9xrZjJk.js';
import { c as createToken } from './index5-4zwZihmu.js';
import '@prisma/client';
import './shared-server-BfUoNEXY.js';
import 'jsonwebtoken';

const signInSchema = objectType({
  nationalId: stringType().length(13),
  password: stringType().length(8)
});
const POST = async ({ request, cookies }) => {
  try {
    const body = await signInSchema.parseAsync(await request.json());
    console.log("ok1");
    const user = await prisma.user.findUnique({
      where: {
        nationalId: body.nationalId
      }
    });
    console.log("ok2");
    if (!user) {
      console.log("ok3");
      return error(400, JSON.stringify({ message: "User not found, Please register." }));
    }
    if (!await compare(body.password, user.password)) {
      console.log("ok4");
      return error(400, JSON.stringify({ message: "Invalid password" }));
    }
    const accessToken = createToken({ id: user.id });
    console.log(accessToken);
    cookies.set("access_token", accessToken, {
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/"
    });
    return json({
      message: "Sign in successfully"
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return error(400, JSON.stringify(err.errors));
    }
    console.error(err);
    return error(500, JSON.stringify(err));
  }
};

export { POST };
//# sourceMappingURL=_server.ts-CqI5PI3C.js.map
