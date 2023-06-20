import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  // SOLO PARA DESARROLLO
    <GifExpertApp />
  </React.StrictMode>,
)

// const apiKey = 'VFazjnm1utxxdEzWKYYN6YnsLC7mm6b8';
// const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);