
// We recommend not editing stuff that is in this file.

const package = require('./../package.json');
const config = require('./Settings/config.js');
const colors = require('colors');
const moment = require('moment');

t = module.exports = {
	check: function() {
        const request = require('request');
        var options = {
            url: 'https://raw.githubusercontent.com/Refloow/Steam-Games-Idle/master/package.json',
            method: 'GET',
        };
        function look(error, JSONresponse, body) {
            var page = JSON.parse(body)
            const v = package.version;
            if(page.version != v)
                console.log(`| [GitHub] | VERSION |:  ${'New update available for '+package.name+ ' v'+page.version.green+'! You\'re currently only running version '+v.yellow+''}\n${`| [GitHub] | VERSION |: Go to https://github.com/Refloow/Steam-Games-Idle to update now!`}\n\n`)
            else 
                console.log(`| [GitHub] | VERSION |: You're running the latest version of Steam-Games-Idle (v${v.green})\n\n`)
        }
        request(options, look)
    }
}