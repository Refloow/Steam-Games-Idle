// Steam-Games-Idle - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */

// Checking if required modules are properly installed

try {
	// Checking if module steam-user is installed
	SteamUser = require('steam-user');
	// Checking if module steam-totp is installed
	SteamTotp = require('steam-totp');
	// Checking if module steamcommunity is installed
	SteamCommunity = require('steamcommunity');
} catch (ex) {
	// If modules are not installed showing an clear error message to user.
	console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
	console.log(ex);
	process.exit(1);
}

// Importing required files
const config = require('./Settings/config.js');
const infolog = require('./infolog.js');
const method = require('./methods');

// Name of the client
const refloowidle = new SteamUser();

// Login options for auto login (auto generating 2fa codes)
const LogOnOptionsAUTO = {
	accountName: config.loginAccName,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.shared_secret)
}
// Login options for manual login (auto generating 2fa codes disabled)
const LogOnOptionsMANUAL = {
	accountName: config.loginAccName,
	password: config.password,
}

// Checking for correct version (updates) for bot on github
if(method.UpdateNotifDisable()) {
    method.check();
}

// APP START

// If auto generate method is used use options for login auto
if(method.AutoGenerateLoginCodes())
    {
    refloowidle.logOn(LogOnOptionsAUTO);
}
// If auto generate method is disabled use options for login manual
if(!method.AutoGenerateLoginCodes())
	{
    refloowidle.logOn(LogOnOptionsMANUAL);
}
    

// Set Idle Game
refloowidle.on('loggedOn', () => {
	refloowidle.setPersona(SteamUser.Steam.EPersonaState.LookingToTrade,);
	infolog.correct(`| [Reflooow] | LOGIN |: User is logined to steam and script is ready to set idling game...`);
	// Setting game to idle for
	refloowidle.gamesPlayed(config.GameToIdleFor);
	infolog.info(`| [IDLE] | GAMES |: Bot started idling for ${config.GameToIdleFor}`);
});


// Steam-Games-Idle - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com 
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */
