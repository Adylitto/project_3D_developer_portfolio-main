import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  shopify1,
  threejs,
  uberweb3,
  daprod,
  gymexos,
  lyriks,
  ytapp,
  chatgpt,
  adyl,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Front Development - Next/React/Native/Vite/Three ",
    icon: mobile,
  },
  {
    title: "Backend Development - Firebase/Sanity/APIs/EVMs",
    icon: backend,
  },
  {
    title: "Marketing UX & Content Creation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Entrepreneur - ride hailing App business Developement",
    company_name: "Swissdriver",
    icon: tesla,
    iconBg: "#383E56",
    date: "2009 - 2017",
    points: [
      "Creating, Developing and maintaining a modern VIP transport services.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing booking application design and ensuring client adoption.",
      "VIP travel agency partnership and repeating excellence services.",
    ],
  },
  {
    title: "Full stack developer Intern",
    company_name: "Realise",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2017 - 2018",
    points: [
      "After a solid burn-out from previous all-running business experience, I realised I needed some tech skills.",
      "Front-end Languages and Frameworks (HTML, CSS, JavaScript)",
      "Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database",
      "Version Control, and Web Hosting Platforms.",
    ],
  },
  {
    title: "Business & Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
      "Developing and maintaining web applications using Ruby React.js and other related technologies.",
      "Collaborating with cross-functional teams including Manufacturers, designers, product managers, and other developers to create high-quality products.",
      "Implementing app design and ensuring client satisfaction .",
      "Marketing Ninja techs.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "BH Empire",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Adyl proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Adyl does.",
    name: "Michael G.",
    designation: "Founder",
    company: "LEVEL UP",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Adyl optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  
  {
    name: "Adyl Three.js portfolio",
    description:
      "Portfolio using the latest industry-standard best practices & UI tech such as React Three Fiber, Higher Order Components (HOCs), emailjs.",
    tags: [
      {
        name: "ThreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "ReactThreeFiber-tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: adyl,
    source_code_link: "https://github.com/Adylitto/DAprOd.org",
  },
  {
    name: "DAprOd.org",
    description:
      "DAprOd is a DAO dApp aiming at changing by enhancing the way entertainement is produced today.",
    tags: [
      {
        name: "Thirdweb-hardhat-ethers-dotenv",
        color: "blue-text-gradient",
      },
      {
        name: "react-vite-tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "EVM-metamask-Goerli",
        color: "pink-text-gradient",
      },
    ],
    image: daprod,
    source_code_link: "https://github.com/Adylitto/DAprOd.org",
  },
  {
    name: "Uber Web3",
    description:
      "This project demonstrates a Uber clone app running on Web3 ETH EVM token authentication & payments enabled. Use Metamask and Chrome browser to interact",
    tags: [
      {
        name: "metamask",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mapbox",
        color: "blue-text-gradient",
      },
    ],
    image: uberweb3,
    source_code_link: "https://github.com/Adylitto/uber-web3",
  },
  {
    name: "Shopify dev",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: shopify1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Youtube API App",
    description:
      "a Modern YouTube Clone Application in React JS with Material UI 5.",
    tags: [
      {
        name: "React-axios",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "RapidAPI-axios",
        color: "pink-text-gradient",
      },
    ],
    image: ytapp,
    source_code_link: "https://github.com/Adylitto/youtube-clone",
  },
  {
    name: "Lyriks",
    description:
      "a Better Spotify 2.0 Clone Music App with React 18! including lyrics for friday night Karaoke sessions!",
    tags: [
      {
        name: "react18",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI-shazam-redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: lyriks,
    source_code_link: "https://github.com/Adylitto/lyriks",
  },
  {
    name: "Gym Exercices App",
    description:
      "a Fitness App with React 18! for me to stay FIT!",
    tags: [
      {
        name: "react18",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: gymexos,
    source_code_link: "https://github.com/Adylitto/gym-exercices",
  },
  {
    name: "Kodex- my ChatGPT App",
    description:
      "my very smart coding and development openAI companion! using openAI API",
    tags: [
      {
        name: "Vite.js",
        color: "blue-text-gradient",
      },
      {
        name: "openAPI-cors-nodemon-dotenv",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/Adylitto/openai",
  },
];

export { services, technologies, experiences, testimonials, projects };
