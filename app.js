const request = require('request');
const yargs = require('yargs');


const argv = yargs
            .option({
                a: {
                    demand: true,
                    alias: 'address',
                    description: 'Address of fetch weather for',
                    string: true
                }
            })
            .help()
            .alias('h', 'help')
            .argv;

console.log('argv :', argv);

var encodeAddress = encodeURIComponent(argv.a);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json: true
}, (error, response, body) => {

    if (error) {
        console.log('Unable to connect to google server.');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address.');
    } else if (body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});