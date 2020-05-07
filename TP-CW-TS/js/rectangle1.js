var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle1 = /** @class */ (function (_super) {
    __extends(Rectangle1, _super);
    function Rectangle1(width, height) {
        var _this = _super.call(this, 0, 0) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle1.prototype.setWidth1 = function (width) {
        this.width = width;
    };
    Rectangle1.prototype.setHeight1 = function (height) {
        this.height = height;
    };
    Rectangle1.prototype.getWidth1 = function () {
        return this.width;
    };
    Rectangle1.prototype.getHeight1 = function () {
        return this.height;
    };
    Rectangle1.prototype.draw1 = function (context) {
        context.beginPath();
        context.rect(this.getCenter1().getX1(), this.getCenter1().getY1(), this.width, this.height);
        context.stroke();
    };
    return Rectangle1;
}(Shape1));
