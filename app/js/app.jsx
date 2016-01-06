import React from 'react';
import ReactDOM from 'react-dom';
import Dispatcher from 'flux';
import HeaderBox from './header/headerBox.jsx';
import VideoBox from './content/videoBox.jsx';
import FooterBox from './footer/footerBox.jsx';

ReactDOM.render(
  <HeaderBox />,
  document.getElementById('header')
);

ReactDOM.render(
  <VideoBox />,
  document.getElementById('content')
);

ReactDOM.render(
  <FooterBox />,
  document.getElementById('footer')
);
