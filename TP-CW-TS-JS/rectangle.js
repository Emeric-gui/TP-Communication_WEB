function Rectangle(width, height){
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.getWidth = function(){
    return this.width;
}

Rectangle.prototype.getHeight = function(){
    return this.height;
}


Rectangle.prototype.draw = function(context){
    context.beginPath();
    context.rect(this.getCenter().getX(),this.getCenter().getY(),this.width, this.height);
    context.stroke();
}