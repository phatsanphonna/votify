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
  const token = event.cookies.get('access_token')

  console.log('token', token)

  if (!token) {
    return await resolve(event)
  }

  try {
    const payload = verifyToken(token)
    event.locals.user = payload

    return await resolve(event)
  } catch (err) {
    console.error(err)

    return await resolve(event)
  }
}