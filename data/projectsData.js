
import studioSpace from "../public/projects/studioSpace.jpeg";
import bazarDor from "../public/projects/bazar-dor.jpeg";
import fitlog from "../public/projects/fitlog.jpeg";
import devStack from "../public/projects/dev-stack.jpeg";
import Cake from "../public/projects/cake-website.jpeg";
import apiImg from "../public/projects/API.jpg";

export const projects = [
  {
    id: 1,
    slug: "studio-space",
    title: "StudioSpace",
    category: "Studio Booking Platform",
    type: "Full Stack",
    status: "Completed",

    description:"A studio booking marketplace where creators can discover studios, explore facilities, and manage their bookings.",

    longDescription:"StudioSpace is a full-stack marketplace designed for photographers, filmmakers, podcasters, and other creative professionals. Users can explore available studios, view facilities, and manage their bookings.",

    image: studioSpace,

    technologies: [
      "Next.js",
      "React",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
    ],

    features: [
      "Studio discovery and browsing",
      "Studio listing management",
      "User authentication",
      "Studio booking management",
      "Responsive dashboard",
    ],

    role: "Full Stack Development",

    liveUrl: "https://studio-space-client-one.vercel.app",
    githubUrl: "https://github.com/md-saim850/StudioSpace-client",

    featured: true,
  },

  {
    id: 2,
    slug: "bazar-dor",
    title: "Bazar Dor",
    category: "E-commerce Application",
    type: "Full Stack",
    status: "Completed",

    description:"An online shopping application designed to provide users with a smooth product browsing and shopping experience.",

    longDescription:"Bazar Dor is an e-commerce application focused on product discovery and online shopping. It provides a modern interface for exploring products and interacting with shopping features.",

    image: bazarDor,

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "API Integration",
      "Better Auth",
    ],

    features: [
      "Product browsing",
      "Product information",
      "Authentication",
      "Responsive design",
    ],

    role: "Full Stack Development",

    liveUrl: "#",
    githubUrl: "https://github.com/sayeemahmed12/Bazar_Dor",

    featured: true,
  },

  {
    id: 3,
    slug: "fitlog",
    title: "FitLog",
    category: "Fitness Tracking Application",
    type: "Frontend",
    status: "Completed",

    description:"A fitness tracking application that helps users manage their fitness activities and monitor their progress.",

    longDescription:"FitLog is a fitness-focused web application built with Next.js. It focuses on presenting fitness-related information through an organized and responsive interface.",

    image: fitlog,

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "API Integration",
    ],

    features: [
      "Fitness activity management",
      "Fitness-related data",
      "Responsive interface",
      "Reusable components",
    ],

    role: "Frontend Development",

    liveUrl: "#",
    githubUrl: "https://github.com/sayeemahmed12/FitLogWithNextJS",

    featured: true,
  },

  {
    id: 4,
    slug: "dev-stack",
    title: "Dev Stack",
    category: "Developer Platform",
    type: "Full Stack",
    status: "Completed",

    description:"A developer-focused project showcasing practical web development skills and modern application development.",

    longDescription:"Dev Stack is a development project that demonstrates my ability to build web applications and work with modern frontend and backend technologies.",

    image: devStack,

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Web Development",
    ],

    features: [
      "Modern user interface",
      "Reusable components",
      "Responsive layout",
    ],

    role: "Web Development",

    liveUrl: "#",
    githubUrl: "#",

    featured: false,
  },

  {
    id: 5,
    slug: "cake-ecommerce",
    title: "Cake E-commerce",
    category: "E-commerce Application",
    type: "Full Stack",
    status: "Completed",

    description:"A cake shopping platform featuring product management, authentication, and an integrated shopping experience.",

    longDescription:"A full-stack cake e-commerce application built with React and Django REST Framework. The application connects a frontend shopping experience with backend APIs for product and order management.",

    image: Cake,

    technologies: [
      "React",
      "Vite",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
    ],

    features: [
      "Cake product management",
      "User authentication",
      "Shopping cart",
      "Order management",
      "REST API integration",
    ],

    role: "Full Stack Development",

    liveUrl: "#",
    githubUrl: "https://github.com/md-saim850/Ecommerce-Cake-API",

    featured: true,
  },

  {
    id: 6,
    slug: "manobota-blood-bank",
    title: "Manobota Blood Bank",
    category: "Blood Donor Management API",
    type: "Backend",
    status: "Completed",

    description:"A blood donor management backend designed to organize donor information and support blood donor searching.",

    longDescription:"Manobota Blood Bank is a backend development project focused on managing blood donor information through RESTful APIs.",

    image: apiImg,

    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
    ],

    features: [
      "Donor management",
      "Blood group filtering",
      "RESTful API development",
      "Authentication",
      "Database management",
    ],

    role: "Backend Development",

    liveUrl: "#",
    githubUrl: "#",

    featured: false,
  },
];
