module objects {
    export class ScoreBoard {
        //instance variables
        public lives: number = constants.PLAYER_LIVES;
        public score: number = 0;
        private _livesLabel: createjs.Text;
        private _scoreLabel: createjs.Text;

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor() {
            this._livesLabel = new createjs.Text("LIVES: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            game.addChild(this._livesLabel);

            this._scoreLabel = new createjs.Text("SCORE: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this._scoreLabel.x = 350;
            game.addChild(this._scoreLabel);
        } //constructor ends

        update() {
            this._livesLabel.text = "LIVES: " + this.lives.toString();
            this._scoreLabel.text = "SCORE: " + this.score.toString();
        } //method update ends
    } //class ScoreBoard ends
} //module objects ends