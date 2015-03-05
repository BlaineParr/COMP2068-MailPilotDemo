var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function Ocean() {
            _super.call(this, assetLoader.getResult("ocean"));
            this._dy = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        } //constructor ends
        //Private Methods/////////////////////////////////////////////////////////////////////////
        Ocean.prototype._reset = function () {
            this.x = 0;
            this.y = -960;
        }; //method reset ends
        Ocean.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            } //if ends
        }; //method checkBounds ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        Ocean.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        }; //method update ends
        return Ocean;
    })(createjs.Bitmap);
    objects.Ocean = Ocean; //class Plane ends
})(objects || (objects = {})); //module objects ends   
//# sourceMappingURL=ocean.js.map