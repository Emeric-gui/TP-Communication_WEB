var Shape1 = /** @class */ (function () {
    function Shape1(x, y) {
        this.center = new Point1(x, y);
    }
    Shape1.prototype.setCenter1 = function (center) {
        this.center = center;
    };
    Shape1.prototype.getCenter1 = function () {
        return this.center;
    };
    return Shape1;
}());
