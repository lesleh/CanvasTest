import leftPad from "./left_pad";

export default class Color {

    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    static randomColor() {
        return new Color(
            Math.round(Math.random() * 255.0),
            Math.round(Math.random() * 255.0),
            Math.round(Math.random() * 255.0)
        );
    }

    hue() {
        let r = this.r / 255.0;
        let g = this.g / 255.0;
        let b = this.b / 255.0;
        let h;

        let min = Math.min(r, g, b);
        let max = Math.max(r, g, b);

        if(max == r){
            h = (g - b) / (max - min);
        } else if(max == g){
            h = 2 + (b - r) / (max - min);
        } else if(max == b){
            h = 4 + (r - g) / (max - min);
        }

        h = h * 60;

        if(h > 0){
            return Math.floor(h);
        } else{
            return Math.floor(360 - h);
        }
    }

    toHexString() {
        return "#"
            + leftPad(this.r.toString(16), "0", 2)
            + leftPad(this.g.toString(16), "0", 2)
            + leftPad(this.b.toString(16), "0", 2);
    }

}
