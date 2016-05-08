/// <reference path="../typings/p5js/p5.d.ts"/>
/**
 * Created by LujunW on 5/7/2016.
 */
let sketch = function( p ) {

    let x = 0.01;
    let y = 0.0;
    let z = 0.0;
    const a = 10.0;
    const b = 28.0;
    const c = 8.0 / 3.0;

    p.setup = function() {
        p.createCanvas(800, 600, 'webgl');
        p.translate(p.width / 2.0, p.height / 2.0);
    };

    p.draw = function() {
        p.background(0);
        let dt = 0.01;
        let dx = (a * (y - x)) * dt;
        let dy = (x * (b - z) - y) * dt;
        let dz = (x * y - c * z) * dt;
        x = x + dx;
        y = y + dy;
        z = z + dz;

        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.box(x, y, z);
    };
};

let myp5 = new p5(sketch);