import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './googlemapcompss.css'


class LeafletMap extends React.Component {

    static Types = {
        position: PropTypes.array,
        zoom: PropTypes.number,
        markerText: PropTypes.string
    }
    static defaultstuff = {
        position: [15, -5],
        zoom: 10,
        markerText: ""
    }
    render() {
        return (
            <Map center={position} zoom={zoom}>
                <TileLayer
                    url= "url"
                    attribution="atrb"
                />
                {markerText !== "" &&
                    <Marker position={position}>
                        <Popup>{markerText}</Popup>
                    </Marker>
                }
            </Map>
        );
    }
}
export default LeafletMap