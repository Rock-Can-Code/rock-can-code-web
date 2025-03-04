'use client';

import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const BackButton =():React.ReactNode=> {
	const pathname = usePathname();
	const showArrow = pathname.length > 1;
	const router = useRouter();
	return showArrow && <button
		className="duration-200 text-zinc-300 hover:text-zinc-100"
		onClick={router.back}
		>
		<ArrowLeft className="w-6 h-6 " />
	</button>;
}