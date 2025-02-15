import { Github, Linkedin, Mail } from "lucide-react"
import React from "react"

export interface SocialInfo {
	icon:React.ReactNode
	href: string
	label: SocialLabelType
}

export interface RockCanCodeMemberInfo {
	name: string,
	socials: SocialInfo[]
}

export const RockCanCodeMembersInfo : RockCanCodeMemberInfo[]= [
	{
	name: 'Jesús S. González',
	socials: [
		{
		icon: <Github size={20} />,
		href: "https://github.com/jesus-sgonzalez",
		label: "Github",
		},
		{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/jesus-german-sanchez-gonzalez/",
		label: "LinkedIn",
		},
		{
		icon: <Mail size={20} />,
		href: "jesus.sgonzalez@owlsline.com",
		label: "Email",
		}
	]
	},
	{
	name: 'Adriel Arocha',
	socials: [
		{
		icon: <Github size={20} />,
		href: "https://github.com/adriel87",
		label: "Github",
		},
		{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/adriel-arocha-oronoz/",
		label: "LinkedIn",
		},
		{
		icon: <Mail size={20} />,
		href: "adrielarochaoronoz@gmail.com",
		label: "Email",
		}
	]
	},
	{
	name: 'Sergio Castellano',
	socials: [
		{
		icon: <Github size={20} />,
		href: "https://github.com/SCASTELLANO6044",
		label: "Github",
		},
		{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/sergiotcastellano/",
		label: "LinkedIn",
		},
		{
		icon: <Mail size={20} />,
		href: "sergiocastellanotrabajo@mail.com",
		label: "Email",
		}
	]
	},
	{
	name: 'Idaira Alemán',
	socials: [
		{
		icon: <Github size={20} />,
		href: "https://github.com/curiousidy",
		label: "Github",
		},
		{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/idaira-alem%C3%A1n-quintana-60ba772b/",
		label: "LinkedIn",
		},
		{
		icon: <Mail size={20} />,
		href: "idairaalemanquintana@gmail.com",
		label: "Email",
		}
	]
	},
	{
	name: 'Crisamer Ortega',
	socials: [
		{
		icon: <Github size={20} />,
		href: "https://github.com/CoderCris",
		label: "Github",
		},
		{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/crisa-mothflight/",
		label: "LinkedIn",
		},
		{
		icon: <Mail size={20} />,
		href: "crisamer.ortega@gmail.com",
		label: "Email",
		}
	]
	},
	{
	name: 'Daniel Gil',
	socials: [
		{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/daniel-gil-suárez-b66ba1262/",
		label: "LinkedIn",
		},
		{
		icon: <Mail size={20} />,
		href: "daniel.gil@owlsline.com",
		label: "Email",
		}
	]
	},
]

type SocialLabelType = 'Github' | 'LinkedIn' | 'Email'

