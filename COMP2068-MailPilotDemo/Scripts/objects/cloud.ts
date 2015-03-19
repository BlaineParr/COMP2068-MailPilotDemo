module objects {
    export class Cloud extends objects.GameObject {
        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor() {
            super("cloud");

            this.soundString = "thunder";

            this._reset();
        } //constructor ends

        //Private Methods/////////////////////////////////////////////////////////////////////////
        private _reset() {
            //set x to a random number
            this.x = Math.floor(Math.random() * 640);
            this.y = -this.width;

            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * -4) + 2;
        } //method reset ends

        private _checkBounds() {
            if (this.y > 480 + this.height) {
                this._reset();
            } //if ends
        } //method checkBounds ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        update() {
            this.x += this._dx;
            this.y += this._dy;

            this._checkBounds();
        } //method update ends
    } //class Plane ends
} //module objects ends   