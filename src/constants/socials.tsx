import { Github, github } from "lucide-react"
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
		name: "Jesús S. González",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/daniel-gil-owlsline",
		label: "Github",
		name: "Daniel Gil",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/adriel-owls",
		label: "Github",
		name: "Adriel Arocha",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/jesus-sgonzalez",
		label: "Github",
		name: "Jesús S. González",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/daniel-gil-owlsline",
		label: "Github",
		name: "Daniel Gil",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/adriel-owls",
		label: "Github",
		name: "Adriel Arocha",
	},

];