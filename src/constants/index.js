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
    id: 1,
    title: 'Hello Clever',
    src: 'helloclever',
    description: 'Payment Gateway',
    color: '#101010',
    link: 'https://helloclever.co/',
    timeline: '06/2023 - 09/2024',
    tag: 'Fintech',
    company: 'Rexy Technology',
    role: 'Backend Developer',
    tech: {
      frontend: '',
      backend: 'Ruby, Ruby on Rails, Postgres, Redis, Sidekiq'
    },
    paragraph: ['The first Australian buy-to-earn platform that makes shopping, payments, and money management easier for all.'],
    responsibilities: [
      'Implemented Two-Factor Authentication (2FA) via SMS/Google Authenticator and integrated Google reCAPTCHA to prevent brute-force attacks.',
      'Built APIs for money transfer operations (Payout), improved performance, and handled scheduling/cancellation logic.',
      'Applied dynamic fee calculation models and managed bulk data export functionality.',
      'Restricted password reset requests to 3 times/day to prevent abuse.',
      'Wrote documentation for public APIs.'
    ]
  },
  {
    id: 2,
    title: 'Portfolio',
    src: 'portfolio',
    description: 'Personal Project',
    color: '#48494A',
    link: 'https://github.com/19521791/CV',
    timeline: '03/2025 - 05/2025',
    tag: 'Full-stack',
    company: '',
    role: '',
    tech: {
      frontend: 'React.js, TailwindCSS, MUI, Framer Motion, GSAP',
      backend: 'Ruby, Rails, Postgres, Sidekiq, Capistrano',
      deploy: 'Github Actions, Nginx, S3'
    },
    responsibilities: [
      'Built with ReactJS and styled using TailwindCSS and Material UI, integrated animation libraries such as Framer Motion and GSAP',
      'Set up the CI/CD pipeline with GitHub Actions.',
      'Auto-refreshes signed URLs with Rails, Sidekiq',
      'Deployed with GitHub Actions, served through Nginx and S3.',
      'Ensured an automated build and deployment process.'
    ],
    paragraph: [
      'This portfolio was designed not just as a personal website, but as a hands-on environment to explore animation and deployment techniques in full-stack development.'
    ],
    images: [
      'test',
      'test'
    ]
  },
  {
    id: 3,
    title: 'Trello Clone',
    src: 'trelloboard',
    description: 'Personal Project',
    color: '#E9EAEB',
    link: 'https://github.com/19521791/trello-backend',
    timeline: '04/2024 - 06/2024',
    tag: 'Full-stack',
    company: '',
    role: '',
    tech: {
      frontend: 'React.js, TailwindCSS, MUI, DndKit',
      backend: 'Node.js, Express.js, MongoDB, Joi'
    },
    paragraph: ['A Trello-inspired task management app demonstrating full-stack and drag-and-drop UI capabilities.'],
    responsibilities: [
      'Designed and implemented the backend using MVC architecture.',
      'Developed dynamic drag-and-drop UI with DndKit for smooth task reordering.'
    ],
    images: [
      'test',
      'test'
    ]
  },
  {
    id: 4,
    title: 'Note App',
    src: 'note',
    description: 'Personal Project',
    color: '#363637',
    link: 'https://github.com/19521791/note-app',
    timeline: '08/2023 - 10/2023',
    tag: 'Full-stack',
    company: '',
    role: '',
    tech: {
      frontend: 'React.js, FireBase, MUI',
      backend: 'Node.js, MongoDB, Apollo Server'
    },
    paragraph: [
      'A full-stack note-taking app with real-time sync and clean UI, built to enhance productivity and practice GraphQL APIs.'
    ],
    responsibilities: [
      'Built a GraphQL API using Apollo Server and MongoDB to manage notes and user data.',
      'Integrated Firebase Authentication for secure login and user session handling.',
      'Implemented responsive UI with MUI components and custom themes.'
    ],
    images: [
      'test',
      'test'
    ]
  },
  {
    id: 5,
    title: 'Nine Dash Line',
    src: 'ninedash',
    description: 'Personal Project',
    color: '#626D6E',
    link: 'https://github.com/19521791/server-nodejs',
    timeline: '06/2023 - 07/2023',
    tag: 'Computer Vision',
    company: '',
    role: '',
    tech: {
      extra: 'Python, OpenCV, Keras, Tensorflow'
    },
    paragraph: [
      'Developed a RESTful API for detecting nine-dash line in the image or video.'
    ],
    responsibilities: [
      'Developed custom data transformation pipelines to preprocessed raw images.',
      'Trained the model on custom data.',
      'Employed model quantization techniques.',
      'Established RESTful APIs.',
      'Deployed using Docker.'
    ],
    images: [
      'test',
      'test'
    ]
  },
  {
    id: 6,
    title: 'Traffic Light',
    src: 'trafficlight',
    description: 'Personal Project',
    color: '#DCD0C2',
    link: 'https://github.com/19521791/Traffic_Light_Detection',
    timeline: '03/2023 - 06/2023',
    tag: 'Computer Vision',
    company: '',
    role: '',
    tech: {
      extra: 'Python, Pytorch'
    },
    paragraph: [
      'Designed and implemented a highly accurate service for detecting traffic light.'
    ],
    responsibilities: [
      'Preprocessed and augmented the dataset to improve performance.',
      'Labeled large volumes of data',
      'Trained on custom data to detect and classify traffic light.',
      'Conducted thorough evaluations of the model, such as precision-recall curves, F1 scores, and confusion matrix.'
    ],
    images: [
      'test',
      'test'
    ]
  },
  {
    id: 7,
    title: 'Lane Detection',
    src: 'laneline',
    description: 'Personal Project',
    color: '#7E7E7E',
    link: 'https://github.com/19521791/Lane_Detection',
    timeline: '12/2022 - 04/2023',
    tag: 'Computer Vision',
    company: '',
    role: '',
    tech: {
      extra: 'Python, OpenCV, Keras, Tensorflow'
    },
    paragraph: [
      'Designed and implemented a service for detecting lanes in real-time video streams. Utilized computer vision techniques and trained the CNN model on a large dataset of driving footage.'
    ],
    responsibilities: [
      'Conducted in-depth research on the layers of the CNN models to understand their behavior.',
      'Implemented a convolutional neural network (CNN) model for image-to-image translation.',
      'Trained the CNN model using variety of optimization techniques.',
      'Calculated and analyzed confusion matrix and performance metrics to evaluate the performance of the CNN model.'
    ],
    images: [
      'test',
      'test'
    ]
  },
  {
    id: 8,
    title: 'Data Visualization',
    src: 'visualize',
    description: 'Personal Project',
    color: '#B1A994',
    link: 'https://github.com/19521791/Data_Visualization',
    timeline: '2023',
    tag: 'Machine Learning',
    company: '',
    role: '',
    tech: {
      extra: 'Python, Numpy, Pandas, Matplotlib'
    },
    paragraph: [
      'Utilized knowledge of Matplotlib to create visually appealing data visulizations, effectively communicating complex.'
    ],
    responsibilities: [
      'Collected data from various source.',
      'Analyzed and visualized complex dataset.'
    ]
  },
  {
    id: 9,
    title: 'Data Preprocessing',
    src: 'preprocessing',
    description: 'Personal Project',
    color: '#E0D9D1',
    link: 'https://github.com/19521791/Data_Preprocessing',
    timeline: '2023',
    tag: 'Machine Learning',
    company: '',
    role: '',
    tech: {
      extra: 'Python, Numpy, Matplotlib, Seaborn'
    },
    paragraph: [],
    responsibilities: []
  },
  {
    id: 10,
    title: 'Gaussian Naive Bayes',
    src: 'gaussian',
    description: 'Personal Project',
    color: '#E9EAEB',
    link: 'https://github.com/19521791/Gaussian_Naive_Bayes',
    timeline: '2023',
    tag: 'Machine Learning',
    company: '',
    role: '',
    tech: {
      extra: 'Python, Sklearn, Pandas'
    },
    paragraph: [],
    responsibilities: []
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
    '#101010',
    '#363637',
    '#D8D3CD',
    '#7E7E7E',
    '#DCD0C2',
    '#101010'
  ]
}
