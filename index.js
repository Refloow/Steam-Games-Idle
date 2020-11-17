// Steam-Games-Idle - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  Support Discord: https://discord.gg/nNSDPvKBjt
  
  Donate: https://ko-fi.com/refloow

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

// Steam-Games-Idle - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com 
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  Support Discord: https://discord.gg/nNSDPvKBjt
  
  Donate: https://ko-fi.com/refloow

 */
