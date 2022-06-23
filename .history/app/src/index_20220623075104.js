import React, { createContext, Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { PageHeader, Container, Row, Col, Space, Form, Table, Input,Tree, AutoComplete } from 'antd';
import 'antd/dist/antd.css'
import { ObjectManager, Map, YMaps, Clusterer as Clusters, Placemark, Button,FullscreenControl } from "react-yandex-maps";


const sqlite = require('sqlite3')

let features =[]

const App = (config) => (
  <YMaps>
    <Map defaultState={{
    center: [55.751574, 37.573856],
    zoom: 5
  }}></Map>
    <div>Map Container</div>
  </YMaps>
);


const Footer = () => <footer>Copyright</footer>

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


const AHeader = (config) => (
    <PageHeader
    className="site-page-header"
    onBack={(ctx) => console.log('back', ctx)}
    title="Карта"
    subTitle="Просмотр адресов"
    extra={<Button>Update</Button>}

  />
);



const dataSource = [
  {
    key: '1',
    name: 'ПСО Кировского района',
    age: 32,
    address: 'проспект Стачек',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

<Table dataSource={dataSource} columns={columns} />;

export default App;
root.render(
    <>
    <AHeader />
    <App />
    <Footer /> 
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
