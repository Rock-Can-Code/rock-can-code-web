"use client";
import { RockCanCodeMembersInfo } from "@/src/constants/socials";
import { SocialMediaInfo } from "./SocialMediaInfo";
import { Card } from "@/src/views/common/components/card";

export default function Contact() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<div data-testid='contact-container' className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
					{
						RockCanCodeMembersInfo.map((dataContact, i) => 
							<Card key={`${dataContact.name}-${i}`}>
								<div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-16 md:p-16">
									<div className="z-10 flex flex-col items-center">
										<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
											{dataContact.name}
										</span>
									</div>
									<div className="relative flex items-center gap-4 duration-700">
										{
											dataContact.socials.map((socialInfo, index) => 
												<SocialMediaInfo key={`${socialInfo.label}-${index}`} social={socialInfo} />
											)
										}
									</div>
								</div>
							</Card>
						)
					}
				</div>
			</div>
		</div>
	);
}