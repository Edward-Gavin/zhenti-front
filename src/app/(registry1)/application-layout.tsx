'use client'

import { Avatar } from '@/components/avatar'
import {
	Dropdown,
	DropdownButton,
	DropdownDivider,
	DropdownItem,
	DropdownLabel,
	DropdownMenu,
} from '@/components/dropdown'
import {
	Navbar,
	NavbarItem,
	NavbarSection,
	NavbarSpacer,
	NavbarLabel,
	NavbarDivider
} from '@/components/navbar'
import {
	Sidebar,
	SidebarBody,
	SidebarFooter,
	SidebarHeader,
	SidebarHeading,
	SidebarItem,
	SidebarLabel,
	SidebarSection,
	SidebarSpacer,
} from '@/components/sidebar'
import { SidebarLayout } from '@/components/sidebar-layout'
import { getEvents } from '@/data'
import {
	ArrowRightStartOnRectangleIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	Cog8ToothIcon,
	LightBulbIcon,
	PlusIcon,
	ShieldCheckIcon,
	UserCircleIcon,
	UserIcon
} from '@heroicons/react/16/solid'
import { usePathname } from 'next/navigation'
import { StackedLayout } from '@/components/stacked-layout'
import { InboxIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function AccountDropdownMenu({ anchor }: { anchor: 'top start' | 'bottom end' }) {
	return (
		<DropdownMenu className="min-w-64" anchor={anchor}>
			<DropdownItem href="#">
				<UserCircleIcon />
				<DropdownLabel>My account</DropdownLabel>
			</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="#">
				<ShieldCheckIcon />
				<DropdownLabel>Privacy policy</DropdownLabel>
			</DropdownItem>
			<DropdownItem href="#">
				<LightBulbIcon />
				<DropdownLabel>Share feedback</DropdownLabel>
			</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="#">
				<ArrowRightStartOnRectangleIcon />
				<DropdownLabel>Sign out</DropdownLabel>
			</DropdownItem>
		</DropdownMenu>
	)
}

function TeamDropdownMenu() {
	return (
		<DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
			<DropdownItem href="/teams/1/settings">
				<Cog8ToothIcon />
				<DropdownLabel>Settings</DropdownLabel>
			</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/teams/1">
				<Avatar slot="icon" src="/flags/mx.svg" />
				<DropdownLabel>Tailwind Labs</DropdownLabel>
			</DropdownItem>
			<DropdownItem href="/teams/2">
				<Avatar slot="icon" initials="WC" className="bg-purple-500 text-white" />
				<DropdownLabel>Workcation</DropdownLabel>
			</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/teams/create">
				<PlusIcon />
				<DropdownLabel>New team&hellip;</DropdownLabel>
			</DropdownItem>
		</DropdownMenu>
	)
}

const navItems = [
	{ label: 'Home', url: '/dashboard' },
	{ label: 'Events', url: '/dashboard/events' },
	{ label: 'Orders', url: '/dashboard/orders' },
	{ label: 'Broadcasts', url: '/dashboard/broadcasts' },
]

export function ApplicationLayout({
	events,
	children,
}: {
	events: Awaited<ReturnType<typeof getEvents>>
	children: React.ReactNode
}) {
	let pathname = usePathname()

	return (
		<>
			{children}
		</>
	)
}


