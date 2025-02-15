"use client";;
import { SocialInfo } from "@/src/constants/socials";
import Link from "next/link";

import type { JSX } from "react";

export interface SocialMediaInfoProps {
	social: SocialInfo
}

export function SocialMediaInfo({ social }: SocialMediaInfoProps) {
	let socialComponent: JSX.Element = <></>;
	switch (social.label) {
		case "Github":
		case "LinkedIn":
			socialComponent = <Link
				href={social.href}
				target="_blank"
			>
				<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
					{social.icon}
				</span>{" "}
			</Link>;
			break;
		case "Email":
			socialComponent = <Link
				href={`mailto:${social.href}`}
				target="_blank"
			>
				<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
					{social.icon}
				</span>{" "}
			</Link>;

		default:
			break;
	}

	return socialComponent;
}
