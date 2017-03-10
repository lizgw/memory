Memory.Preloader = function (game) {
	this.background = null;
	this.preloadBar = null;
	
	this.ready = false;
};

Memory.Preloader.prototype = {
	preload: function () {
		this.background = this.add.sprite(0, 0, 'menuBackground');
		this.preloadBar = this.add.sprite(25, 400, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		
		this.load.image('playButton', 'assets/btn-play.png');
		this.load.image('abtButton', 'assets/btn-about.png');
		this.load.image('scoreButton', 'assets/btn-highscores.png');
		this.load.image('backButton', 'assets/btn-back.png');
		this.load.image('quitButton', 'assets/btn-quit.png');
		this.load.image('clearButton', 'assets/btn-clearscores.png');
		
		this.load.image('bkgd', 'assets/bkgd.png');
		this.load.image('selectText', 'assets/text-sizeselect.png');
		
		this.load.image('scoreTitle', 'assets/text/text-highscores.png');
		this.load.image('scoreTiny', 'assets/text/text-tiny.png');
		this.load.image('scoreSmall', 'assets/text/text-small.png');
		this.load.image('scoreMed1', 'assets/text/text-med1.png');
		this.load.image('scoreMed2', 'assets/text/text-med2.png');
		this.load.image('scoreLarge', 'assets/text/text-large.png');
		this.load.image('scoreHuge', 'assets/text/text-huge.png');
		
		this.load.image('gameOverBox', 'assets/gameover.png');
		this.load.image('gameOverMenu', 'assets/gameover-menu.png');
		this.load.image('gameOverReplay', 'assets/gameover-replay.png');
		this.load.image('gameOverSize', 'assets/gameover-size.png');
		this.load.image('movesText', 'assets/text-moves.png');
		this.load.image('scoreText', 'assets/text-bestscore.png');
		
		this.load.atlasJSONArray('sizeButtons', 'assets/size-buttons.png', 'assets/size-buttons.json');
		
		this.load.image('soundOn', 'assets/speaker.png');
		this.load.image('soundOff', 'assets/speaker-off.png');
		
		this.load.image('gameBkgd', 'assets/bkgd-game.png');
		this.load.image('card', 'assets/spr-card.png');
		this.load.atlasJSONArray('cards', 'assets/cards/cards.png', 'assets/cards/cards.json');
		this.load.image('confetti', 'assets/confetti.png');
		
		this.load.audio('music', 'assets/sound/music.mp3');
		this.load.audio('click', 'assets/sound/click.mp3');
		this.load.audio('ding', 'assets/sound/ding.mp3');
	},

	create: function () {
		this.preloadBar.cropEnabled = false;
	},
	
	update: function () {
		if (this.cache.isSoundDecoded('music') && this.ready == false) {
			this.ready = true;
			this.state.start('MainMenu');
		}

	}
};
