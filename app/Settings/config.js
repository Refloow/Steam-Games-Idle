module.exports = {

// Steam-Games-Idle - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

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

	GameToIdleFor: 440, // ID For game that bot will idle for

	// Some of popular game ids //

	// 440 // TeamFortress2
	// 730 // CSGO
	// 252490 // Rust
	// 346110 // ARK
	// 271590 // GTA V


	/* HOW TO FIND ANOTHER GAME ID ? */

	// - GO to the store page  https://store.steampowered.com/explore/
	// - Find game you want to idle for (example cs go)
	// - Inside of store page url of this game is gameid : https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/
}
