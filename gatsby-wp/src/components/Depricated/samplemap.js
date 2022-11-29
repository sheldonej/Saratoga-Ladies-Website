module.exports = {
    plugins: [
        {
            resolve: `@ccalamos/gatsby-source-googlemaps-static`,
            options: {
                key: `YOUR_GOOGLE_MAPS_STATIC_API_KEY`,
                center: `LATITUDE,LONGITUDE || CITY,REGION`,
                zoom: `ZOOM_LEVEL`,
                size: `SIZE || WIDTHxHEIGHT`,
                scale: `SCALE_VALUE`,
                format: `IMAGE_EXTENSION`,
                mapType: `MAP_FORMAT`,
                mapID: `CLOUD_BASED_STYLE_MAP_ID`,
                styles:
                    [
                        {
                            feature: `FEATURE`,
                            element: `ELEMENT`,
                            rules: {
                                hue: `HUE`,
                                lightness: `LIGHTNESS`,
                                saturation: `SATURATION`,
                                gamma: `GAMMA`,
                                invert_lightness: true || false,
                                visibility: `VISIBILITY`,
                                color: `COLOR`,
                                weight: `WEIGHT`,
                            },
                        },
                    ],
                markers:
                    [
                        {
                            location: `LATITUDE,LONGITUDE || CITY,REGION`,
                            color: `COLOR`,
                            size: `SIZE`,
                            label: `A_SINGLE_ALPHANUMERIC_CHARACTER`,
                            icon: `URI`,
                            anchor: `ANCHOR_POSITION`,
                        },
                    ],
                paths:
                    [
                        {
                            weight: `WEIGHT`,
                            color: `COLOR`,
                            fillColor: `FILL_COLOR`,
                            geoDesic: true || false,
                            points: [`LATITUDE,LONGITUDE || CITY,REGION`],
                        },
                    ],
                visible:
                    [`LATITUDE,LONGITUDE || CITY,REGION`],
                clientID: `GOOGLE_MAPS_STATIC_CLIENT_ID`,
                secret: `GOOGLE_MAPS_SECRET_FOR_SIGNED_URLS`,
                query: `GOOGLE_MAPS_URL_QUERY`,
                nickname: `NICKNAME`,
                maps: [
                    {
                        `ALL_OPTIONS`,
                    }
                ],
            },
        },
    ],
};
