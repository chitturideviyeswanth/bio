import React from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaDatabase, 
  FaNodeJs, 
  FaCode, 
  FaPython, 
  FaEnvelope, 
  FaTrophy, 
  FaGraduationCap,
  FaCss3Alt
} from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { 
  SiJavascript, 
  SiHtml5, 
  SiExpress, 
  SiCplusplus, 
  SiGit, 
  SiTensorflow, 
  SiOpencv 
} from "react-icons/si";

import projectImage1 from "../assets/ai_enhancer.png";
import projectImage2 from "../assets/bmi_calculator.png";
import projectImage3 from "../assets/portfolio_preview.png";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Chitturi Devi Yeswanth",
  greet: "Hello there! 👋🏻",
  description:
    "Electronics & Communication Engineering student at MNIT Jaipur — passionate about Full Stack Web Development, C++ Systems, and AI-powered Applications.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Real-Time AI Low-Light Image Enhancer",
    description:
      "Built an AI-powered image enhancement pipeline using TensorFlow & OpenCV to improve low-light visibility with low-latency WebSocket image streaming.",
    image: projectImage1,
    tech: ["TensorFlow", "OpenCV", "Python", "WebSockets"]
  },
  {
    id: 2,
    name: "BMI Calculator Web Application",
    description:
      "Full-stack BMI calculation and fitness health application developed with Node.js, Express.js, and a dynamic interactive frontend.",
    image: projectImage2,
    githubLink: "https://github.com/chitturideviyeswanth",
    tech: ["Node.js", "Express.js", "HTML5", "CSS3", "JavaScript"]
  },
  {
    id: 3,
    name: "Personal Portfolio Web Application",
    description:
      "Modern, responsive personal portfolio built with React, Vite, and Tailwind CSS featuring interactive components and glassmorphism UI.",
    image: projectImage3,
    githubLink: "https://github.com/chitturideviyeswanth",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"]
  },
];

export const BIO = [
  "Electronics and Communication Engineering student at Malaviya National Institute of Technology (MNIT), Jaipur with a strong foundation in software engineering and hardware systems.",
  "Proficient in C++, C, Python, JavaScript, and Full-Stack Development using Node.js, Express.js, and React.js alongside SQL database management.",
  "Experienced in developing real-time AI computer vision models and full-stack web products, passionate about building robust applications with high user impact.",
  "Active campus leader and sports coordinator, balancing academic excellence with vice captaincy of the MNIT Tug of War team."
];

export const SKILLS = [
  {
    icon: <SiCplusplus className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "C++",
    category: "Languages"
  },
  {
    icon: <FaPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
    category: "Languages"
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    category: "Frontend"
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Node.js",
    category: "Backend"
  },
  {
    icon: <SiExpress className="text-4xl text-gray-300 lg:text-5xl" />,
    name: "Express.js",
    category: "Backend"
  },
  {
    icon: <FaDatabase className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "SQL & DBMS",
    category: "Databases"
  },
  {
    icon: <SiTensorflow className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "TensorFlow",
    category: "AI / ML"
  },
  {
    icon: <SiOpencv className="text-4xl text-red-500 lg:text-5xl" />,
    name: "OpenCV",
    category: "Computer Vision"
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    category: "Languages"
  },
  {
    icon: <SiHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML5",
    category: "Frontend"
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "CSS3",
    category: "Frontend"
  },
  {
    icon: <SiGit className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Git & GitHub",
    category: "Tools"
  },
];

export const EXPERIENCES = [
  {
    title: "Vice Captain — MNIT Tug of War Team",
    company: "Malaviya National Institute of Technology, Jaipur",
    duration: "2025",
    description: [
      "Led team selection, athletic training routines, and strategy execution for inter-collegiate tournaments.",
      "Represented MNIT Jaipur at national Inter-NIT competitions, fostering teamwork and strategic decision-making."
    ],
  },
  {
    title: "Event Coordinator — Malaviya Sports Tournament",
    company: "MNIT Jaipur Sports Council",
    duration: "2026",
    description: [
      "Directed ground logistics, tournament scheduling, and team hospitality for 1,200+ athletes across multiple sports events.",
      "Ensured smooth execution of high-stakes multi-college fixtures under strict operational deadlines."
    ],
  },
];

export const ACHIVEMENTS = [
  {
    id: 1,
    title: "Key Highlights",
    description: [
      "English Communication Skills Professional Certificate from Rice University (Coursera).",
      "Developed Real-time AI Low-Light Image Enhancer using deep learning and WebSockets.",
      "Vice Captain of MNIT Tug of War Team (2025) & Coordinator for Malaviya Sports Tournament (2026)."
    ]
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "Malaviya National Institute of Technology, Jaipur",
    duration: "2023 — 2027",
  },
  {
    degree: "Class XII (Intermediate Education)",
    institution: "Sri Chaitanya Junior College, Vijayawada, AP",
    duration: "2022 — 2023",
  },
  {
    degree: "Class X (Secondary Education)",
    institution: "Sri Chaitanya School, Vijayawada, AP",
    duration: "2020 — 2021",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/chitturideviyeswanth",
    icon: <FaGithub fontSize={24} className="hover:text-blue-400 transition-colors" />,
    name: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/devi-yeswanth-chitturi-230811359/",
    icon: <FaLinkedin fontSize={24} className="hover:text-blue-400 transition-colors" />,
    name: "LinkedIn"
  },
  {
    href: "mailto:chitturideviyeswanth@gmail.com",
    icon: <FaEnvelope fontSize={24} className="hover:text-blue-400 transition-colors" />,
    name: "Email"
  },
];
