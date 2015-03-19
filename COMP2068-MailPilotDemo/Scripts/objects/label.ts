module objects {
    export class Label extends createjs.Text {
        //instance variables
        public width: number;
        public height: number;
        //Costructor////////////////////////////////////////////////////////////////////////////////////////////////////////////
        constructor(labelString: string, x: number, y: number) {
            super(labelString, constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);

            this.width = this.getMeasuredWidth();
            this.height = this.getMeasuredHeight();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = x;
            this.y = y;
        } //constructor ends
    } //class Label ends
} //module objects ends 