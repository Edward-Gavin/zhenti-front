import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import 'next-auth/jwt'

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [github],
	callbacks: {
		jwt({ token, trigger, session, account }) {
			if (trigger === "update") token.name = session.user.name
			if (account?.provider === "keycloak") {
				return { ...token, accessToken: account.access_token }
			}
			return token
		},
		async session({ session, token }) {
			if (token?.accessToken) {
				session.accessToken = token.accessToken
			}
			return session
		},
	},
})

declare module "next-auth" {
	interface Session {
		accessToken?: string
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		accessToken?: string
	}
}