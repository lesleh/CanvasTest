import Point from "./point";
import Pattern from "./pattern";

let url;

const draw = function (callback) {
    let canvas = document.getElementById("theCanvas");
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    callback(ctx);
};

const linesBetweenPoints = function (ctx, points) {
    for (let i = 0; i < points.length - 1; ++i) {
        for (let j = i + 1; j < points.length; ++j) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
        }
    }
};

const drawPattern = function (ctx) {
    let numberOfPoints = parseInt(url.searchParams.get("p")) || 10;
    let pattern = new Pattern(numberOfPoints, new Point(250, 250), 240);
    let points = pattern.points();
    linesBetweenPoints(ctx, points);
};

document.addEventListener("DOMContentLoaded", function () {
    url = new URL(document.location);
    draw(drawPattern);
});
