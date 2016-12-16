import randomBetween from "./random_between";

export default class Rectangle {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // TODO: This assumes x,y is 0,0    
    randomSubset() {
        let newWidth = randomBetween(0, this.width);
        let newHeight = randomBetween(0, this.height);
        let newX = randomBetween(0, this.width - newWidth);
        let newY = randomBetween(0, this.height - newHeight);

        return new Rectangle(newX, newY, newWidth, newHeight);
    }

}
