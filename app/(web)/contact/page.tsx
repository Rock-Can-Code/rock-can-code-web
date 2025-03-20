import { RockCanCodeMembersInfo } from "@/src/constants/socials";
import { Card } from "@/src/views/common/components/card";
import Image from "next/image";
import { SocialMediaInfo } from "./SocialMediaInfo";

export default function Contact() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<div data-testid="contact-container" className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-6 mx-auto mt-20 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
					{RockCanCodeMembersInfo.map((dataContact, i) => (
						<Card key={`${dataContact.name}-${i}`}>
							<div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-6 md:py-12 lg:pb-10 md:p-6">
								<Image
									src={dataContact.image}
									alt={dataContact.name}
									width={100}
									height={100}
									className="w-25 h-25 rounded-full border-2 border-zinc-500 shadow-lg"
								/>

								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-lg font-medium duration-150 xl:text-xl text-zinc-200 group-hover:text-white font-display max-w-full whitespace-nowrap truncate">
										{dataContact.name}
									</span>
								</div>

								<div className="relative flex items-center gap-3 duration-700">
									{dataContact.socials.map((socialInfo, index) => (
										<SocialMediaInfo key={`${socialInfo.label}-${index}`} social={socialInfo} />
									))}
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
