import { Github, Linkedin, Mail } from "lucide-react"
import React from "react"

export interface SocialInfo {
	icon:React.ReactNode
	href: string
	label: SocialLabelType
}

export interface OwlsMemberInfo {
	name: string,
	socials: SocialInfo[]
}

export const owlsMembersInfo : OwlsMemberInfo[]= [
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
		href: "adriel.arocha@owlsline.com",
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
		href: "sergio.castellano@owlsline.com",
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
		href: "idaira.aleman@owlsline.com",
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

