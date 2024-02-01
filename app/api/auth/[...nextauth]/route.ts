import NextAuth from "next-auth"
import Email from "next-auth/providers/email"
import Github from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient() // initialize prisma client to create users and population session/account data

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    Email({
      server: process.env.EMAIL_SERVER ?? "",
      from: process.env.EMAIL_FROM ?? "",
      maxAge: 600,
    }),
  ],
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
