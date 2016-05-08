/**
 * Created by Lujun Weng on 5/8/2016.
 */
"use strict";

function sketchProc(p) {
    p.setup = function () {
        p.size(800, 600);
        p.background(0);
    };

    p.draw = function () {
        
    };
}

var canvas = document.getElementById("sketch");
new Processing(canvas, sketchProc);