import { SvelteKitAuth } from "@auth/sveltekit"
import { prisma } from "../server/database"
import Credentials from "@auth/sveltekit/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { SECRET } from "$env/static/private"
import { compare, hash } from "bcrypt"

const credentialProvider = Credentials({
  credentials: {
    nationalId: {
      label: "National ID",
      type: "text",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  authorize: async (credentials) => {
    // logic to salt and hash password
    const pwHash = await hash(credentials.password as string, 5)

    // logic to verify if user exists

    const user = await prisma.user.findUnique({
      where: {
        nationalId: credentials.nationalId as string,
      },
    })

    if (!user) {
      throw new Error("Invalid credentials.")
    }

    if (!(await compare(pwHash, user.password))) {
      throw new Error("Invalid credentials.")
    }

    const returnUser = {
      ...user,
      password: undefined,
    }

    // return JSON object with the user data
    return returnUser
  },
})

export const { handle: authHook, signIn, signOut } = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  providers: [credentialProvider],
  secret: SECRET
})