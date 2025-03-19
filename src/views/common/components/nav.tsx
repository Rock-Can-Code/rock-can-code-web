"use client";
import { BackButton } from "@/src/views/common/components/backButton";
import React, { useEffect, useRef, useState } from "react";
import { Links } from "./Links";

export function Navigation({
	children,
}: {
	children: React.ReactNode;
}) {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<header ref={ref}>
				<div
					className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${isIntersecting
							? "bg-zinc-900/0 border-transparent"
							: "bg-zinc-900/500  border-zinc-800 "}`}
				>
					<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
						<Links/>
						<BackButton/>
					</div>
				</div>
			</header>
			{children}
		</>

	);
}

