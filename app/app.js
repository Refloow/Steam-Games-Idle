// Steam-Games-Idle - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowcontact@gmail.com 
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */

// Checking if required modules are properly installed

try {
	SteamUser = require('steam-user');
	SteamTotp = require('steam-totp');
	SteamCommunity = require('steamcommunity');
} catch (ex) {
	console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
	console.log(ex);
	process.exit(1);
}

const config = require('./Settings/config.js');
const Steam = require('./steam.js');
const infolog = require('./infolog.js');
const method = require('./methods');
const refloowidle = new SteamUser();
const community = new SteamCommunity();
const LogOnOptionsAUTO = {
	accountName: config.loginAccName,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.shared_secret)
}
const LogOnOptionsMANUAL = {
	accountName: config.loginAccName,
	password: config.password,
}

// Checking for correct version (updates) for bot on github

method.check();

// APP START

// Login
if(method.AutoGenerateLoginCodes())
    {
    refloowidle.logOn(LogOnOptionsAUTO);
}
if(!method.AutoGenerateLoginCodes())
	{
    refloowidle.logOn(LogOnOptionsMANUAL);
}
    

// Set Idle Game
refloowidle.on('loggedOn', () => {
	refloowidle.setPersona(SteamUser.Steam.EPersonaState.LookingToTrade,);
	infolog.correct(`| [Reflooow] | LOGIN |: User is logined to steam and script is ready to set idling game...`);
	refloowidle.gamesPlayed(config.GameToIdleFor);
	infolog.info(`| [IDLE] | GAMES |: Bot started idling for ${config.GameToIdleFor}`);
});
