import Link from "next/link";

export function Links () {
    return <div className="flex justify-between gap-8">
		<Link
			href="/"
			className="duration-200 text-zinc-400 hover:text-zinc-100"
		>
			Home
		</Link>
		<Link
			href="/projects"
			className="duration-200 text-zinc-400 hover:text-zinc-100"
		>
			Projects
		</Link>
		<Link
			href="/contact"
			className="duration-200 text-zinc-400 hover:text-zinc-100"
		>
			Contact
		</Link>
		<Link
			href="/about"
			className="duration-200 text-zinc-400 hover:text-zinc-100"
		>
			About us
		</Link>
		<Link
			href="/services"
			className="duration-200 text-zinc-400 hover:text-zinc-100"
		>
			Services
		</Link>

		<Link
			href="/blog"
			className="duration-200 text-zinc-400 hover:text-zinc-100"
		>
			Blog
		</Link>
	</div>;
}