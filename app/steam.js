// Steam-Games-Idle - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */

// Checking if all required modules are installed.
try {
        // Checking if steam-user is installed
        SteamUser = require('steam-user');
        // Checking if steam-totp module is installed
        SteamTOTP = require('steam-totp');

} catch (ex) {
    // If modules are not installed showing an clear error message to user.
   console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
   console.log(ex);
   process.exit(1);
}

// Setting Client name
const refloowidle = new SteamUser();
