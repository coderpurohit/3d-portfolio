// Contains constant data for using in website

import {
  backend,
  creator,
  github,
  javascript,
  linkedin,
  mobile,
  nodejs,
  project1,
  project2,
  project3,
  project4,
  reactjs,
  web,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Experience",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "GitHub",
    link: "https://github.com/coderpurohit",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "AI & Data Science",
    icon: web,
  },
  {
    title: "Full-Stack Development",
    icon: mobile,
  },
  {
    title: "AI Automation",
    icon: backend,
  },
  {
    title: "Problem Solving",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  { name: "C++", icon: undefined },
  { name: "Python", icon: undefined },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: reactjs },
  { name: "Node.js", icon: nodejs },
  { name: "REST APIs", icon: undefined },
  { name: "SQL", icon: undefined },
  { name: "TypeScript", icon: undefined },
  { name: "Git", icon: undefined },
  { name: "GitHub", icon: github },
  { name: "n8n", icon: undefined },
  { name: "DSA", icon: undefined },
  { name: "OOP", icon: undefined },
  { name: "DBMS", icon: undefined },
  { name: "Operating Systems", icon: undefined },
  { name: "Computer Networks", icon: undefined },
  { name: "Generative AI", icon: undefined },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Junior Associate Developer Intern",
    company_name: "CloudCove.ai LLP",
    icon: web,
    iconBg: "#1d1836",
    date: "June 2026 - Present",
    points: [
      "Working on software product development and practical engineering tasks in a professional AI-driven environment.",
      "Building and refining solutions using modern web technologies and problem-solving workflows.",
      "Collaborating with teams to improve application functionality, reliability, and user experience.",
      "Applying data-driven thinking to automate repetitive workflows and improve product delivery.",
    ],
  },
  {
    title: "In-house Intern",
    company_name: "Department of AI & Data Science, DYPCOE",
    icon: creator,
    iconBg: "#3a2f8d",
    date: "January 2026 - April 2026",
    points: [
      "Worked on applied AI and data science tasks in a real academic research and development environment.",
      "Explored projects in intelligent systems, data handling, and applied analytics to solve practical problems.",
      "Improved understanding of end-to-end project execution, from requirement framing to implementation and evaluation.",
      "Enhanced technical fundamentals in machine learning workflows, data pipelines, and decision-making systems.",
    ],
  },
  {
    title: "Data Science Master Virtual Internship",
    company_name: "AICTE EduSkills",
    icon: backend,
    iconBg: "#2a2b38",
    date: "January 2026 - March 2026",
    points: [
      "Completed a focused virtual internship emphasizing data science foundations, analytics, and applied AI concepts.",
      "Developed exposure to problem structuring, data interpretation, and practical machine learning workflows.",
      "Strengthened my understanding of real-world data-driven applications and solution design.",
      "Built confidence in applying analytical thinking to modern technology and automation tasks.",
    ],
  },
] as const;

// Achievements
export const TESTIMONIALS = [
  {
    testimonial:
      "3rd Position in the internal Smart India Hackathon, demonstrating problem-solving, teamwork, and technical execution under pressure.",
    name: "3rd Position",
    designation: "Recognition",
    company: "Internal Smart India Hackathon",
    image: web,
  },
  {
    testimonial:
      "Finalist in the Offgrid Hackathon among 220+ teams, showcasing innovation and strong product thinking in a competitive environment.",
    name: "Finalist",
    designation: "Achievement",
    company: "Offgrid Hackathon",
    image: creator,
  },
  {
    testimonial:
      "Runner-up in the MCCIA AI Hackathon, Pune, reflecting technical depth, creativity, and collaborative excellence.",
    name: "Runner-up",
    designation: "Award",
    company: "MCCIA AI Hackathon, Pune",
    image: backend,
  },
  {
    testimonial:
      "Open-source contributor with AOSSIE, contributing to meaningful projects and community-driven technology growth.",
    name: "AOSSIE Contributor",
    designation: "Open Source",
    company: "AOSSIE",
    image: github,
  },
  {
    testimonial:
      "Solved 100+ LeetCode problems, strengthening algorithmic thinking, data structures, and problem-solving discipline.",
    name: "100+ Problems",
    designation: "Milestone",
    company: "LeetCode",
    image: javascript,
  },
  {
    testimonial:
      "District-level Fencing Champion and District-level Quiz Winner, reflecting discipline, performance, and a strong competitive spirit.",
    name: "Champion & Winner",
    designation: "Accomplishment",
    company: "District-Level Competitions",
    image: mobile,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "MessFinder",
    description:
      "A location-based mess discovery and comparison platform that helps users find suitable food options based on location and preferences.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "maps", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/coderpurohit",
    live_site_link: "https://www.messfinder.vip",
  },
  {
    name: "Urban Cart",
    description:
      "An e-commerce application with dynamic products and a shopping cart, focused on a seamless online buying experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
      { name: "ui", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/coderpurohit",
    live_site_link: "https://github.com/coderpurohit",
  },
  {
    name: "Automated Timetable Scheduling System",
    description:
      "A constraint-based scheduling system designed to automate academic timetable generation efficiently and accurately.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "algorithms", color: "green-text-gradient" },
      { name: "scheduling", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/coderpurohit",
    live_site_link: "https://github.com/coderpurohit",
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/bharat-purohit-13986427b/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/coderpurohit",
  },
  {
    name: "LeetCode",
    icon: web,
    link: "https://leetcode.com/u/codebp/",
  },
] as const;
