"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"

const navItems = [
	{ name: "Home", href: "/" },
	{ name: "Tours", href: "/tours" },
	{ name: "Destinations", href: "/destinations" },
	{ name: "About", href: "/about" },
]

export default function MainNav() {
	const [isOpen, setIsOpen] = React.useState(false)

	const { user, logout } = useAuth()

	return (
		<nav className="relative flex items-center justify-between px-4">
			{/* Desktop Navigation */}
			<div className="hidden md:flex md:items-center md:space-x-6">
				{navItems.map((item) => (
					<Link
						key={item.name}
						href={item.href}
						className="text-sm font-medium transition-colors hover:text-green-700"
					>
						{item.name}
					</Link>
				))}
			</div>

			{/* Desktop Auth Buttons */}
			<div className="hidden md:flex md:items-center md:space-x-4">
				{user ? (
					<Button
						variant="ghost"
						onClick={logout}
						className="text-sm font-medium"
					>
						Log Out
					</Button>
				) : (
					<>
						<Link href="/login">
							<Button
								variant="ghost"
								className="text-sm font-medium"
							>
								Sign In
							</Button>
						</Link>
						<Link href="/signup">
							<Button className="bg-green-700 hover:bg-green-800 text-sm font-medium">
								Sign Up
							</Button>
						</Link>
					</>
				)}
			</div>

			{/* Mobile Menu Button */}
			<div className="md:hidden">
				<Button
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
					variant="ghost"
				>
					{isOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</Button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="absolute right-0 top-16 z-50 w-full bg-white p-4 shadow-md md:hidden">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="block py-2 text-sm font-medium transition-colors hover:text-green-700"
							onClick={() => setIsOpen(false)}
						>
							{item.name}
						</Link>
					))}
					{user ? (
						<Button
							variant="ghost"
							onClick={() => {
								logout()
								setIsOpen(false)
							}}
							className="w-full text-left text-sm font-medium py-2"
						>
							Log Out
						</Button>
					) : (
						<>
							<Link href="/login" onClick={() => setIsOpen(false)}>
								<Button
									variant="ghost"
									className="w-full text-left text-sm font-medium py-2"
								>
									Sign In
								</Button>
							</Link>
							<Link href="/signup" onClick={() => setIsOpen(false)}>
								<Button className="w-full mt-2 bg-green-700 hover:bg-green-800 text-sm font-medium">
									Sign Up
								</Button>
							</Link>
						</>
					)}
				</div>
			)}
		</nav>
	)
}
