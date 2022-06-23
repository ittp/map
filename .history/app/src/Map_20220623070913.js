import { Button, Circle, Clusterer, FullscreenControl, GeoObject, GeolocationControl, ListBox, ListBoxItem, Map, ObjectManager, Panorama, Placemark, Polygon, Polyline, Rectangle, RouteButton, RouteEditor, RoutePanel, RulerControl, SearchControl, TrafficControl, TypeSelector, YMaps, ZoomControl, withYMaps } from 'react-yandex-maps'



const addressPlacemark =   Placemark({

})

const MapContainer =new YMaps.MapView({

})


const map = {
    defaultState: {
        center: [55.751574, 37.573856],
        zoom: 10
      }
}

const e = (features) => (
    <YMaps>
        <Map ...map>
          <ObjectManager 
          options={{
          clusterize: true,
          gridSize: 32
        }} objects={{
          openBalloonOnClick: true,
          preset: 'islands#greenDotIcon'
        }} clusters={{
          preset: 'islands#redClusterIcons'
        }} filter={object => object.id % 2 === 0} 
        defaultFeatures={features} modules={['objectManager.addon.objectsBalloon', 'objectManager.addon.objectsHint']} />
        </Map>
      </YMaps>)