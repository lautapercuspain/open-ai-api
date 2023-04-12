import NextAuth, { AuthOptions } from "next-auth"

import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { HarperDBAdapter } from "adapters/harperdb"
import { sendWelcomeEmail } from "utils/sendEmail"

const server = process.env.EMAIL_SERVER
const from = process.env.EMAIL_FROM

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: HarperDBAdapter(),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  events: {
    async signIn({ user }) {
      //@ts-ignore
      if (user.registered) {
        await sendWelcomeEmail({
          name: user.name,
          identifier: user.email,
          provider: { server, from },
        })
      }
    },
  },

  callbacks: {
    async signIn({ user, account, ...rest }) {
      return user && user.name ? true : false
    },
    async session({ session, user, ...rest }) {
      if (user && user.id) {
        const newSession = {
          ...session,
          user: {
            id: user.id,
            ...session.user,
          },
        }
        return newSession
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      return token
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  pages: {
    signIn: "/",
    signOut: "/",
  },
  debug: false,
}
export default NextAuth(authOptions)
