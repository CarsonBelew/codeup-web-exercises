"use strict";

var corsUrl = 'https://cors-anywhere.herokuapp.com/';
var darkSkyUrl = 'https://api.darksky.net/forecast/';
var darkSkyApiKey = darkSkyKey;
// lat and lng of SA
var lat = 29.4241;
var lng = -98.4936;




$.get(corsUrl + darkSkyUrl + darkSkyApiKey + "/" + lat + "," + lng).done(function (data) {
    console.log(data);
    var dateCurrent = (data.currently.time);
    var dateObject = new Date(dateCurrent * 1000);
    console.log(dateObject.toString());
});


