import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Github from "next-auth/providers/github"

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    Credentials({
      name: "Crentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch("/your/endpoint", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        })

        const user = await res.json()

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      },
    }),
  ],
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
