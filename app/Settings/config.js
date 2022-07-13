module.exports = {

// Copyright notice:

/*
Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
Code origin (Free GitHub publish): https://github.com/Refloow/Steam-Games-Idle 
*/
	
	    
/*

Want active support and new updates with new features all for free?

Leave a star on github repo its free ( we push updates based on the engagement )
Repo link: https://github.com/Refloow/Steam-Games-Idle 

Discord Support Server: https://discord.gg/D8WCtDD   (Open an ticket)

*/
	

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  
* Donations:
  Crypto: https://refloow.com/cdonate
  Steam: https://steamcommunity.com/tradeoffer/new/?partner=994828078&token=XEUdbqp6

 */


    // Bot Account Information //

    loginAccName: '',
    password: '',
    // Leave empty if account dont have 2fa auth. // If you leave shared_secret empty configure steamguardauto false to manualy enter codes.
    shared_secret: '',

    // Enable or disable | [true / false] automaticly generating 2fa codes for loging into account.
    SteamGuardAuto: true,
    // Enable or disable | [true / false] Showing update notifications in console for new version
    UpdateNotif_Enable: true, 

	
	// Settings //
	
        Interval: 50000,     // Interval in milisec (how much time shod pass before switching idling for another game)
	GameToIdleFor: [440], // ID For game that bot will idle for EXAMPLE: [440,730,...] Make sure to have game in library.

	// Some of popular game ids //

	// 440 // TeamFortress2
	// 730 // CSGO
	// 252490 // Rust
	// 346110 // ARK
	// 271590 // GTA V


	/* HOW TO FIND ANOTHER GAME ID ? */

	// - GO to the store page  https://store.steampowered.com/explore/
	// - Find game you want to idle for (example CS:GO)
	// - Inside of store page url of this game is gameid : https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/
	
	
	/* HOW TO SET A NONSTEAM GAME (OR CUSTOM MESSAGE) AS PLAYED GAME ?*/
	
	// - GameToIdleFor: "Your message",
	
	// This will make bot show status in non steam game Your message.

	checkdata: false,                       // [true/false] Enable or disable | This feature is used for monitoring it shows scripts ussage of system resources
        showtimer: 60000  // Time in ms of cycle when will next info be shown. (By default set to 10min);
}
