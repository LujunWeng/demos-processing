/// <reference path="../typings/p5js/p5.d.ts"/>
/**
 * Created by LujunW on 5/7/2016.
 */
var sketch = function (p) {
    var x = 0.01;
    var y = 0.0;
    var z = 0.0;
    var a = 10.0;
    var b = 28.0;
    var c = 8.0 / 3.0;
    p.setup = function () {
        p.createCanvas(800, 600, 'webgl');
        p.translate(p.width / 2.0, p.height / 2.0);
    };
    p.draw = function () {
        p.background(0);
        var dt = 0.01;
        var dx = (a * (y - x)) * dt;
        var dy = (x * (b - z) - y) * dt;
        var dz = (x * y - c * z) * dt;
        x = x + dx;
        y = y + dy;
        z = z + dz;
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.box(x, y, z);
    };
};
var myp5 = new p5(sketch);
//# sourceMappingURL=sketch.js.map