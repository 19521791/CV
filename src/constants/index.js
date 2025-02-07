export const paymentIcon = {
  payid: "/images/payment_icons/payid.png",
  bsb: "/images/payment_icons/bsb.png",
  payto: "/images/payment_icons/payto.png",
  card: "/images/payment_icons/card.svg",
}

export const imagePaths = {
  clever: "/images/project_icons/clever.png",
  ninedash: "/images/project_icons/nine-dash.png",
  note: "/images/project_icons/note.png",
  trello: "/images/project_icons/trello.png",
  cvPage1: "/images/project_icons/cv-page-0.jpg",
  cvPage2: "/images/project_icons/cv-page-1.jpg",
  helloclever: "/images/project_icons/hello-clever.png",
  trelloboard: "/images/project_icons/trello-board.png",
}

export const iconPaths = {
  css: "/icons/css.svg",
  express: "/icons/express.svg",
  git: "/icons/git.svg",
  github: "/icons/github.svg",
  html: "/icons/html.svg",
  javascript: "/icons/javascript.svg",
  linkedin: "/icons/linkedin.svg",
  mongodb: "/icons/mongodb.svg",
  nodejs: "/icons/nodejs.svg",
  python: "/icons/python-svgrepo-com.svg",
  rails: "/icons/rails-svgrepo-com.svg",
  ruby: "/icons/ruby-svgrepo-com.svg",
}

export const skills = [
  {
    imageUrl: iconPaths.ruby,
    name: "Ruby",
    type: "Backend"
  },
  {
    imageUrl: iconPaths.rails,
    name: "Ruby On Rails",
    type: "Backend"
  },
  {
    imageUrl: iconPaths.javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: iconPaths.nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: iconPaths.express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: iconPaths.python,
    name: "Python",
    type: "Backend"
  },
  {
      imageUrl: iconPaths.git,
      name: "Git",
      type: "Version Control",
  },
  {
      imageUrl: iconPaths.html,
      name: "HTML",
      type: "Frontend",
  },
  {
    imageUrl: iconPaths.css,
    name: "CSS",
    type: "Frontend",
  },
  {
      imageUrl: iconPaths.mongodb,
      name: "MongoDB",
      type: "Database",
  }
]

export const paymentMethod = [
  {
    imageUrl: paymentIcon.payid,
    name: 'PayID'
  },
  {
    imageUrl: paymentIcon.bsb,
    name: 'BSB'
  },
  {
    imageUrl: paymentIcon.payto,
    name: 'PayTo'
  },
  {
    imageUrl: paymentIcon.card,
    name: 'Card'
  }
]

export const experiences = [
    {
        title: "Backend Developer",
        company_name: "HELLO CLEVER",
        image: imagePaths.helloclever,
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
        image: imagePaths.trelloboard,
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
        image: imagePaths.note,
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
        image: imagePaths.ninedash,
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
  iconUrl: iconPaths.github,
  link: 'https://github.com/19521791'
}

export const linkedinLink = {
  name: 'LinkedIn',
  iconUrl: iconPaths.linkedin,
  link: 'https://www.linkedin.com/in/nguyen-phi-long-a48961265/',
}

export const projects = [
  {
    title: "Backend Developer",
    company_name: "HELLO CLEVER",
    image: imagePaths.helloclever,
    description: "Hello Clever Payment Gateway",
    link: "https://helloclever.co/"
},
{
    title: "Trello Board",
    company_name: "TRELLO BOARD (Personal Project)",
    image: imagePaths.trelloboard,
    description: "Trello Board Clone",
    link: "https://github.com/19521791/trello-backend"
},
{
    title: "Sticky Note (Personal Project)",
    company_name: "STICKY NOTE (Personal Project)",
    image: imagePaths.note,
    iconBg: "#b7e4c7",
    description: "Sticky Note",
    link: "https://github.com/19521791/note-app"
},
{
    title: "Detect Nine Dash Line (Personal Project)",
    company_name: "NINE DASH LINE (Personal Project)",
    image: imagePaths.ninedash,
    iconBg: "#a2d2ff",
    description: "Nine Dash Line",
    link: "https://github.com/19521791/server-nodejs"
}
];

export const helloCleverLink = "https://helloclever.co/"
export const trelloLink = "https://github.com/19521791/trello-backend"