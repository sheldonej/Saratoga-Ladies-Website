import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
    center: {
        lat: 43.041537781592424,
        lng: -73.60931501879045,
    },
    zoom: 15,
}

const AComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "insertkeyhere" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <AComponent
                lat={43.041537781592424}
                lng={-73.60931501879045}
            />
        </GoogleMapReact>
    </div>
)

export default GoogleMap