Memory.GridSelect = function (game) {};

Memory.GridSelect.prototype = {
	create: function () {
		var bkgd = this.add.sprite(0, 0, 'bkgd');
		
		var backButton = this.add.button(500, 510, 'backButton', this.gotoMenu, this);
		backButton.anchor.set(0.5, 0.5);
		
		Memory.soundControl = this.add.button(940, 0, Memory.getPauseString(), Memory.toggleMusic);
		
		var text = this.add.image(500, 5, 'selectText');
		text.anchor.set(0.5, 0);
		
		var size1Btn = this.add.button(90, 110, 'sizeButtons', function() {this.setGridSize(4, 3)}, this);
		size1Btn.loadTexture('sizeButtons', 0);
		var size2Btn = this.add.button(510, 110, 'sizeButtons', function() {this.setGridSize(4, 4)}, this);
		size2Btn.loadTexture('sizeButtons', 1);
		var size3Btn = this.add.button(90, 230, 'sizeButtons', function() {this.setGridSize(5, 4)}, this);
		size3Btn.loadTexture('sizeButtons', 2);
		var size4Btn = this.add.button(510, 230, 'sizeButtons', function() {this.setGridSize(6, 4)}, this);
		size4Btn.loadTexture('sizeButtons', 3);
		var size5Btn = this.add.button(90, 350, 'sizeButtons', function() {this.setGridSize(7, 4)}, this);
		size5Btn.loadTexture('sizeButtons', 4);
		var size6Btn = this.add.button(510, 350, 'sizeButtons', function() {this.setGridSize(8, 4)}, this);
		size6Btn.loadTexture('sizeButtons', 5);
	},
	
	setGridSize: function(cols, rows) {
		Memory.gridCols = cols;
		Memory.gridRows = rows;
		this.state.start('Game');
	},

	gotoMenu: function () {
		this.state.start('MainMenu');
	}
};
