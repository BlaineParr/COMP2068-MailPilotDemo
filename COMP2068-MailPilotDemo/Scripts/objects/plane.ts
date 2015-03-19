module objects {
    export class Plane extends createjs.Bitmap {
        public width: number;
        public height: number;
        //Constructor/////////////////////////////////////////////////////////////////////////////
        constructor() {
            super(assetLoader.getResult("plane"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.y = 430;
            this.x = stage.mouseX;
            createjs.Sound.play("engine", {loop: -1});
        } //constructor ends

        //Public Methods//////////////////////////////////////////////////////////////////////////
        update() {
            this.x = stage.mouseX;
        } //method update ends
    } //class Plane ends
} //module objects ends 