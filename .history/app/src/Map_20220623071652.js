import { Button, Circle, Clusterer, FullscreenControl, GeoObject, GeolocationControl, ListBox, ListBoxItem, Map, ObjectManager, Panorama, Placemark, Polygon, Polyline, Rectangle, RouteButton, RouteEditor, RoutePanel, RulerControl, SearchControl, TrafficControl, TypeSelector, YMaps, ZoomControl, withYMaps } from 'react-yandex-maps'



const addressPlacemark =   Placemark({

})

const MapContainer =new YMaps.MapView({

})


const config = require('./config')
const ViewMap = new Map(config.map)

let om = {
    objects:{
        openBalloonOnClick: true,
        preset: 'islands#greenDotIcon'
      },
    options: {
        clusterize: true,
        gridSize: 32
      },
    clusters: {
        preset: 'islands#redClusterIcons'
    },
   defaultFeatures: {},
   filter: "",
    modules: ['objectManager.addon.objectsBalloon', 'objectManager.addon.objectsHint']
}


new ObjectManager({})
const e = (features) => (
    <YMaps>
        
          <ObjectManager 
          options={} } clusters={{
        
        }} 
        filter=
        </Map>
      </YMaps>)