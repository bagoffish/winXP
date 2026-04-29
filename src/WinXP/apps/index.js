import Minesweeper from './Minesweeper';
import Paint from './Paint';
import AboutMe from './AboutMe';
import Poems from './Poems';
import Socials from './Socials';
import Checker from './Checker';
import Winamp from './Winamp';

import aboutMeIcon from 'assets/windowsIcons/about-me.png';
import poemsIcon from 'assets/windowsIcons/poems.png';
import socialsIcon from 'assets/windowsIcons/links.png';
import checkerIcon from 'assets/windowsIcons/checker.png';
import mineIcon from 'assets/windowsIcons/pinball.png';
import paintIcon from 'assets/windowsIcons/edit.png';
import winampIcon from 'assets/windowsIcons/msn.png'; // placeholder icon

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};

const genId = gen();
const genIndex = gen();

/* =========================
   DEFAULT OPEN APPS
   (Winamp hidden like original)
========================= */
export const defaultAppState = [
  {
    component: Winamp,
    header: {
      title: 'Winamp',
      icon: winampIcon,
      invisible: true,
    },
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
];

/* =========================
   DESKTOP ICONS
========================= */
export const defaultIconState = [
  {
    id: 0,
    icon: aboutMeIcon,
    title: 'About Me',
    component: AboutMe,
    isFocus: false,
  },
  {
    id: 1,
    icon: poemsIcon,
    title: 'Poems',
    component: Poems,
    isFocus: false,
  },
  {
    id: 2,
    icon: socialsIcon,
    title: 'Socials',
    component: Socials,
    isFocus: false,
  },
  {
    id: 3,
    icon: checkerIcon,
    title: 'Checker',
    component: Checker,
    isFocus: false,
  },
  {
    id: 4,
    icon: mineIcon,
    title: 'Minesweeper',
    component: Minesweeper,
    isFocus: false,
  },
  {
    id: 5,
    icon: paintIcon,
    title: 'Paint',
    component: Paint,
    isFocus: false,
  },
];

/* =========================
   APP SETTINGS
========================= */
export const appSettings = {
  'About Me': {
    header: {
      icon: aboutMeIcon,
      title: 'About Me',
    },
    component: AboutMe,
    defaultSize: {
      width: 500,
      height: 400,
    },
    defaultOffset: {
      x: 100,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },

  Poems: {
    header: {
      icon: poemsIcon,
      title: 'Poems',
    },
    component: Poems,
    defaultSize: {
      width: 600,
      height: 500,
    },
    defaultOffset: {
      x: 120,
      y: 70,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },

  Socials: {
    header: {
      icon: socialsIcon,
      title: 'Socials',
    },
    component: Socials,
    defaultSize: {
      width: 400,
      height: 300,
    },
    defaultOffset: {
      x: 140,
      y: 90,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },

  Checker: {
    header: {
      icon: checkerIcon,
      title: 'Checker',
    },
    component: Checker,
    defaultSize: {
      width: 400,
      height: 300,
    },
    defaultOffset: {
      x: 160,
      y: 110,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },

  Minesweeper: {
    header: {
      icon: mineIcon,
      title: 'Minesweeper',
    },
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 180,
      y: 130,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },

  Paint: {
    header: {
      icon: paintIcon,
      title: 'Untitled - Paint',
    },
    component: Paint,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 200,
      y: 150,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },

  /* ===== WINAMP (restored exactly like original) ===== */
  Winamp: {
    header: {
      icon: winampIcon,
      title: 'Winamp',
      invisible: true,
    },
    component: Winamp,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
};

/* =========================
   EXPORTS
========================= */
export {
  AboutMe,
  Poems,
  Socials,
  Checker,
  Minesweeper,
  Paint,
  Winamp,
};
