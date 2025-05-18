import { color } from 'framer-motion'
import { Timeline } from 'gsap/gsap-core'

export const helloCleverLink = 'https://helloclever.co/'
export const trelloLink = 'https://github.com/19521791/trello-backend'
export const linkedinLink = 'https://www.linkedin.com/in/nguyen-phi-long-a48961265/'
export const githubLink = 'https://github.com/19521791'

export const skills = [
  {
    imageUrl: 'ruby',
    name: 'Ruby',
    type: 'Backend'
  },
  {
    imageUrl: 'rails',
    name: 'Ruby On Rails',
    type: 'Backend'
  },
  {
    imageUrl: 'javascript',
    name: 'JavaScript',
    type: 'Frontend'
  },
  {
    imageUrl: 'nodejs',
    name: 'Node.js',
    type: 'Backend'
  },
  {
    imageUrl: 'express',
    name: 'Express',
    type: 'Backend'
  },
  {
    imageUrl: 'python',
    name: 'Python',
    type: 'Backend'
  },
  {
    imageUrl: 'git',
    name: 'Git',
    type: 'Version Control'
  },
  {
    imageUrl: 'html',
    name: 'HTML',
    type: 'Frontend'
  },
  {
    imageUrl: 'css',
    name: 'CSS',
    type: 'Frontend'
  },
  {
    imageUrl: 'mongodb',
    name: 'MongoDB',
    type: 'Database'
  }
]

export const projectItems = [
  {
    title: 'Hello Clever',
    src: 'helloclever',
    description: 'Payment Gateway',
    color: '#101010',
    link: 'https://helloclever.co/',
    timeline: '6/2023 - 9/2024',
    tag: 'fintech'
  },
  {
    title: 'Trello Clone',
    src: 'trelloboard',
    description: 'Personal Project',
    color: '#B1A994',
    link: 'https://github.com/19521791/trello-backend',
    timeline: '4/2024 - 6/2024',
    tag: 'fullstack'
  },
  {
    title: 'Nine Dash Line',
    src: 'ninedash',
    description: 'Personal Project',
    color: '#626D6E',
    link: 'https://github.com/19521791/server-nodejs',
    timeline: '12/2023 - 2/2024',
    tag: 'computervision'
  },
  {
    title: 'Portfolio',
    src: 'portfolio',
    description: 'Personal Project',
    color: '#48494A',
    link: 'https://github.com/19521791/CV',
    timeline: '3/2025 - 5/2025',
    tag: 'fullstack'
  }
]

export const groupProjects = [
  {
    group: 'Fintech',
    items: [
      {
        title: 'Hello Clever',
        src: 'helloclever',
        description: 'Payment Gateway',
        color: '#101010',
        link: 'https://helloclever.co/',
        timeline: '6/2023 - 9/2024'
      }
    ]
  },
  {
    group: 'Full-stack',
    items: [
      {
        title: 'Trello Clone',
        src: 'trelloboard',
        description: 'Personal Project',
        color: '#B1A994',
        link: 'https://github.com/19521791/trello-backend',
        timeline: '4/2024 - 6/2024'
      },
      {
        title: 'Note App',
        src: '',
        description: 'Personal Project',
        color: '#363637',
        link: '',
        timeline: ''
      },
      {
        title: 'Portfolio',
        src: 'portfolio',
        description: 'Personal Project',
        color: '#4849A',
        link: 'https://github.com/19521791/CV',
        timeline: '3/2025 - 5/2025'
      },
      {
        title: 'Flash Card',
        src: '',
        description: 'Personal Project',
        color: '',
        link: '',
        timeline: ''
      }
    ]
  },
  {
    group: 'Computer Vision',
    items: [
      {
        title: 'Nine Dash Line',
        src: 'ninedash',
        description: 'Personal Project',
        color: '#626D6E',
        link: 'https://github.com/19521791/server-nodejs',
        timeline: '12/2023 - 2/2024'
      },
      {
        title: 'Lane Detection',
        src: '',
        description: 'Personal Project',
        color: '',
        link: '',
        timeline: ''
      },
      {
        title: 'Traffic Light',
        src: '',
        description: 'Personal Project',
        color: '',
        link: '',
        timeline: ''
      }
    ]
  },
  {
    group: 'Machine Learning',
    items: [
      {
        title: 'Gaussian Naive Bayes',
        src: '',
        description: 'Personal Project',
        color: '',
        link: '',
        timeline: ''
      },
      {
        title: 'Data Preprocessing',
        src: '',
        description: 'Personal Project',
        color: '',
        link: '',
        timeline: ''
      },
      {
        title: 'Data Visualization',
        src: '',
        description: 'Personal Project',
        color: '',
        link: '',
        timeline: ''
      }
    ]
  }
]

