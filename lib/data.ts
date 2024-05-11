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
        title: "NOC support",
        location: "IBBS, kawron bazar, dhaka",
        description:
            " I worked 1 and half year as network support engineer",
        icon: React.createElement(LuGraduationCap),
        date: "2020-2021",
    },
    {
        title: "Front-End Developer(React)",
        location: "Biddasoft and codixel",
        description:
            "I worked as a front-end developer for 1 year month biddasoft and codixel",
        icon: React.createElement(CgWorkAlt),
        date: "2021 - 2022",
    },
    {
        title: "Front-End Developer(React)",
        location: "6amtech mirpur 12",
        description:
            "Now i am working on 6amtech as full time react developer. My stack includes React, Next.js, TypeScript," +
            " MUI. I'm" +
            " open to" +
            " new full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2022- present",
    },
] as const;

export const projectsData = [
    {
        title: "StackFood",
        description:
            "I worked as a front end developer on this food delivery project for 2 years. This project is an online food delivery system from where users can order food",
        tags: ["React", "Next.js", "Redux", "MUI", "React Query"],
        imageUrl: corpcommentImg,
    },
    {
        title: "6amMart",
        description:
            "I worked as a front end developer on this food delivery project for 2 years.Multi module online" +
            " ecommerce system",
        tags: ["React", "Next.js", "Redux", "MUI", "React Query"],
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
    "Redux",
    "GraphQL",
    "Framer Motion",
    "React Query"
] as const;
