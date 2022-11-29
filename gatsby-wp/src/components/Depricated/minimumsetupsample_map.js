module.exports = {
    plugins: [
        {
            resolve: "@ccalamos/gatsby-source-googlemaps-static",
            options: {
                key: process.env.GOOGLE_MAPS_STATIC_API_KEY,
                center: "Chicago, IL",
            },
        },
    ],
};
