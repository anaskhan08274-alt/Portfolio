import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaPython, FaFire, FaLaptopCode, FaNodeJs, FaStripe,  FaDatabase, FaVuejs, FaCloud, FaRobot } from 'react-icons/fa';
import { SiVercel } from "react-icons/si"; 

import profileImg from './Profile.avif';
import projectImg1 from './project1.avif';
import projectImg2 from './project2.avif';
import projectImg3 from './project3.avif';
import projectImg4 from './project4.avif';
import projectImg5 from './project5.avif';
import projectImg6 from './project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript', 'React.js']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'NoSQL']
  },
  {
    title: 'Python Development',
    icon: FaPython,
    description: 'Python development is used to build software, websites, and automation tools easily and efficiently.',
    tags: ['Python', 'NumPy', 'library', 'Fuction']
  },
  {
    title: 'Vercel',
    icon: SiVercel,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['Meta', 'Environment', 'Git']
  },
  {
    title: 'ADCA & CCC',
    icon: FaLaptopCode,
    description: 'ADCA & CCC are computer courses that provide basic to advanced computer knowledge, including MS Office, internet, databases, and essential skills required for office, government, and IT-related jobs.',
    tags: ['MS.Office', 'LibreOffice', 'MS-DOS', 'Wordpad']
  }
];

export const projects = [
  {
    id: 1,
    title: "Pokemon Card",
    description: "A complete Pokémon card hub for collectors, players, and fans.",
    image: projectImg1,
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://pokemon-card-app-alpha.vercel.app/",
    code: "https://github.com/anaskhan08274-alt/pokemonCardApp",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg2,
    tech: ["React.js", "Fake API", "Tailwind CSS"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://e-commerce-frontend-1q7359rqv-anas-projects-8cb9ba05.vercel.app",
    code: "https://github.com/anaskhan08274-alt/E-Commerce-Frontend",
  },
  {
    id: 3,
    title: "Bootstrap Website",
    description: "A simple and responsive Bootstrap website.",
    image: projectImg3,
    tech: ["Bootstrap", "AOS", "Google Fonts"],
    icons: [FaReact, FaDatabase],
    demo: "https://vercel.com/anas-projects-8cb9ba05/bootresponse",
    code: "https://github.com/anaskhan08274-alt/response",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "https://portfolio-six-kohl-1oh1tbusum.vercel.app/",
    code: "https://github.com/anaskhan08274-alt/Portfolio",
  },
  {
    id: 5,
    title: "Calculator",
    description: "Perform quick and accurate calculations with this JavaScript calculator.",
    image: projectImg5,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://vercel.com/anas-projects-8cb9ba05/adding-machine",
    code: "https://github.com/anaskhan08274-alt/Adding-machine",
  },
  {
    id: 6,
    title: "Random Image Generator",
    description: "Generate images using HTML, CSS and dynamic JavaScript logic.",
    image: projectImg6,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://vercel.com/anas-projects-8cb9ba05/random-img-genrate",
    code: "https://github.com/anaskhan08274-alt/Random-img-genrate",
  },
];

export const workData = [
  {
    role: "Full Stack Developer",
    company: "Hanumant Technology.",
    duration: "6 Months",
    description:
      "Full Stack Developer with experience building scalable web applications using front-end and back-end technologies.",
    color: "purple"
  },
  
];


