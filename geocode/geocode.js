const request = require('request');

var geocodeAddress = (originalAddress, callback) => {
    var encodeAddress = encodeURIComponent(originalAddress);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to google server.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

var getTemperature = (argv, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${argv.k}/${argv.lat},${argv.lon}`,
        json: true
    }, (error, response, body) => {
        if (body.code === 400) {
            callback('The given location (or time) is invalid.');
        } else if (body === 'Forbidden') {
            callback('User key is not authenticated.');
        } else {
            callback(undefined, {
                temperature: body.currently.temperature
            });
        }
    });
};

module.exports = {
    geocodeAddress,
    getTemperature
};
