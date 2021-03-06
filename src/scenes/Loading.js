import 'phaser';

class Loading extends Phaser.Scene {
    constructor(config) {
    	super('Loading');
    }

    createText() {
    	var W = this.game.config.width;
    	var H = this.game.config.height;

    	var style = { fontFamily: 'Krub, sans-serif', fontSize: 60 };
    	var text = this.add.text(W/2, H/2, 'Loading...', style);
    	text.setOrigin(0.5);

    	return text;
    }

    preload() {

    	// We can still load assets in each scene, but I think it might be best to load the 
    	// heavy stuff here up front 
    	this.load.image('logo', 'assets/logo.png');
    	this.load.image('block', 'assets/block.png');
    	this.load.image('stone_tile', 'assets/stone_tile.png');
        this.load.image('stone_tex_1', 'assets/stone_texture_01.png');
        this.load.image('stone_tex_2', 'assets/stone_texture_02.png');
        this.load.image('stone_tex_3', 'assets/stone_texture_03.png');
        this.load.image('stone_tex_4', 'assets/stone_texture_04.png');
        this.load.image('stone_tex_5', 'assets/stone_texture_05.png');
        this.load.image('stone_tex_6', 'assets/stone_texture_06.png');

    	var loadingText = this.createText();

    	this.load.on('progress', function (value) {
    		loadingText.text = Math.round(value.toFixed(2) * 100) + " %";
    	});

    	this.load.on('complete', function () {
    		loadingText.text = "Click to start!";
            
	    });
    }

    create() {
    	/*var that = this;
    	this.input.once('pointerdown', function () {
            that.scene.start("Game");
        });*/
        this.scene.start("Game");
    }
}

// Make it so we can use it from a different file. 
export default Loading;