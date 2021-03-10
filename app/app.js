
// Copyright notice:

/*--------------------------------------------------------------------------------------------- 
* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.

* Code origin: https://github.com/OSL-Works/Steam-Games-Idle
* Developer name: Veljko Vuckovic
* Licensed under the MIT License. See LICENSE in the project root for license information.
* Published License: https://github.com/OSL-Works/Steam-Games-Idle/master/LICENSE

* Contact information:
  Discord Support Server: https://discord.gg/D8WCtDD
  Main developer steam: https://steamcommunity.com/id/MajokingGames/ 
  Mail: refloowlibrarycontact@gmail.com

* Donations:
  Donate: https://ko-fi.com/refloow
 --------------------------------------------------------------------------------------------*/

 /* 

// legal advice: PERMISSIONS AND RIGHTS

* License does not prohibit modification, distribution, private/commercial use or sale of copies as long as the original LICENSE file
 and authors copyright notice are left ass they are in the project files.
* Copyright notice could be included ones or multiple times within the file.
* Copyright notice should not be removed even within the larger works (Larger modifications applied).
* Original file tags cannot be removed without creators exclusive permission.
* Adding own tags in files is possible in case of modification - even in that case original tags must be kept.
* Year on the copyright notice breakdown:
* Generally, the “year of first publication of the work” refers to the year in which the work was first distributed to the public (first year mentioned)
* Any year after represents the year of added modifications.
* Copyright cannot expire so therefore you cannot remove copyright notice if its not updated to the latest year.
* Editing existing copyright notice(s) is also prohibited.

===================================================================================
Removing copyright notice & distributing, using or selling the software without
the original license and copyright notice is licence agreement breach and its considered criminal offense and piracy.
===================================================================================

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
	refloowidle.setPersona(1);
	infolog.correct(`| [Reflooow] | LOGIN |: User is logined to steam and script is ready to set idling game...`);
	// Setting game to idle for
	refloowidle.gamesPlayed(config.GameToIdleFor);
	infolog.info(`| [IDLE] | GAMES |: Bot started idling for ${config.GameToIdleFor}`);
});

// Copyright notice:

/* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
  Code origin (Free GitHub publish): https://github.com/OSL-Works/Steam-Games-Idle*/
