import logo from './logo.svg';
import './App.css';
import {Button, Circle, Clusterer, FullscreenControl, GeoObject, GeolocationControl, ListBox, ListBoxItem, Map, ObjectManager, Panorama, Placemark, Polygon, Polyline, Rectangle, RouteButton, RouteEditor, RoutePanel, RulerControl, SearchControl, TrafficControl, TypeSelector, YMaps, ZoomControl, withYMaps} from 'react-yandex-maps'
import { Table }from 'antd'
function App() {
  return (
    <div className="App">
      <header className="App-header">
    
      </header>
      <YandexMaps></YandexMaps>
      


      <table>

      </table>
    </div>
  );
}

export default App;
