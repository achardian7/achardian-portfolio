import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import html from "@/assets/html-icon.svg";
import css from "@/assets/css-icon.svg";
import javascript from "@/assets/javascript-icon.svg";
import typescript from "@/assets/typescript-icon.svg";
import node from "@/assets/nodejs-icon.svg";
import react from "@/assets/react-icon.svg";
import nextjs from "@/assets/nextjs-icon.svg";
import mongo from "@/assets/mongodb-icon.svg";
import git from "@/assets/git-icon.svg";
import bash from "@/assets/bash-icon.svg";
import express from "@/assets/express-icon.svg";
import tailwind from "@/assets/tailwind-icon.svg";

export const links = [
  {
    path: "#about",
    name: "About",
  },
  {
    path: "#skills",
    name: "Skills",
  },
  {
    path: "#projects",
    name: "Projects",
  },
  {
    path: "#contact",
    name: "Contact",
  },
];

export const socials = [
  {
    id: 1,
    link: "",
    Icon: FaGithub,
  },
  {
    id: 2,
    link: "",
    Icon: FaInstagram,
  },
  {
    id: 3,
    link: "",
    Icon: MdOutlineEmail,
  },
];

export const skillIcons = [
  {
    id: 1,
    name: "HTML",
    icon: html,
  },
  {
    id: 2,
    name: "CSS",
    icon: css,
  },
  {
    id: 3,
    name: "Javascript",
    icon: javascript,
  },
  {
    id: 4,
    name: "Typescript",
    icon: typescript,
  },
  {
    id: 5,
    name: "Node JS",
    icon: node,
  },
  {
    id: 6,
    name: "React JS",
    icon: react,
  },
  {
    id: 7,
    name: "Next JS",
    icon: nextjs,
  },
  {
    id: 8,
    name: "MongoDB",
    icon: mongo,
  },
  {
    id: 9,
    name: "Git",
    icon: git,
  },
  {
    id: 10,
    name: "Bash",
    icon: bash,
  },
  {
    id: 11,
    name: "Express",
    icon: express,
  },
  {
    id: 12,
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const projects = [
  {
    id: 1,
    title: "Watch Me",
    slug: "watch-me",
    description:
      "Watch me is a movie app, which user can browse movies and tv show information. User also can save their favorites or save them in to bookmarks.",
    techStacks: [
      "Next JS 13",
      "Next Auth",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "Mongo Db",
      "TMDB API",
    ],
    features: [
      "Authentication using next-auth (google account)",
      "View list of movies and tv shows",
      "Get movie and tv show detail information",
      "Search movies and tv shows",
      "Add movie or Tv Show into watchlist",
      "Add movie or Tv Show into favorites",
      "Filter by popular, now playing, top rated, and upcoming",
      "Dark mode toggle",
    ],
    link: "https://next-movie-app-fcu6.vercel.app/",
    repo: "https://github.com/achardian/next-movie-app",
    images: [
      "/projects/watch-me-1.png",
      "/projects/watch-me-2.png",
      "/projects/watch-me-3.png",
      "/projects/watch-me-4.png",
      "/projects/watch-me-5.png",
    ],
  },
  {
    id: 2,
    title: "Pinterest Clone",
    slug: "pinterest-clone",
    description:
      "Pinterest Clone is website with UI similar to pinterest with ability to upload images, like, comment, and save images.",
    techStacks: [
      "Next JS 13",
      "Next Auth",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "Mongo Db",
      "Cloudinary",
    ],
    features: [
      "Authentication using next auth (google account)",
      "Create pin with image file",
      "View all pins",
      "Visit single pin",
      "Save other user pin",
      "Like pin",
      "Comment on Pin",
      "Dark mode toggle",
    ],
    link: "https://pinterest-clone-sigma.vercel.app//",
    repo: "https://github.com/achardian/pinterest-clone",
    images: [
      "/projects/pinterest-clone-1.png",
      "/projects/pinterest-clone-2.png",
      "/projects/pinterest-clone-3.png",
    ],
  },
  {
    id: 3,
    title: "Societal",
    slug: "societal",
    description: "Societal is a social media web app.",
    techStacks: [
      "Next JS 14",
      "Typescript",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma",
      "Next Auth",
      "Mongo Db",
      "Cloudinary",
    ],
    features: [
      "Authentication using Next Auth (Google account and Credentials)",
      "Create post with image or video file",
      "View user posts in feed",
      "Filtering feed by for you and following",
      "Ability to update profile",
      "View other user profile page",
      "Follow and unfollow other user",
      "Search user using username or name",
      "Save other user post in bookmarks",
      "Add other user post in favorites",
      "Add comment on post",
      "Infinite scroll on posts",
      "Dark mode toggle",
    ],
    link: "https://societal-8gd7.vercel.app/",
    repo: "https://github.com/achardian/societal",
    images: [
      "/projects/societal-1.png",
      "/projects/societal-2.png",
      "/projects/societal-3.png",
      "/projects/societal-4.png",
      "/projects/societal-5.png",
      "/projects/societal-6.png",
      "/projects/societal-7.png",
    ],
  },
];

export default projects;
