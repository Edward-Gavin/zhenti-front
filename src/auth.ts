import NextAuth from "next-auth/next";
export const { handlers, auth, signin, signOut } = NextAuth({
	providers: [],
})