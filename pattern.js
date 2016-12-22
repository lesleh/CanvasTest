import Point from "./point";

export default class Pattern {

    constructor(numberOfPoints, centre, radius) {
        this.numberOfPoints = numberOfPoints;
        this.centre = centre;
        this.radius = radius;
    }

    points() {
        let out = new Array();
        let inc = Math.PI * 2.0 / this.numberOfPoints;
        for (let i = 0; i < this.numberOfPoints; i++) {
            out.push(this.pointForAngle(i * inc));
        }
        return out;
    }

    pointForAngle(angle) {
        let x = this.centre.x + this.radius * Math.cos(angle);
        let y = this.centre.y - this.radius * Math.sin(angle);
        return new Point(x, y);
    }

}