import React from 'react';

import WinXP from 'WinXP';
import WinterLetterVN from './components/WinterLetterVN';

const App = () => {
  const path = window.location.pathname;

  if (path === '/vn') {
    return <WinterLetterVN />;
  }

  return <WinXP />;
};

export default App;
