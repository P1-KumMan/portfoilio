import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Adithyan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'ADITHYAN  ',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am passionate about technology. Allways adding new tools to my utility belt, I use Linux as my daily driver. Have Diploma in Computer Engineering from Kerala Goverment Polytechnic college. Learned javascript and python from the internet.',
  paragraphTwo:
    'Build few projects using React.js I find React to be straight forward and readable. Now Learning and geting better at css3 and typescript and working on my touch typeing and Vim.',
  paragraphThree:
    'I find inspiration from Joe Rogan, Lex Fridman, Elon Musk to name a few, Also have an intrest in Psychology and Philosophy."Spider-man into the Spider-Verse" is one of my favourite movies.',
  resume: '/static/Adithyan_resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Tour Agency',
    info: 'Website for a Travel Agency based on Kerala,India.',
    info2:
      'Made using create-react-app and react-router.Goal of this project is to get better at writing css',
    url: 'https://kerala.netlify.app/',
    repo: 'https://github.com/P1-KumMan/Kerala_tourism',
    // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'space2.png',
    title: 'SpaceX Site',
    info: 'Build using SpaceX REST api and Reactjs',
    info2: 'Created this site to learn about api and Material-ui',
    url: 'https://spacexclone.netlify.app/',
    repo: 'https://github.com/P1-KumMan/space',
    // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'adithyan92014@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adithyan-p-n-077299174/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/P1-KumMan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
