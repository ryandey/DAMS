import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Credentials from "next-auth/providers/credentials"

const prisma = new PrismaClient() // initialize prisma client to create users and population session/account data

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    Credentials({
      name: "Log in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("/api/user", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "applications/json" },
        })
        const user = await res.json()

        if (res.ok && user) {
          return user
        }
        return null
      },
    }),
  ],
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
