module objects {
    export class Island extends objects.GameObject {
        //instance variables

        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor() {
            super("island");

            this._dy = 5;
            this.soundString = "yay";

            this._reset();
        } //constructor ends

        //Private Methods/////////////////////////////////////////////////////////////////////////
        private _reset() {
            //set x to a random number
            this.x = Math.floor(Math.random() * 640);
            this.y = -this.width;
        } //method reset ends

        private _checkBounds() {
            if (this.y > 480 + this.height) {
                this._reset();
            } //if ends
        } //method checkBounds ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        update() {
            this.y += this._dy;

            this._checkBounds();
        } //method update ends
    } //class Plane ends
} //module objects ends  