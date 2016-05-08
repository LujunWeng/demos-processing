/**
 * Created by Lujun Weng on 5/8/2016.
 */
function sketchProc(p) {
    let x = 0.01;
    let y = 0.0;
    let z = 0.0;
    const a = 10.0;
    const b = 28.0;
    const c = 8.0 / 3.0;

    let points = [];

    p.setup = function () {
        p.size(800, 600, p.P3D);
        p.colorMode(p.HSB);
    };

    p.draw = function () {
        p.background(0);
        const dt = 0.01;
        let dx = (a * (y - x)) * dt;
        let dy = (x * (b - z) - y) * dt;
        let dz = (x * y - c * z) * dt;
        x = x + dx;
        y = y + dy;
        z = z + dz;

        points.push(new p.PVector(x, y, z));
        p.translate(p.width / 2.0, p.height / 2.0, -80);
        p.scale(5);
        p.stroke(255);
        p.noFill();
        p.beginShape();
        p.strokeWeight(20);
        let hu = 0;
        for (let pv of points) {
            p.stroke(hu, 255, 255);
            p.vertex(pv.x, pv.y, pv.z);
            let offset = p.PVector.random3D();
            offset.mult(0.1);
            pv.add(offset);
            hu++;
            if (hu > 255) { hu = 0; }
        }

        p.endShape();
    };
}

let canvas = document.getElementById("sketch");
new Processing(canvas, sketchProc);