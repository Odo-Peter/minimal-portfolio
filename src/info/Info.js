import self from '../img/self.png';
import inquire from '../img/inquire.png';
import help from '../img/help.png';
import itube from '../img/itube.png';
import port from '../img/port.png';
import scraper from '../img/scraper.png';

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];

export const info = {
  firstName: 'Peter',
  lastName: 'Odo',
  initials: 'PO',
  position: 'a Frontend Developer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '☕',
      text: 'Consistency over Intensity',
    },
    {
      emoji: '🌎',
      text: 'Based in the Nigeria',
    },
    {
      emoji: '💼',
      text: 'Developer | Coding Instructor',
    },
    {
      emoji: '📧',
      text: 'odopeter33@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://github.com/Odo-Peter',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://linkedin.com/in/peter-odo-254aa026b',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/Odo_Peter_Ebere',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
  ],
  bio: "Hello! I'm Peter. I'm a freelance web developer and a coding instructor for kids. I am proficient with frontend technologies, and I enjoy learning new stuffs that challenges me. We should have a chat!",
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'git',
      'github',
      'MongDB',
      'nodejs',
      'html5',
      'css3',
      'tailwindcss',
    ],
    exposedTo: ['sql', 'python', 'typescript'],
  },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'exploring',
      emoji: '🎭',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'writing',
      emoji: '🌶',
    },
  ],
  portfolio: [
    {
      title: 'Inquire_Hub - AI Personal Assistant',
      live: 'https://inquire.onrender.com',
      source: 'https://github.com/Odo-Peter/inquireHub-FE',
      image: inquire,
    },
    {
      title: 'Help_Me_Out - Screen Recorder',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/Odo-Peter/chrome-extension-FE',
      image: help,
    },
    {
      title: 'Get_Scraped - Ecommerce Web Scraper',
      live: 'https://landing.odopeter.tech/',
      source: 'https://github.com/Odo-Peter/portfolio-landing',
      image: scraper,
    },
    {
      title: 'Personal_Portfolio',
      live: 'https://dev.odopeter.tech/',
      source: 'https://github.com/paytonjewell',
      image: port,
    },
    // {
    //   title: 'iTube - Customizable YouTube clone',
    //   live: 'https://paytonpierce.dev',
    //   source: 'https://github.com/paytonjewell',
    //   image: mock5,
    // },
    {
      title: 'iTube - Customizable YouTube clone',
      live: 'https://itube-app.onrender.com/',
      source:
        'https://github.com/Odo-Peter/iTube_V1.0.0/tree/master/iTube_client',
      image: itube,
    },
  ],
};
