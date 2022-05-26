const geojson = {
    type: 'FeatureCollection',
    features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [12.347337, 45.436674]
        },
        properties: {
            title: 'Mapbox',
            description: 'Venice'
        }
        },
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [121.92473979033042, 11.968946748452733]
        },
        properties: {
            title: 'Mapbox',
            description: 'Boracay'
        }
        },
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [18.110759418529227, 42.64139850493931]
        },
        properties: {
            title: 'Mapbox',
            description: 'Dubrovnik'
        }
        },
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [98.76598119568365, 7.676724786925769]
        },
        properties: {
            title: 'Mapbox',
            description: 'Maya Bay'
        }
        },
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [9.729454129038485, 44.1073633521156]
        },
        properties: {
            title: 'Mapbox',
            description: 'Cinque Terre'
        }
        },
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [25.462121592740505, 36.39382747441639]
        },
        properties: {
            title: 'Mapbox',
            description: 'Santorini'
        }
        },
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [3.0270760435441506, 39.72470785203198]
        },
        properties: {
            title: 'Mapbox',
            description: 'Mallorca'
        }
        },
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-18.171860286912676, 63.77198381927736]
        },
        properties: {
            title: 'Mapbox',
            description: 'Canyon'
        }
        },
    ]
};
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');    
    el.className = 'marker';
    
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el, {anchor: 'bottom'}).setLngLat(feature.geometry.coordinates).addTo(map);

    el.addEventListener('click', (e) => {
        /* Fly to the point */
        flyToLocation(feature);
        /* Close all other popups and display popup for clicked store */
        // createPopUp(marker);
        /* Highlight listing in sidebar */
        // const activeItem = document.getElementsByClassName('active');
        // e.stopPropagation();
        // if (activeItem[0]) {
        //   activeItem[0].classList.remove('active');
        // }
        // const listing = document.getElementById(
        //   `listing-${marker.properties.id}`
        // );
        // listing.classList.add('active');
    });
}

function flyToLocation(feature) {
    map.flyTo({
      center: feature.geometry.coordinates,
      zoom: 6
    });
}