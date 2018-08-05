const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
    
});

