import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/table'

import {
	Pagination,
	PaginationGap,
	PaginationList,
	PaginationNext,
	PaginationPage,
	PaginationPrevious,
} from '@/components/pagination'
import { Badge } from '@/components/badge'

import {
	Dropdown,
	DropdownButton,
	DropdownItem,
	DropdownMenu
}from '@/components/dropdown'

import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid'

const users = [{
	id: 0,
	name: "123",
	email: "123@123.com",
	country: "China",
	tags: ["test", "online"],
	role: "admin"
},{
	id: 2,
	name: "234",
	email: "234@234.com",
	country: "America",
	tags: ["ab", "cd"],
	role: "admin"
},{
	id: 2,
	name: "234",
	email: "234@234.com",
	country: "America",
	tags: ["ab", "cd"],
	role: "admin"
},]

export default async function Broadcasts() {

	return (
		<>
			<h1 className="mb-6 text-base font-semibold">Boardcasts</h1>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeader>Name</TableHeader>
						<TableHeader>Email</TableHeader>
						<TableHeader>Country</TableHeader>
						<TableHeader>Tags</TableHeader>
						<TableHeader>Role</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (
						<TableRow key={user.id}>
							<TableCell className="font-medium">{user.name}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.country}</TableCell>
							<TableCell>
								{user.tags.map((tag) => (
									<Badge key="tag" color='pink'>{tag}</Badge>
								))}
							</TableCell>
							<TableCell className="text-zinc-500">{user.role}</TableCell>
							<TableCell>
								<div className="-mx-3 -my-1.5 sm:-mx-2.5">
									<Dropdown>
										<DropdownButton plain aria-label="More options">
											<EllipsisHorizontalIcon />
										</DropdownButton>
										<DropdownMenu anchor="bottom end">
											<DropdownItem>View</DropdownItem>
											<DropdownItem>Edit</DropdownItem>
											<DropdownItem>Delete</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Pagination className="mt-6">
				<PaginationPrevious href="?page=2" />
				<PaginationList>
					<PaginationPage href="?page=1">1</PaginationPage>
					<PaginationPage href="?page=2">2</PaginationPage>
					<PaginationPage href="?page=3" current>
						3
					</PaginationPage>
					<PaginationPage href="?page=4">4</PaginationPage>
					<PaginationGap />
					<PaginationPage href="?page=65">65</PaginationPage>
					<PaginationPage href="?page=66">66</PaginationPage>
				</PaginationList>
				<PaginationNext href="?page=4" />
			</Pagination>
		</>
	)
}