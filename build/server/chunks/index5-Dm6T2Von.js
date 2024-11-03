import { d as private_env } from './shared-server-BfUoNEXY.js';
import jwt from 'jsonwebtoken';

const { sign, verify } = jwt;
const createToken = (payload) => {
  return sign(payload, private_env.SECRET, {
    expiresIn: "24h",
    subject: payload.id
  });
};
const handleSession = async ({ event, resolve }) => {
  event.locals.user = { id: "cm30oxjgu000013tohkfbzjna", exp: 2222222 };
  return await resolve(event);
};

export { createToken as c, handleSession as h };
//# sourceMappingURL=index5-Dm6T2Von.js.map
