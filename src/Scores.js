Memory.Scores = function (game) {};

var s1Text;
var s2Text;
var s3Text;
var s4Text;
var s5Text;
var s6Text;

Memory.Scores.prototype = {
	create: function () {
		var bkgd = this.add.sprite(0, 0, 'bkgd');
		
		Memory.soundControl = this.add.button(940, 0, Memory.getPauseString(), Memory.toggleMusic);
		
		var title = this.add.image(500, 20, 'scoreTitle');
		title.anchor.set(0.5, 0);
		
		var s1 = this.add.image(50, 120, 'scoreTiny');
		var s2 = this.add.image(50, 225, 'scoreMed1');
		var s3 = this.add.image(50, 330, 'scoreLarge');
		var s4 = this.add.image(550, 120, 'scoreSmall');
		var s5 = this.add.image(550, 225, 'scoreMed2');
		var s6 = this.add.image(550, 330, 'scoreHuge');
		
		s1Text = this.add.text(225, 135, localStorage["4x3score"], {font: "64px Arial", fill: "#ffffff"});
		s2Text = this.add.text(410, 250, localStorage["5x4score"], {font: "64px Arial", fill: "#ffffff"});
		s3Text = this.add.text(265, 345, localStorage["7x4score"], {font: "64px Arial", fill: "#ffffff"});
		s4Text = this.add.text(760, 145, localStorage["4x4score"], {font: "64px Arial", fill: "#ffffff"});
		s5Text = this.add.text(920, 248, localStorage["6x4score"], {font: "64px Arial", fill: "#ffffff"});
		s6Text = this.add.text(755, 350, localStorage["8x4score"], {font: "64px Arial", fill: "#ffffff"});
		
		if (Memory.supportsStorage()) {
			var clearButton = this.add.button(525, 450, 'clearButton', function() {Memory.clearStorage(); this.refreshText()}, this);
		}
		
		var backButton = this.add.button(225, 450, 'backButton', this.gotoMenu, this);
	},
	
	refreshText: function() {
		s1Text.text = localStorage["4x3score"];
		s2Text.text = localStorage["4x4score"];
		s3Text.text = localStorage["5x4score"];
		s4Text.text = localStorage["6x4score"];
		s5Text.text = localStorage["7x4score"];
		s6Text.text = localStorage["8x4score"];
	},

	gotoMenu: function () {
		this.state.start('MainMenu');
	}
};
