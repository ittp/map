import React, { createContext, Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { PageHeader, Container, Row, Col, Space, Form, Table, Input,Tree, AutoComplete } from 'antd';
import 'antd/dist/antd.css'
import { ObjectManager, Map, YMaps, Clusterer as Clusters, Placemark, Button,FullscreenControl } from "react-yandex-maps";


const App = {
  Header: <PageHeader>1</Header>

}


root.render(
    <>
    <Header />
    <MapContainer />

    <Table dataSource={dataSource} columns={columns} />;
    <Footer /> 
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
