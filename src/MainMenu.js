Memory.MainMenu = function (game) {
	this.playButton = null;
	this.musicStarted = false;
};

Memory.MainMenu.prototype = {
	create: function () {
		// init all scores to zero if never played before
		if (Memory.supportsStorage() && (localStorage["played"] == undefined || localStorage["played"] == false)) {
			Memory.clearStorage();
			localStorage["played"] = true;
		}
		
		this.add.sprite(0, 0, 'menuBackground');
		this.playButton = this.add.button(250, 200, 'playButton', this.gotoGame, this);
		var scoreButton = this.add.button(250, 310, 'scoreButton', this.gotoScores, this);
		var aboutButton = this.add.button(250, 420, 'abtButton', this.gotoAbout, this);
		
		if (!this.musicStarted) {
			Memory.music = this.add.audio('music', 1, true);
			Memory.music.play();
			this.musicStarted = true;
		}
		Memory.soundControl = this.add.button(940, 0, Memory.getPauseString(), Memory.toggleMusic);
	},
	
	gotoGame: function (pointer) {
		this.state.start('GridSelect');
	},
	
	gotoAbout: function (pointer) {
		this.state.start('About');
	},
	
	gotoScores: function (pointer) {
		this.state.start('Scores');
	}
};
