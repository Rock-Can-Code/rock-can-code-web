import Particles from "@/src/views/common/components/particles";

export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Particles className="absolute inset-0 -z-10" quantity={150} />
			{children}
		</div>
	);
}
