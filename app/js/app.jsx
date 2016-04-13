import React from 'react';
import ReactDOM from 'react-dom';
import Flux from 'flux';
import AppDispatcher from './appDispatcher.jsx';
import HeaderBox from './header/headerBox.jsx';
import VideoBox from './content/videoBox.jsx';
import FooterBox from './footer/footerBox.jsx';
import Modal from './modal/modal.jsx';

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

ReactDOM.render(
  <Modal />,
  document.getElementById('modal')
);
