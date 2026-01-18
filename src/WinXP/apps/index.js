import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import ErrorBox from './ErrorBox';
import MyComputer from './MyComputer';
import Notepad from './Notepad';
import Winamp from './Winamp';
import Paint from './Paint';

/* ===== YOUR CUSTOM APPS (folders in src/WinXP/apps/...) ===== */
import AboutMe from './AboutMe';
import Poems from './Poems';
import Socials from './Socials';
import Checker from './Checker';

/* ===== icons ===== */
import iePaper from 'assets/windowsIcons/ie-paper.png';
import ie from 'assets/windowsIcons/ie.png';
import mine from 'assets/minesweeper/mine-icon.png';
import error from 'assets/windowsIcons/897(16x16).png';
import computer from 'assets/windowsIcons/676(16x16).png';
import computerLarge from 'assets/windowsIcons/676(32x32).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import winamp from 'assets/windowsIcons/winamp.png';
import paintLarge from 'assets/windowsIcons/680(32x32).png';
import paint from 'assets/windowsIcons/680(16x16).png';

/* use YOUR icons if you have them, otherwise these are fine placeholders */
import poemsIcon from 'assets/windowsIcons/327(32x32).png';     // notepad-ish
import poemsIconSmall from 'assets/windowsIcons/327(16x16).png';
import socialsIcon from 'assets/windowsIcons/ie.png';          // IE-ish
import socialsIconSmall from 'assets/windowsIcons/ie-paper.png';
import checkerIcon from 'assets/windowsIcons/299(32x32).png';  // search-ish
import checkerIconSmall from 'assets/windowsIcons/299(32x32).png';

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};

const genId = gen();
const genIndex = gen();

/* windows that spawn by default on load */
export const defaultAppState = [
  {
    component: AboutMe,
    header: {
      title: 'About Me',
      icon: iePaper,
    },
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 130,
      y: 20,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Minesweeper,
    header: {
      title: 'Minesweeper',
      icon: mine,
    },
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 180,
      y: 170,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Winamp,
    header: {
      title: 'Winamp',
      icon: winamp,
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
  {
    component: MyComputer,
    header: {
      title: 'My Computer',
      icon: computer,
    },
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 250,
      y: 40,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
];

/* desktop icons */
export const defaultIconState = [
  {
    id: 0,
    icon: ie,
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
    icon: mine,
    title: 'Minesweeper',
    component: Minesweeper,
    isFocus: false,
  },
  {
    id: 5,
    icon: computerLarge,
    title: 'My Computer',
    component: MyComputer,
    isFocus: false,
  },
  {
    id: 6,
    icon: notepadLarge,
    title: 'Notepad',
    component: Notepad,
    isFocus: false,
  },
  {
    id: 7,
    icon: winamp,
    title: 'Winamp',
    component: Winamp,
    isFocus: false,
  },
  {
    id: 8,
    icon: paintLarge,
    title: 'Paint',
    component: Paint,
    isFocus: false,
  },
];

/* start menu / openApp settings */
export const appSettings = {
  'About Me': {
    header: {
      icon: iePaper,
      title: 'About Me',
    },
    component: AboutMe,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },

  Poems: {
    header: {
      icon: poemsIconSmall,
      title: 'Poems',
    },
    component: Poems,
    defaultSize: {
      width: 660,
      height: 520,
    },
    defaultOffset: {
      x: 160,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },

  Socials: {
    header: {
      icon: socialsIconSmall,
      title: 'Socials',
    },
    component: Socials,
    defaultSize: {
      width: 520,
      height: 420,
    },
    defaultOffset: {
      x: 190,
      y: 80,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },

  Checker: {
    header: {
      icon: checkerIconSmall,
      title: 'Checker',
    },
    component: Checker,
    defaultSize: {
      width: 620,
      height: 560,
    },
    defaultOffset: {
      x: 210,
      y: 90,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },

  Minesweeper: {
    header: {
      icon: mine,
      title: 'Minesweeper',
    },
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 190,
      y: 180,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },

  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },

  'My Computer': {
    header: {
      icon: computer,
      title: 'My Computer',
    },
    component: MyComputer,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },

  Notepad: {
    header: {
      icon: notepad,
      title: 'Untitled - Notepad',
    },
    component: Notepad,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 270,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },

  Winamp: {
    header: {
      icon: winamp,
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

  Paint: {
    header: {
      icon: paint,
      title: 'Untitled - Paint',
    },
    component: Paint,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 280,
      y: 70,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
};

/* export list */
export {
  AboutMe,
  Poems,
  Socials,
  Checker,
  Minesweeper,
  ErrorBox,
  MyComputer,
  Notepad,
  Winamp,
  Paint,
  InternetExplorer,
};
