Memory.About = function (game) {};

Memory.About.prototype = {
	create: function () {
		//this.stage.backgroundColor = "#b5e7f0";
		var bkgd = this.add.sprite(0, 0, 'bkgd');

		Memory.soundControl = this.add.button(940, 0, Memory.getPauseString(), Memory.toggleMusic);

		var textString = "Created by Liz Wigglesworth (lizgw.github.io)\n\n" + 
						 "Music & sound effects by Eric Matyas - www.soundimage.org\n" +
						 "(Cyber Dream Loop, UI_Quirky3, and UI_Quirky7)\n\n" +
						 "Card icons by Lorc, sbed, and skoll - game-icons.net\n\n" +
						 "Built using the Phaser engine";
		var style = {font: "24px Arial", fill: "#617ddf"};

		var text = this.add.text(50, 50, textString, style);

		var backButton = this.add.button(500, 450, 'backButton', this.gotoMenu, this);
		backButton.anchor.set(0.5, 0.5);
	},

	gotoMenu: function () {
		this.state.start('MainMenu');
	}
};
