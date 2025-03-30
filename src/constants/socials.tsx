import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export interface SocialInfo {
  icon: React.ReactNode;
  href: string;
  label: SocialLabelType;
}

export interface RockCanCodeMemberInfo {
  name: string;
  image: string;
  socials: SocialInfo[];
}

export const RockCanCodeMembersInfo: RockCanCodeMemberInfo[] = [
  {
    name: "Jesus German Sanchez Gonzalez",
    image: "/images/profile/jesus.png",
    socials: [
      {
        icon: <Github size={20} />,
        href: "https://github.com/elkoyote07",
        label: "Github",
      },
      {
        icon: <Linkedin size={20} />,
        href: "https://www.linkedin.com/in/jesus-german-sanchez-gonzalez/",
        label: "LinkedIn",
      },
    ],
  },
  {
    name: "Adriel Arocha Oronoz",
    image: "/images/profile/adriel.png",
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
    ],
  },
  {
    name: "Sergio Teodoro Castellano Betancor",
    image: "/images/profile/sergio.png",
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
    ],
  },
  {
    name: "Idaira Aleman Quintana",
    image: "/images/profile/idaira.png",
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
    ],
  },
  {
    name: "Crisamer Ortega Gonzalez",
    image: "/images/profile/crisamer.png",
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
    ],
  },
  {
    name: "Daniel Gil Suarez",
    image: "/images/profile/daniel.png",
    socials: [
      {
        icon: <Linkedin size={20} />,
        href: "https://www.linkedin.com/in/daniel-gil-suárez-b66ba1262/",
        label: "LinkedIn",
      },
    ],
  },
];

type SocialLabelType = "Github" | "LinkedIn" | "Email";
