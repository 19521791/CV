import { payid, bsb, payto, card } from "../assets/images/payment_icons"
import { ninedash, note, helloclever, trelloboard } from "assets/images/project_icons"
import {
  css,
  express,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  python,
  rails,
  ruby,
  github,
  linkedin
} from "../assets/icons"

export const skills = [
  {
    imageUrl: ruby,
    name: "Ruby",
    type: "Backend"
  },
  {
    imageUrl: rails,
    name: "Ruby On Rails",
    type: "Backend"
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend"
  },
  {
      imageUrl: git,
      name: "Git",
      type: "Version Control",
  },
  {
      imageUrl: html,
      name: "HTML",
      type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
      imageUrl: mongodb,
      name: "MongoDB",
      type: "Database",
  }
]

export const paymentMethod = [
  {
    imageUrl: payid,
    name: 'PayID'
  },
  {
    imageUrl: bsb,
    name: 'BSB'
  },
  {
    imageUrl: payto,
    name: 'PayTo'
  },
  {
    imageUrl: card,
    name: 'Card'
  }
]

export const experiences = [
    {
        title: "Backend Developer",
        company_name: "HELLO CLEVER",
        image: helloclever,
        iconBg: "#accbe1",
        date: "Jun 2023 - August 2024",
        points: [
            "Design and implement additional functionalities based on the requirements of the Product Owner.",
            "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
            "Refactor code and write documentation for public APIs.",
            "Integrate multiple suppliers into the system.",
        ],
    },
    {
        title: "Trello Board Clone (Personal Project)",
        company_name: "TRELLO BOARD",
        image: trelloboard,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Sticky Note (Personal Project)",
        company_name: "STICKY NOTE",
        image: note,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Detect Nine Dash Line (Personal Project)",
        company_name: "NINE DASH LINE",
        image: ninedash,
        iconBg: "#a2d2ff",
        date: "Feb 2023 - Mar 2023",
        points: [
            "Designed and developed a server using Node.js, following the Model-View-Controller (MVC) design pattern.",
            "Conducted thorough testing and debugging to ensure the server was fully functional.",
            "Deployed using Docker."
        ],
        github: "https://github.com/19521791/server-nodejs"
    },
];

export const githubLink = {
  name: 'GitHub',
  iconUrl: github,
  link: 'https://github.com/19521791'
}

export const linkedinLink = {
  name: 'LinkedIn',
  iconUrl: linkedin,
  link: 'https://www.linkedin.com/in/nguyen-phi-long-a48961265/',
}

export const projects = [
  {
    title: "Backend Developer",
    company_name: "HELLO CLEVER",
    image: helloclever,
    description: "Hello Clever Payment Gateway",
    link: "https://helloclever.co/"
},
{
    title: "Trello Board",
    company_name: "TRELLO BOARD (Personal Project)",
    image: trelloboard,
    description: "Trello Board Clone",
    link: "https://github.com/19521791/trello-backend"
},
{
    title: "Sticky Note (Personal Project)",
    company_name: "STICKY NOTE (Personal Project)",
    image: note,
    iconBg: "#b7e4c7",
    description: "Sticky Note",
    link: "https://github.com/19521791/note-app"
},
{
    title: "Detect Nine Dash Line (Personal Project)",
    company_name: "NINE DASH LINE (Personal Project)",
    image: ninedash,
    iconBg: "#a2d2ff",
    description: "Nine Dash Line",
    link: "https://github.com/19521791/server-nodejs"
}
];