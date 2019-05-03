
    "use strict";

    var corsUrl = 'https://cors-anywhere.herokuapp.com/';
    var darkSkyUrl = 'https://api.darksky.net/forecast/';
    var darkSkyApiKey = darkSkyKey;
// lat and lng of SA
    var lat = 29.4241;
    var lng = -98.4936;
    var darkSkyData = corsUrl + darkSkyUrl + darkSkyApiKey + "/" + lat + "," + lng;


    $.get(darkSkyData).done(function (data) {
        newHTML(data.daily.data);
    });

    function newHTML(posts) {
        var postsHTML = '';
        for (var i = 0; i <= 2; i += 1) {
            var dateCurrent = (posts[i].time);
            var dateObject = new Date(dateCurrent * 1000).toDateString();

            postsHTML += "<div id='forecastDiv'>";
            postsHTML += "<h4>" + "High for today: " + posts[i].temperatureHigh + "</h4>";
            postsHTML += "<ul>";
            postsHTML += "<li><img src=" + icons[posts[i].icon] + "></li>";
            postsHTML += "<li><strong>Clouds: </strong><span>" + posts[i].summary + "</span>" + "</li>";
            postsHTML += "<li><strong>Humidity: </strong><span>" + posts[i].humidity + "</span>" + "</li>";
            postsHTML += "<li><strong>Wind speed: </strong>" + "<span>" + posts[i].windSpeed + "</span>" + "</li>";
            postsHTML += "<li><strong>Date: </strong>" + "<span>" + dateObject + "</span>" + "</li>";
            postsHTML += "</ul>";
            postsHTML += "</div>";
        }
        $("#insertWeather").html(postsHTML)
    }

    var icons = {
        "clear-day" : "icon/SVG/Sun.svg",
        "clear-night" : "icon/SVG/Moon-Full.svg",
        "rain" : "icon/SVG/Cloud-Rain.svg",
        "snow" : "icon/SVG/Cloud-Snow.svg",
        "sleet" : "icon/SVG/Cloud-Hail.svg",
        "wind" : "icon/SVG/Wind.svg",
        "fog" : "icon/SVG/Cloud-Fog-Alt.svg",
        "cloudy" : "icon/SVG/Cloud.svg",
        "partly-cloudy-day" : "icon/SVG/Cloud-Sun.svg",
        "partly-cloudy-night" : "icon/SVG/Cloud-Moon.svg"
    };

    mapboxgl.accessToken = mapboxKey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v10',
        center: [-98.4916, 29.4252],
        zoom: 4
    });

    map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }));

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        console.log(lngLat);
        var newDarkSkyData = corsUrl + darkSkyUrl + darkSkyApiKey + "/" + lngLat.lat + "," + lngLat.lng;

        $.get(newDarkSkyData).done(function (data) {
            newHTML(data.daily.data);
        });
        console.log(lngLat.lat);
        console.log(lngLat.lng)


    }

    marker.on('dragend', onDragEnd);
