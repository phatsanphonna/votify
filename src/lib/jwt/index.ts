import { env } from '$env/dynamic/private'
import type { Handle } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'
const { sign, verify } = jwt

export const createToken = (payload: any) => {
  return sign(payload, env.SECRET, {
    expiresIn: '24h',
    subject: payload.id
  })
}

export const verifyToken = (token: string) => {
  return verify(token, env.SECRET) as { id: string, exp: number }
}

export const handleSession: Handle = async ({ event, resolve }) => {
  event.locals.user = { id: 'cm30oxjgu000013tohkfbzjna', exp: 2222222 }
  return await resolve(event)
}