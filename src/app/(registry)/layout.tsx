import { Metadata } from "next"
import '@/styles/tailwind.css'
import { StackedLayout } from '@/components/stacked-layout'


export const metadata: Metadata = {
	title: "Examples",
	description: "Check out some examples app built using the components.",
}

interface ExamplesLayoutProps {
	children: React.ReactNode
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
	return (
		<html>
			<body>

				{children}
				{/* <div className="container relative">
					<section>
						<div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
							
						</div>
					</section>
				</div> */}
			</body>
		</html>
	)
}