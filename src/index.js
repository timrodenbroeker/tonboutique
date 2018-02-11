import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {HashRouter} from 'react-router-dom';




import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
	    'Libre Franklin:300,400,500,600,700,800,900', 
      'Montserrat:100,200,300,400,500,600,700,800',
      'Fjalla One:400',
	    'Roboto Mono:100,300,400,500,700',
	    'Space Mono:400,400',
	    'Barlow Condensed:100,200,300,400,500,600,700,800,900',
	    'Barlow:100,200,300,400,500,600,700,800,900',
	    'Oswald:200,300,400,500,600,700'
    ]
  }
});


ReactDOM.render(

<HashRouter basename={'/'}>
  <App />
</HashRouter>


, document.getElementById('root'));
registerServiceWorker();
