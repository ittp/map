import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import { ObjectManager, YMaps } from "react-yandex-maps";

const App = () => (
  <YMaps>
        <Map defaultState={{
    center: [55.751574, 37.573856],
    zoom: 5
  }}></Map>
    <ObjectManager>

    </ObjectManager>
    <div>My awesome application with maps!</div>
  </YMaps>
);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
