(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

var _rectangle = require("./rectangle");

var _rectangle2 = _interopRequireDefault(_rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var interval = void 0;

var draw = function draw() {
    var canvas = document.getElementById("theCanvas");
    var ctx = canvas.getContext("2d");
    var rect = new _rectangle2.default(0, 0, canvas.width, canvas.height);

    //interval = setInterval(function () {
    var newRect = rect.randomSubset();
    ctx.fillStyle = _color2.default.randomColor().toHexString();
    ctx.fillRect(newRect.x, newRect.y, newRect.width, newRect.height);
    //}, 50);
};

document.addEventListener("DOMContentLoaded", function () {
    draw();
});

},{"./color":2,"./rectangle":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _left_pad = require("./left_pad");

var _left_pad2 = _interopRequireDefault(_left_pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
    function Color(r, g, b) {
        _classCallCheck(this, Color);

        this.r = r;
        this.g = g;
        this.b = b;
    }

    _createClass(Color, [{
        key: "hue",
        value: function hue() {
            var r = this.r / 255.0;
            var g = this.g / 255.0;
            var b = this.b / 255.0;
            var h = void 0;

            var min = Math.min(r, g, b);
            var max = Math.max(r, g, b);

            if (max == r) {
                h = (g - b) / (max - min);
            } else if (max == g) {
                h = 2 + (b - r) / (max - min);
            } else if (max == b) {
                h = 4 + (r - g) / (max - min);
            }

            h = h * 60;

            if (h > 0) {
                return Math.floor(h);
            } else {
                return Math.floor(360 - h);
            }
        }
    }, {
        key: "toHexString",
        value: function toHexString() {
            return "#" + (0, _left_pad2.default)(this.r.toString(16), "0", 2) + (0, _left_pad2.default)(this.g.toString(16), "0", 2) + (0, _left_pad2.default)(this.b.toString(16), "0", 2);
        }
    }], [{
        key: "randomColor",
        value: function randomColor() {
            return new Color(Math.round(Math.random() * 255.0), Math.round(Math.random() * 255.0), Math.round(Math.random() * 255.0));
        }
    }]);

    return Color;
}();

exports.default = Color;

},{"./left_pad":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (str, padStr, length) {
    return (0, _str_repeat2.default)(padStr, length - str.length) + str;
};

var _str_repeat = require("./str_repeat");

var _str_repeat2 = _interopRequireDefault(_str_repeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./str_repeat":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _random_between = require("./random_between");

var _random_between2 = _interopRequireDefault(_random_between);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function () {
    function Rectangle(x, y, width, height) {
        _classCallCheck(this, Rectangle);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // TODO: This assumes x,y is 0,0    


    _createClass(Rectangle, [{
        key: "randomSubset",
        value: function randomSubset() {
            var newWidth = (0, _random_between2.default)(0, this.width);
            var newHeight = (0, _random_between2.default)(0, this.height);
            var newX = (0, _random_between2.default)(0, this.width - newWidth);
            var newY = (0, _random_between2.default)(0, this.height - newHeight);

            return new Rectangle(newX, newY, newWidth, newHeight);
        }
    }]);

    return Rectangle;
}();

exports.default = Rectangle;

},{"./random_between":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (string, length) {
    var out = "";
    while (out.length < length) {
        out += string;
    }

    // Hack, this should have been done earlier
    return out.substring(0, length);
};

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJjb2xvci5qcyIsImxlZnRfcGFkLmpzIiwicmFuZG9tX2JldHdlZW4uanMiLCJyZWN0YW5nbGUuanMiLCJzdHJfcmVwZWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLGlCQUFKOztBQUVBLElBQU0sT0FBTyxTQUFQLElBQU8sR0FBWTtBQUNyQixRQUFJLFNBQVMsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQSxRQUFJLE1BQU0sT0FBTyxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQSxRQUFJLE9BQU8sd0JBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixPQUFPLEtBQTNCLEVBQWtDLE9BQU8sTUFBekMsQ0FBWDs7QUFFQTtBQUNJLFFBQUksVUFBVSxLQUFLLFlBQUwsRUFBZDtBQUNBLFFBQUksU0FBSixHQUFnQixnQkFBTSxXQUFOLEdBQW9CLFdBQXBCLEVBQWhCO0FBQ0EsUUFBSSxRQUFKLENBQWEsUUFBUSxDQUFyQixFQUF3QixRQUFRLENBQWhDLEVBQW1DLFFBQVEsS0FBM0MsRUFBa0QsUUFBUSxNQUExRDtBQUNKO0FBQ0gsQ0FWRDs7QUFZQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3REO0FBQ0gsQ0FGRDs7Ozs7Ozs7Ozs7QUNqQkE7Ozs7Ozs7O0lBRXFCLEs7QUFFakIsbUJBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUI7QUFBQTs7QUFDakIsYUFBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxhQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0g7Ozs7OEJBVUs7QUFDRixnQkFBSSxJQUFJLEtBQUssQ0FBTCxHQUFTLEtBQWpCO0FBQ0EsZ0JBQUksSUFBSSxLQUFLLENBQUwsR0FBUyxLQUFqQjtBQUNBLGdC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Ozs7Ozs7a0JDRk4sVUFBVSxNQUFWLEVBQWtCLE1BQWxCLEVBQTBCO0FBQ3JDLFFBQUksTUFBTSxFQUFWO0FBQ0EsV0FBTyxJQUFJLE1BQUosR0FBYSxNQUFwQixFQUE0QjtBQUN4QixlQUFPLE1BQVA7QUFDSDs7QUFFRDtBQUNBLFdBQU8sSUFBSSxTQUFKLENBQWMsQ0FBZCxFQUFpQixNQUFqQixDQUFQO0FBQ0gsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vcmVjdGFuZ2xlXCI7XG5cbmxldCBpbnRlcnZhbDtcblxuY29uc3QgZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVDYW52YXNcIik7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IHJlY3QgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvL2ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbmV3UmVjdCA9IHJlY3QucmFuZG9tU3Vic2V0KCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBDb2xvci5yYW5kb21Db2xvcigpLnRvSGV4U3RyaW5nKCk7XG4gICAgICAgIGN0eC5maWxsUmVjdChuZXdSZWN0LngsIG5ld1JlY3QueSwgbmV3UmVjdC53aWR0aCwgbmV3UmVjdC5oZWlnaHQpO1xuICAgIC8vfSwgNTApO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRyYXcoKTtcbn0pO1xuIiwiaW1wb3J0IGxlZnRQYWQgZnJvbSBcIi4vbGVmdF9wYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3Ige1xuXG4gICAgY29uc3RydWN0b3IociwgZywgYikge1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb21Db2xvcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihcbiAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NS4wKSxcbiAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NS4wKSxcbiAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NS4wKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGh1ZSgpIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLnIgLyAyNTUuMDtcbiAgICAgICAgbGV0IGcgPSB0aGlzLmcgLyAyNTUuMDtcbiAgICAgICAgbGV0IGIgPSB0aGlzLmIgLyAyNTUuMDtcbiAgICAgICAgbGV0IGg7XG5cbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICBsZXQgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cbiAgICAgICAgaWYobWF4ID09IHIpe1xuICAgICAgICAgICAgaCA9IChnIC0gYikgLyAobWF4IC0gbWluKTtcbiAgICAgICAgfSBlbHNlIGlmKG1heCA9PSBnKXtcbiAgICAgICAgICAgIGggPSAyICsgKGIgLSByKSAvIChtYXggLSBtaW4pO1xuICAgICAgICB9IGVsc2UgaWYobWF4ID09IGIpe1xuICAgICAgICAgICAgaCA9IDQgKyAociAtIGcpIC8gKG1heCAtIG1pbik7XG4gICAgICAgIH1cblxuICAgICAgICBoID0gaCAqIDYwO1xuXG4gICAgICAgIGlmKGggPiAwKXtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGgpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigzNjAgLSBoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvSGV4U3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCIjXCJcbiAgICAgICAgICAgICsgbGVmdFBhZCh0aGlzLnIudG9TdHJpbmcoMTYpLCBcIjBcIiwgMilcbiAgICAgICAgICAgICsgbGVmdFBhZCh0aGlzLmcudG9TdHJpbmcoMTYpLCBcIjBcIiwgMilcbiAgICAgICAgICAgICsgbGVmdFBhZCh0aGlzLmIudG9TdHJpbmcoMTYpLCBcIjBcIiwgMik7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgc3RyUmVwZWF0IGZyb20gXCIuL3N0cl9yZXBlYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0ciwgcGFkU3RyLCBsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RyUmVwZWF0KHBhZFN0ciwgbGVuZ3RoIC0gc3RyLmxlbmd0aCkgKyBzdHI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbik7XG59XG4iLCJpbXBvcnQgcmFuZG9tQmV0d2VlbiBmcm9tIFwiLi9yYW5kb21fYmV0d2VlblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIFRPRE86IFRoaXMgYXNzdW1lcyB4LHkgaXMgMCwwICAgIFxuICAgIHJhbmRvbVN1YnNldCgpIHtcbiAgICAgICAgbGV0IG5ld1dpZHRoID0gcmFuZG9tQmV0d2VlbigwLCB0aGlzLndpZHRoKTtcbiAgICAgICAgbGV0IG5ld0hlaWdodCA9IHJhbmRvbUJldHdlZW4oMCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBsZXQgbmV3WCA9IHJhbmRvbUJldHdlZW4oMCwgdGhpcy53aWR0aCAtIG5ld1dpZHRoKTtcbiAgICAgICAgbGV0IG5ld1kgPSByYW5kb21CZXR3ZWVuKDAsIHRoaXMuaGVpZ2h0IC0gbmV3SGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShuZXdYLCBuZXdZLCBuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdHJpbmcsIGxlbmd0aCkge1xuICAgIGxldCBvdXQgPSBcIlwiO1xuICAgIHdoaWxlIChvdXQubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIG91dCArPSBzdHJpbmc7XG4gICAgfVxuXG4gICAgLy8gSGFjaywgdGhpcyBzaG91bGQgaGF2ZSBiZWVuIGRvbmUgZWFybGllclxuICAgIHJldHVybiBvdXQuc3Vic3RyaW5nKDAsIGxlbmd0aCk7XG59Il19