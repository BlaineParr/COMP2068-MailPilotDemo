var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Island = (function (_super) {
        __extends(Island, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function Island() {
            _super.call(this, "island");
            this.name = "island";
            this._dy = 5;
            this.soundString = "yay";
            this._reset();
        } //constructor ends
        //Private Methods/////////////////////////////////////////////////////////////////////////
        Island.prototype._reset = function () {
            //set x to a random number
            this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
            this.y = -this.width;
        }; //method reset ends
        Island.prototype._checkBounds = function () {
            if (this.y > constants.SCREEN_HEIGHT + this.height) {
                this._reset();
            } //if ends
        }; //method checkBounds ends
        //Public Methods//////////////////////////////////////////////////////////////////////////
        Island.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        }; //method update ends
        return Island;
    })(objects.GameObject);
    objects.Island = Island; //class Plane ends
})(objects || (objects = {})); //module objects ends  
//# sourceMappingURL=island.js.map