"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BackButton } from "@/src/views/common/components/backButton";
import LocaleSwitcher from "./LocaleSwitcher";
import { Link, usePathname } from "@/src/i18n/navigation";

import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';

export function Navigation({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {		
		setMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<header ref={ref}>
				<div
					className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
						isIntersecting
							? "bg-zinc-900/0 border-transparent"
							: "bg-zinc-900/500 border-zinc-800"
					}`}
				>
					<div className="container flex items-center justify-between p-6 mx-auto">
						<button
							className="lg:hidden text-zinc-400 hover:text-zinc-100"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							{menuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>

						<NavigationItems/>
						<LocaleSwitcher/>
						<BackButton />
					</div>
				</div>
			</header>
			{children}
		</>
	);

	function NavigationItems() {
		return <nav
			className={`absolute left-0 top-full w-full bg-zinc-900 p-4 shadow-md transform transition-all duration-300 ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"} lg:relative lg:top-0 lg:w-auto lg:p-0 lg:bg-transparent lg:opacity-100 lg:scale-100 lg:pointer-events-auto lg:flex lg:gap-8`}
		>
			<NavigationLink href={`/`}>Home</NavigationLink>
			<NavigationLink href={`/projects`}>Projects</NavigationLink>
			<NavigationLink href={`/contact`}>Contact</NavigationLink>
			<NavigationLink href={`/about`}>About us</NavigationLink>
			<NavigationLink href={`/blog`}>Blog</NavigationLink>

		</nav>;
	}
}






export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={"block text-zinc-400 hover:text-zinc-100 p-2 lg:p-0"}
      href={href}
      {...rest}
    />
  );
}