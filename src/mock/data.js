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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Tour Agency',
    info: '',
    info2: '',
    url: 'https://kerala.netlify.app/',
    repo: 'https://github.com/P1-KumMan/Kerala_tourism',
    // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'space2.png',
    title: 'SpaceX Site',
    info: '',
    info2: '',
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
