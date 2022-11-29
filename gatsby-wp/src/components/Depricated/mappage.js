import React from "react";
import GoogleMapReact from 'google-map-react';
import {Square2nd} from '../components/Shapesjs'

export default function mapsample(){
    const saratoga = {

        center: {
            lat: 43.027024,
            lng: -73.612895
        },
        zoom: 15
    };

    const rpi = {

        center: {
            lat: 42.7298,
            lng: -73.6789
        },
        zoom: 15
    };

    const empirestateplaza = {

        center: {
            lat: 42.6500,
            lng: -73.7595
        },
        zoom: 15
    };


    return (
        <div style={{ height: '35vh', width: '35%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={saratoga.center}
                defaultZoom={saratoga.zoom}
            >
            </GoogleMapReact>

            <div> above is a sample map </div>
            <div> Saratoga National Cemetery </div>

            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={rpi.center}
                defaultZoom={rpi.zoom}
            >
            </GoogleMapReact>

            <div> above is a sample map </div>
            <div> Rensselaer Polytechnic Institute </div>

            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={empirestateplaza.center}
                defaultZoom={empirestateplaza.zoom}
            >
            </GoogleMapReact>

            <div> above is a sample map </div>
            <div> Empire State Plaza </div>

            <div> All the locations are just samples for development purposes </div>

            <Square2nd/>
            <div> the square above is displayed as a substitute of photo</div>

        </div>
    );
}
