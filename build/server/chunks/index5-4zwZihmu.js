import { d as private_env } from './shared-server-BfUoNEXY.js';
import jwt from 'jsonwebtoken';

const { sign, verify } = jwt;
const createToken = (payload) => {
  return sign(payload, private_env.SECRET, {
    expiresIn: "24h",
    subject: payload.id
  });
};
const verifyToken = (token) => {
  return verify(token, private_env.SECRET);
};
const handleSession = async ({ event, resolve }) => {
  const token = event.cookies.get("access_token");
  if (!token) {
    return await resolve(event);
  }
  try {
    const payload = verifyToken(token);
    event.locals.user = payload;
    return await resolve(event);
  } catch (err) {
    console.error(err);
    return await resolve(event);
  }
};

export { createToken as c, handleSession as h };
//# sourceMappingURL=index5-4zwZihmu.js.map
