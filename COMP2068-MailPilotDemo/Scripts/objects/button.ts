module objects {
    export class Button extends createjs.Bitmap {
        constructor(stringPath: string, x: number, y: number) {
            super(stringPath);
            this.x = x;
            this.y = y;

            //events
            this.addEventListener("mouseover", this._buttonOver);
            this.addEventListener("mouseout", this._buttonOut);
        } //constructor ends

        //Event Handlers//////////////////////////////////////////////////////////////////////////////
        private _buttonOut(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        } //method buttonOver ends

        private _buttonOver(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.5;
        } //method buttonOver ends
    } //class Button ends 
} //module objects ends