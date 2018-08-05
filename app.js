const yargs = require('yargs');

const geocode = require('./geocode/geocode');

// const argv = yargs
//             .option({
//                 a: {
//                     demand: true,
//                     alias: 'address',
//                     description: 'Address of fetch weather for',
//                     string: true
//                 }
//             })
//             .help()
//             .alias('h', 'help')
//             .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

// const yargs = require('yargs');
const request = require('request');

const argv = yargs
            .options({
                k: {
                    demand: true,
                    alias: 'key',
                    description: 'User key',
                    string: true
                },
                lat: {
                    demand: true,
                    alias: 'latitude',
                    description: 'latitude of location',
                    string: true
                },
                lon: {
                    demand: true,
                    alias: 'longitude',
                    description: 'longitude of location',
                    string: true
                }
            })
            .help()
            .alias('h', 'help')
            .argv;

geocode.getTemperature(argv, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});

// key:bc4f2ab49f522007e2f65eebf9d48bc2
// "latitude": 22.6624845,
// "longitude": 120.2890786
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

