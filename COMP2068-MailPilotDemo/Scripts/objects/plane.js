var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Plane = (function (_super) {
        __extends(Plane, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function Plane() {
            _super.call(this, assetLoader.getResult("plane"));
            this.name = "plane";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.y = 430;
            this.x = stage.mouseX;
            createjs.Sound.play("engine", { loop: -1 });
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        Plane.prototype.update = function () {
            this.x = stage.mouseX;
        }; //method update ends
        return Plane;
    })(createjs.Bitmap);
    objects.Plane = Plane; //class Plane ends
})(objects || (objects = {})); //module objects ends 
//# sourceMappingURL=plane.js.map