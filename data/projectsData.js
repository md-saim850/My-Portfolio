import studioSpace from '../public/projects/studioSpace.jpeg';
import bazarDor from '../public/projects/bazar-dor.jpeg';
import fitlog from '../public/projects/fitlog.jpeg';
import devStack from '../public/projects/dev-stack.jpeg';
import Cake from '../public/projects/cake-website.jpeg';
import apiImg from '../public/projects/API.jpg';

export const projects = [
  {
    id: 1,
    title: "StudioSpace",
    category: "Studio Booking Platform",
    description:
      "A studio booking marketplace where creators can discover studios, explore facilities, and manage their bookings.",
    image: studioSpace,
    technologies: ["Next.js", "Express.js", "MongoDB", "Better Auth"],
    liveUrl: "https://studio-space-client-one.vercel.app",
    githubUrl: "https://github.com/md-saim850/StudioSpace-client",
  },
  {
    id: 2,
    title: "Bazar Dor",
    category: "E-commerce Application",
    description:
      "An online shopping application designed to provide users with a smooth product browsing and shopping experience.",
    image: bazarDor,
    technologies: ["Next.js", "Tailwind CSS", "API", "Authentication"],
    liveUrl: "#",
    githubUrl: "https://github.com/sayeemahmed12/Bazar_Dor",
  },
  {
    id: 3,
    title: "FitLog",
    category: "Fitness Tracking Application",
    description:
      "A fitness tracking application that helps users manage their fitness activities and monitor their progress.",
    image: fitlog,
    technologies: ["Next.js", "Tailwind CSS", "DaisyUI", "API"],
    liveUrl: "#",
    githubUrl: "https://github.com/sayeemahmed12/FitLogWithNextJS",
  },
  {
    id: 4,
    title: "Cake E-commerce",
    category: "E-commerce API",
    description:
      "A cake shopping platform featuring product management, authentication, and an integrated shopping experience.",
    image: Cake,
    technologies: ["React", "Django", "DRF", "PostgreSQL"],
    liveUrl: "https://cake-website-api-1.onrender.com",
    githubUrl: "https://github.com/md-saim850/Ecommerce-Cake-API",
  },
];