export const svgs = {
  ansible: '/images_test/ansible-svgrepo-com.svg',
  javascript: '/images_test/brackets-curly-svgrepo-com.svg',
  capistrano: '/images_test/capistrano-svgrepo-com.svg',
  compose: '/images_test/container-registry-svgrepo-com.svg',
  css: '/images_test/css-svgrepo-com.svg',
  docker: '/images_test/docker-svgrepo-com.svg',
  degree: '/images_test/education-degree-university-svgrepo-com.svg',
  envelope: '/images_test/envelope-dossier-svgrepo-com.svg',
  express: '/images_test/express.svg',
  git: '/images_test/git-pull-request-svgrepo-com.svg',
  github: '/images_test/github-svgrepo-com.svg',
  html: '/images_test/html-coding-svgrepo-com.svg',
  linkedin: '/images_test/linkedin-svgrepo-com.svg',
  location: '/images_test/location-pin-svgrepo-com.svg',
  material: '/images_test/material-ui-svgrepo-com.svg',
  mongodb: '/images_test/mongodb-svgrepo-com.svg',
  nginx: '/images_test/nginx-svgrepo-com.svg',
  nodejs: '/images_test/nodejs-svgrepo-com.svg',
  major: '/images_test/object-detection-svgrepo-com.svg',
  phone: '/images_test/phone-rotary-svgrepo-com.svg',
  postgresql: '/images_test/postgresql-svgrepo-com.svg',
  python: '/images_test/python-svgrepo-com.svg',
  rails: '/images_test/rails-svgrepo-com.svg',
  react: '/images_test/react-svgrepo-com.svg',
  redis: '/images_test/redis-svgrepo-com.svg',
  ruby: '/images_test/ruby-svgrepo-com.svg',
  score: '/images_test/score-svgrepo-com.svg',
  tailwind: '/images_test/tailwind-css-svgrepo-com.svg',
  time: '/images_test/time-svgrepo-com.svg',
  typescript: '/images_test/typescript-16-svgrepo-com.svg',
  university: '/images_test/university-svgrepo-com.svg',
  actions: '/images_test/git-compare-svgrepo-com.svg',
  myself: '/images_test/about_me.jpg'
}

export const terminal = {
  branch: '/images/branch-terminal.svg',
  checkIcon: '/images/check-terminal.svg',
  folder: '/images/folder-terminal.svg',
  gitIcon: '/images/terminal-gi.svg',
  time: '/images/time-terminal.svg',
  ubuntu: '/images/ubuntu-terminal.svg',
  vim: '/images/vim-terminal.svg',
  background: '/images/wp4918883-lo-fi-desktop-wallpapers.jpg'
}

export const navItems = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Work',
    href: '/work'
  },
  {
    title: 'About',
    href: '/profile'
  },
  {
    title: 'Letter',
    href: '/cover-letter'
  },
  {
    title: '3D',
    href: '/model'
  }
]

export const colorHunt = {
  'used': [
    '#48494A',
    '#626D6E',
    '#B1A994',
    '#101010'
  ],
  'available': [
    '#101010',
    '#DCD0C2',
    '#7E7E7E',
    '#D8D3CD',
    '#363637'
  ]
}
