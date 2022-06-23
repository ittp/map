import { Component } from 'react'
import { Button, Circle, Clusterer, FullscreenControl, GeoObject, GeolocationControl, ListBox, ListBoxItem, Map, ObjectManager, Panorama, Placemark, Polygon, Polyline, Rectangle, RouteButton, RouteEditor, RoutePanel, RulerControl, SearchControl, TrafficControl, TypeSelector, YMaps, ZoomControl, withYMaps } from 'react-yandex-maps'



const addressPlacemark =   Placemark({

})

const MapContainer =new YMaps.MapView({

})


const config = require('./config')
const ViewMap = new Map(config.map)
// {object => object.id % 2 === 0}
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

// YMaps()
new ObjectManager({})
const aView = (config) => (<YMaps></YMaps>)

export default class MapView extends Component {


    constructor(props){
        // eslint-disable-next-line no-unused-expressions
    }


    render() {
        return <div>map</div>
    }
}