import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { WildfireLocationMarker } from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 'wildfires') {
            return <WildfireLocationMarker key={ev.id} 
                lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} 
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title, lastActive:ev.geometry[0].date})}/>
        }
    })
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} onClick={() => setLocationInfo(null)} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -112.8756
    },
    zoom: 4
}

export default Map
