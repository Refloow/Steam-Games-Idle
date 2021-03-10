
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
	// Checking if module colors is installed
	colors = require('colors');
} catch (ex) {
	// If modules are not installed showing an clear error message to user.
	console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
	console.log(ex);
	process.exit(1);
}

// Basic display on app start
console.log('‎ooooo ooooooooo  ooooo       ooooooooooo '.red);
console.log(' 888   888    88o 888         888    88  '.red);
console.log(' 888   888    888 888         888ooo8    '.red);
console.log(' 888   888    888 888      o  888    oo  '.cyan);
console.log('o888o o888ooo88  o888ooooo88 o888ooo8888 \n\n'.cyan);

                                                                          
console.log('oooooooooo    ooooooo     o888o o888             '.red);
console.log(' 888    888 ooo     o8 o888oo   888   ooooooo     ooooooo  oooo  o  oooo '.red);
console.log(' 888oooo88 888oooooo8   888     888 888     888 888     888 888 888 888 '.red);
console.log(' 888  88o  888          888     888 888     888 888     888  888888888 '.cyan);
console.log('o888o  88o8  88oooo888 o888o   o888o  88ooo88     88ooo88     88   88   \n\n\n'.cyan);

console.log('/* Original work: Copyright (c) 2020-2021 Refloow All rights reserved. \n Code origin (Free GitHub publish): https://github.com/OSL-Works/Steam-Games-Idle*/\n'.cyan);

console.log('This bot was developed by MajokingGames'.cyan);
console.log('Verision 1.0.3 Free to use'.cyan);
console.log('Thanks for choosing us.'.cyan);
console.log('Loading config file...'.green );
console.log('Starting bot...'.green );
console.log('If bot doesnt start in next 1 minute steam is down.\n\n'.green );

console.log('If you enjoy using our projects, you can support us via donations,  '.brightYellow);
console.log('that way we can keep releasing free projects & updates for existing ones!'.brightYellow);
console.log('Check links down below:\n'.brightYellow);
console.log('Ko-fi: https://ko-fi.com/refloow'.green);
console.log('Steam: https://steamcommunity.com/tradeoffer/new/?partner=392773011&token=CncehZti (ingame items)\n\n'.green);

// Starting bot (imported main file)
require('./app/app.js');


// Copyright notice:

/* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
  Code origin (Free GitHub publish): https://github.com/OSL-Works/Steam-Games-Idle*/
