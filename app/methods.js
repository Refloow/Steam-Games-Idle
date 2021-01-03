// Steam-Games-Idle - Bot built by Refloow (-MajokingGames)
	
	    
/*

Want active support and new updates with new features all for free?

Leave an star on github repo its free ( we push updates based on the engagement )
Repo link: https://github.com/OSL-Works/Steam-Games-Idle 

  Discord Support Server: https://discord.gg/D8WCtDD     (Open an ticket)

*/
	

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  
  Donate: https://ko-fi.com/refloow

 */


// Checking if required modules are properly installed

try {
    // Checking if module colors is installed
    colors = require('colors');
    // Checking if module moment is installed
    moment = require('moment');
} catch (ex) {
    // If modules are not installed showing an clear error message to user.
    console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
    console.log(ex);
    process.exit(1);
}

// We recommend not editing stuff that is in this file.

// Importing files into project
const package = require('./../package.json');
const config = require('./Settings/config.js');

t = module.exports = {

    // Method for disabling auto generating codes
    AutoGenerateLoginCodes: function() {
        return config.SteamGuardAuto == true;
    },

    // Method for disabling update notifications
    UpdateNotifDisable: function() {
        return config.UpdateNotif_Enable == true;
    },

    // Method for checking for new version
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

// Steam-Games-Idle - Bot built by Refloow (-MajokingGames)
	
	    
/*

Want active support and new updates with new features all for free?

Leave an star on github repo its free ( we push updates based on the engagement )
Repo link: https://github.com/OSL-Works/Steam-Games-Idle 

  Discord Support Server: https://discord.gg/D8WCtDD     (Open an ticket)

*/
	

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  
  Donate: https://ko-fi.com/refloow

 */

