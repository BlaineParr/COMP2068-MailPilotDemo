var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Ilane = (function (_super) {
        __extends(Ilane, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function Ilane() {
            _super.call(this, assetLoader.getResult("island"));
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.y = 430;
            this.x = stage.mouseX;
        } //constructor ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        Ilane.prototype.update = function () {
            this.x = stage.mouseX;
        }; //method update ends
        return Ilane;
    })(createjs.Bitmap);
    objects.Ilane = Ilane; //class Plane ends
})(objects || (objects = {})); //module objects ends  
//# sourceMappingURL=item.js.map