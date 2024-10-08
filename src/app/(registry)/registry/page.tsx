"use client"

import { Icons } from "@/app/(registry)/components/icons"
import { Button } from "@/app/(registry)/components/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/app/(registry)/components/card"
import { Input } from "@/app/(registry)/components/input"
import { Label } from "@/app/(registry)/components/label"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/app/(registry)/components/button"

export default function DemoCreateAccount() {
	return (

		<>
			<div className="md:hidden">
				<Image
					src="/examples/authentication-light.png"
					width={1280}
					height={843}
					alt="Authentication"
					className="block dark:hidden"
				/>
				<Image
					src="/examples/authentication-dark.png"
					width={1280}
					height={843}
					alt="Authentication"
					className="hidden dark:block"
				/>
			</div>
			<div className="container relative hidden h-[1000px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				<Link
					href="/examples/authentication"
					className={cn(
						buttonVariants({ variant: "ghost" }),
						"absolute right-4 top-4 md:right-8 md:top-8"
					)}
				>
					Login
				</Link>
				<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
					<div className="absolute inset-0 bg-zinc-900" />
					<div className="relative z-20 flex items-center text-lg font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2 h-6 w-6"
						>
							<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
						</svg>
						Acme Inc
					</div>
					<div className="relative z-20 mt-auto">
						<blockquote className="space-y-2">
							<p className="text-lg">
								&ldquo;This library has saved me countless hours of work and
								helped me deliver stunning designs to my clients faster than
								ever before.&rdquo;
							</p>
							<footer className="text-sm">Sofia Davis</footer>
						</blockquote>
					</div>
				</div>
				<div className="lg:p-8">
					<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
						<Card>
							<CardHeader className="space-y-1">
								<CardTitle className="text-2xl">Create an account</CardTitle>
								<CardDescription>
									Enter your email below to create your account
								</CardDescription>
							</CardHeader>
							<CardContent className="grid gap-4">
								<div className="grid grid-cols-2 gap-6">
									<Button variant="outline">
										<Icons.gitHub className="mr-2 h-4 w-4" />
										Github
									</Button>
									<Button variant="outline">
										<Icons.google className="mr-2 h-4 w-4" />
										Google
									</Button>
								</div>
								<div className="relative">
									<div className="absolute inset-0 flex items-center">
										<span className="w-full border-t" />
									</div>
									<div className="relative flex justify-center text-xs uppercase">
										<span className="bg-background px-2 text-muted-foreground">
											Or continue with
										</span>
									</div>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="email">Email</Label>
									<Input id="email" type="email" placeholder="m@example.com" />
								</div>
								<div className="grid gap-2">
									<Label htmlFor="password">Password</Label>
									<Input id="password" type="password" />
								</div>
							</CardContent>
							<CardFooter>
								<Button className="w-full">Create account</Button>
							</CardFooter>
						</Card>
						{/* <p className="px-8 text-center text-sm text-muted-foreground">
							By clicking continue, you agree to our{" "}
							<Link
								href="/terms"
								className="underline underline-offset-4 hover:text-primary"
							>
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link
								href="/privacy"
								className="underline underline-offset-4 hover:text-primary"
							>
								Privacy Policy
							</Link>
							.
						</p> */}
					</div>
				</div>
			</div>
		</>
	)
}