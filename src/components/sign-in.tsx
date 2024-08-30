"use server"

import { signIn } from "@/auth"
import { signOut } from "next-auth/react"

export async function SignIn() {
	await signIn("github", {redirectTo: "/dashboard"})
}

export async function SignOut(){
	await signOut()
}
