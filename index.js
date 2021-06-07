var auth0 = require('auth0-deploy-cli');

var argv = require('yargs')
    .boolean('bark')
    .alias('b', 'bark')
    .argv;

if (argv.bark) console.log("Woof!");
else console.log("Meow!");