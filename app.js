import Color from "./color";
import Rectangle from "./rectangle";

let interval;

const draw = function () {
    let canvas = document.getElementById("theCanvas");
    let ctx = canvas.getContext("2d");
    let rect = new Rectangle(0, 0, canvas.width, canvas.height);

    //interval = setInterval(function () {
        let newRect = rect.randomSubset();
        ctx.fillStyle = Color.randomColor().toHexString();
        ctx.fillRect(newRect.x, newRect.y, newRect.width, newRect.height);
    //}, 50);
};

document.addEventListener("DOMContentLoaded", function () {
    draw();
});
