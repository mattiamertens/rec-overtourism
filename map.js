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
                description: 'Venice',
                time: '431',
                reason: 'RESIDENTS',
                link: '../destinations/venice.html'
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
                description: 'Boracay',
                time: '322',
                reason: '',
                link: '../destinations/boracay.html'
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
                description: 'Dubrovnik',
                time: '525',
                reason: '',
                link: '../destinations/dubrovnik.html'
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
                description: 'Maya Bay',
                time: '283',
                reason: '',
                link: '../destinations/mayab.html'
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
                description: 'Cinque Terre',
                time: '243',
                reason: '',
                link: '../destinations/cinqueT.html'
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
                description: 'Santorini',
                time: '96',
                reason: '',
                link: '../destinations/santorini.html'
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
                description: 'Mallorca',
                time: '87',
                reason: '',
                link: '../destinations/mallorca.html'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-72.5449493172292, -13.162508583930899]
            },
            properties: {
                title: 'Mapbox',
                description: 'Machu Pichu',
                time: '235',
                reason: '',
                link: '../destinations/machuP.html'
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
                description: 'Fjadrargljufur canyon',
                time: '292',
                reason: 'NATURE',
                link: '../destinations/canyon.html'
            }
        }
    ]
};
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');    
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el, {anchor: 'bottom'}).setLngLat(feature.geometry.coordinates)
        // .setPopup(popup)    
        .addTo(map);

    el.addEventListener('click', (e) => {
        flyToLocation(feature);
        createPopUp(feature)
    });
}

function flyToLocation(feature) {
    map.flyTo({
      center: feature.geometry.coordinates,
      zoom: 6
    });
}
// function openPopUp(feature){
//     const coordinates = feature.geometry.coordinates;
//     const description = feature.properties.description;
//     new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
// }

function createPopUp(feature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();

   
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    // var today  = new Date(); 
    var myDate = new Date(new Date().getTime()+(`${feature.properties.time}`*24*60*60*1000));
    var formatDate = myDate.toLocaleDateString("en-US", options);
  
    const popup = new mapboxgl.Popup({ closeOnClick: false, offset: 15 })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(` <div class="popUp">
        <div class="popUp-title">${feature.properties.description}</div>
            <div class="waiting-time-big sans-bold">
                    ${feature.properties.time} days <span>of waiting time</span>
                <div class="next-spot sans-regular"> Next available spot on<span class="sans-bold"> ${formatDate} </span></div>
                <div class="comparison-data">
                    <div class="mono-bold">Enough time to:</div>
                    Get a C2 in English starting from 0 and still have 98 days spare
                </div>
            </div>

            <div class="popUp-footer flex-display-center-sb">
                <a href="${feature.properties.link}" class="stream-button list-btn btn-text">Watch stream</a>
                <div class="reason"> ${feature.properties.reason}</div>
            </div>
        </div>`)
      .setMaxWidth("45%")
      .addTo(map);
}