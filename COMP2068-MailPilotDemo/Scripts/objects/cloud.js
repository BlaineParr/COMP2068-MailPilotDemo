var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function Cloud() {
            _super.call(this, "cloud");
            this.name = "cloud";
            this.soundString = "thunder";
            this._reset();
        } //constructor ends
        //Private Methods/////////////////////////////////////////////////////////////////////////
        Cloud.prototype._reset = function () {
            //set x to a random number
            this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
            this.y = -this.width;
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * -4) + 2;
        }; //method reset ends
        Cloud.prototype._checkBounds = function () {
            if (this.y > constants.SCREEN_HEIGHT + this.height) {
                this._reset();
            } //if ends
        }; //method checkBounds ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        Cloud.prototype.update = function () {
            this.x += this._dx;
            this.y += this._dy;
            this._checkBounds();
        }; //method update ends
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud; //class Plane ends
})(objects || (objects = {})); //module objects ends   
//# sourceMappingURL=cloud.js.map