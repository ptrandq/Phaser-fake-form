// carga objeto Phaser
var app = new Phaser.Game(1024, 768, Phaser.AUTO, '');

//  The Google WebFont Loader will look for this object, so create it before loading the script.
WebFontConfig = {

    google: {
      families: ['Dosis', 'Merienda One']
    }

};

var FakeForm = {};

/*
	Preloader State
*/

FakeForm.Preloader = function(app) {};

FakeForm.Preloader.prototype = {
	preload: function() {

		this.load.image('ico-check', 'data:image/png;base64,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');
		this.load.image('bg-input', 'assets/bg-input-text.png');
		this.load.image('modal-ajax', 'assets/modal-ajax.png');
		this.load.image('modal-ajax-close', 'assets/modal-ajax-close.png');

		this.load.spritesheet('bg-button', 'assets/bg-button.png', 500, 90);

	},
	create: function() {
		this.state.start('Form');
	}
};

/*
	Form State
*/

FakeForm.Form = function(app) {

	this.inputtext = null;
	this.enterKey = null;
	this.delKey = null;
	this.button = null;
	this.myText = null;
	this.enterWord = '';
	this._popup = null;
	this._popupCloseButton = null;
	this._userCodeNotFoundText = '';
	this._tween = null;

	this.maxCharacters = 12;

	this.textStyle = { font: "bold 35px Arial", fill: "#484848" };

};

FakeForm.Form.prototype = {
	create: function() {

		this.stage.backgroundColor = '#ffffff';

		this.inputtext = this.add.sprite(0, 0, 'bg-input');
		this.inputtext.reset(app.width/2 - this.inputtext.width/2, app.height/2 - this.inputtext.height/2);

		this.button = this.add.button(this.inputtext.x, this.inputtext.y + this.inputtext.height + 20, 'bg-button', this.sendForm, this, 0, 1, 2);

		this.add.text( this.inputtext.x, this.inputtext.y -75, 'Enter app code to log:', { font: "41px Dosis", fill: "#006699" } );

		this.add.text( this.button.x, this.button.y +115, 'Max ' + String(this.maxCharacters) + ' characters.', { font: "25px Dosis", fill: "#555555"} );


		// fake input text
		this.myText = this.add.text( this.inputtext.x + 10, this.inputtext.y + 22, this.enterWord, this.textStyle );

		// Capture all key presses
    	app.input.keyboard.addCallbacks(this, null, null, this.keyPress);

    	//  Capture ENTER key
    	this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.ENTER]); // keyCode backspace: 13
    	this.enterKey = app.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    	this.enterKey.onDown.add(this.sendForm, this);

    	//  Capture backspace key
		this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.BACKSPACE]); // keyCode backspace: 8
		this.delKey = app.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
		this.delKey.onDown.add(this.deleteLetter, this);




	},
	keyPress: function(char) {

		if(this.enterWord.length <= this.maxCharacters) {
			this.enterWord = this.enterWord + char;
			this.writeOnScreen();
		}

	},
	sendForm: function() {

		// trim white space (remeber that trim doesn't change the original string)
		var trimEnterWord = this.enterWord.trim();

		//console.log('botón pulsado: '+ trimEnterWord);

		var myThis = this; // this scope change inside jQuery ajax function

		// jQuery Ajax:
		$.ajax({
			type: "POST",
			url:  "users.php",
			data: {userCode: trimEnterWord},
			context: document.body
		}).success(function(data) {
			if(data === '') {

				myThis.userCodeNotFound();

			} else {

				myThis.userCodeFound();

			}
		});


	},
	deleteLetter: function() {

		this.enterWord = this.enterWord.slice(0, - 1);
		this.writeOnScreen();

	},
	writeOnScreen: function() {

		this.myText.setText( this.enterWord );

	},
	userCodeFound: function() {

		app.state.start('Game');

	},
	userCodeNotFound: function() {

		/*
    	modal popup close
    	*/
    	// popup
    	this._popup = app.add.sprite(app.world.centerX, app.world.centerY, 'modal-ajax');
   		this._popup.anchor.set(0.5);
    	this._popup.inputEnabled = true;
    	this._popup.input.enableDrag();
    	//  Position the close button to the top-right of the popup sprite (minus 8px for spacing)
    	var pw = (this._popup.width/2) - 30;
    	var ph = -(this._popup.height/2 + 20);
    	//  And click the close button to close it down again
    	this._popupCloseButton = app.add.sprite(pw, ph, 'modal-ajax-close');
 	  	this._popupCloseButton.inputEnabled = true;
    	this._popupCloseButton.input.priorityID = 1;
    	this._popupCloseButton.events.onInputDown.add(this.closeWindow, this);
    	//  Add the "close button" to the popup window image
    	this._popup.addChild(this._popupCloseButton);
    	//  Hide it awaiting a click
    	this._popup.scale.set(0);

    	if ((this._tweentween && this._tween.isRunning) || this._popup.scale.x === 1) {
			return;
		}
		this._tween = app.add.tween(this._popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);

		// error text:
		var texto = "The aren't any userCode like: " + this.enterWord;
		this._userCodeNotFoundText = this.add.text( this._popup.x, this._popup.y, texto, { font: "25px Dosis", fill: "#ffffff", stroke: "#000000", strokeThickness: 5, align: "center", wordWrap: true, wordWrapWidth:500 } );
    	this._userCodeNotFoundText.anchor.setTo(0.5);


	},
	closeWindow: function() {

		if (this._tween.isRunning || this._popup.scale.x === 0) {
			return;
		}
		this._tween = app.add.tween(this._popup.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
		this._popup.destroy();
		this._userCodeNotFoundText.destroy();
		this.enterWord = '';
		this.writeOnScreen();

	}

};

/*
	Game State
*/

FakeForm.Game = function(app) {

	this.icoCheck = null;

};

FakeForm.Game.prototype = {
	create: function() {

		this.icoCheck = this.add.sprite(0, 0, 'ico-check');
		this.icoCheck.reset(app.width/2 - this.icoCheck.width/2, app.height/2 - this.icoCheck.height/2);

	}

};

/*
	init states
*/
app.state.add('Preloader', FakeForm.Preloader);
app.state.add('Form', FakeForm.Form);
app.state.add('Game', FakeForm.Game);

app.state.start('Preloader');
