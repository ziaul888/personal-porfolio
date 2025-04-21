import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
      title: "NOC Support Engineer",
      location: "IBBS, Kawran Bazar, Dhaka",
      description:
        "Worked for 1.5 years as a Network Support Engineer, responsible for monitoring and maintaining network infrastructure, resolving connectivity issues, and ensuring optimal system performance.",
      icon: React.createElement(LuGraduationCap),
      date: "2020 - 2021",
    },
    {
      title: "Front-End Developer (React)",
      location: "Biddasoft & Codixel",
      description:
        "Worked as a Front-End Developer for 1 year at Biddasoft and Codixel. Built and maintained web applications using React, with a focus on responsive UI, performance, and user experience.",
      icon: React.createElement(CgWorkAlt),
      date: "2021 - 2022",
    },
    {
      title: "Front-End Developer (React)",
      location: "6amTech, Mirpur 12",
      description:
        "Currently working as a full-time React Developer at 6amTech. My tech stack includes React, Next.js, TypeScript, and Material-UI. I'm passionate about clean, scalable code and open to new full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2022 - Present",
    },
  ] as const;
  

export const projectsData = [
    {
        title: "StackFood",
        description:
            "I worked as a Front-End Developer on this food delivery project for two years. The platform is an online food ordering system that allows users to browse restaurants, explore menus, and place food orders for delivery or pickup.",
        tags: ["React", "Next.js", "Redux", "MUI", "React Query","Firebase","Google Map"],
        imageUrl: corpcommentImg,
    },
    {
        title: "6amMart",
        description:
       " I worked as a Front-End Developer on this food delivery project for two years. It is a multi-module online platform that includes food delivery, e-commerce, rental, and parcel services—providing users with a seamless experience across various on-demand services.",
        tags: ["React", "Next.js", "Redux", "MUI", "React Query,'Firebase","Google map"],
        imageUrl: rmtdevImg,
    },
    // {
    //     title: "Word Analytics",
    //     description:
    //         "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    //     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    //     imageUrl: wordanalyticsImg,
    // },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "MUI",
    "Redux",
    "GraphQL",
    "Framer Motion",
    "React Query"
] as const;
