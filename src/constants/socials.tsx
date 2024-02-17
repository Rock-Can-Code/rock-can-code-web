import { Github } from "lucide-react"
import React from "react"

interface Social {
	icon:React.ReactNode
	href: string
	label: SocialLabelType
	name: string
}

type SocialLabelType = 'Github'

export const socials : Social[] = [
	{
		icon: <Github size={20} />,
		href: "https://github.com/jesus-sgonzalez",
		label: "Github",
		name: "jesus-sgonzalez",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/daniel-gil-owlsline",
		label: "Github",
		name: "daniel-gil-owlsline",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/adriel-owls",
		label: "Github",
		name: "adriel-owls",
	},

];