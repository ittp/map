import React, { createContext, Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import { ObjectManager, Map, YMaps, Clusterer as Clusters, Placemark, Button,FullscreenControl } from "react-yandex-maps";

const App = (config) => (
  <YMaps>
    <Map defaultState={{
    center: [55.751574, 37.573856],
    zoom: 5
  }}></Map>
    <div>Map Container</div>
  </YMaps>
);


const ViewPl = <YMaps>
    <Map defaultState={{
    center: [55.751574, 37.573856],
    zoom: 10
  }}>
      <ObjectManager options={{
      clusterize: true,
      gridSize: 32
    }} objects={{
      openBalloonOnClick: true,
      preset: 'islands#greenDotIcon'
    }} clusters={{
      preset: 'islands#redClusterIcons'
    }} filter={object => object.id % 2 === 0} defaultFeatures={features} modules={['objectManager.addon.objectsBalloon', 'objectManager.addon.objectsHint']} />
    </Map>
  </YMaps>
const root = ReactDOM.createRoot(document.getElementById('root'));

import { PageHeader } from 'antd';

const Header = (config) => (
    <PageHeader
    className="site-page-header"
    onBack={() => console.log('back')}
    title="Title"
    subTitle="This is a subtitle"
  />
);

export default App;
root.render(
    <>
    <App />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
