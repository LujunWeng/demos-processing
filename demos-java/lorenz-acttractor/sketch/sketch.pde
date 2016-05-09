//import peasy.test.*;
//import peasy.org.apache.commons.math.*;
//import peasy.*;
//import peasy.org.apache.commons.math.geometry.*;


float x = 0.01;
float y = 0.0;
float z = 0.0;
float a = 10.0;
float b = 28.0;
float c = 8.0 / 3.0;

ArrayList<PVector> points = new ArrayList<PVector>();
//PeasyCam cam;

void setup () 
{
  size(800, 600, P3D);
  colorMode(HSB);
  //cam = new PeasyCam(this, 500);
};

void draw()
{
  background(0);
  float dt = 0.01;
  float dx = (a * (y - x)) * dt;
  float dy = (x * (b - z) - y) * dt;
  float dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.add(new PVector(x, y, z));
  translate(0, 0, -80);
  scale(5);
  stroke(255);
  noFill();
  beginShape();
  int hu = 0;
  for (PVector pv : points) {
    stroke(hu, 255, 255);
    vertex(pv.x, pv.y, pv.z);
    PVector offset = PVector.random3D();
    offset.mult(0.1);
    pv.add(offset);
    hu++;
    if (hu > 255) { 
      hu = 0;
    }
  }

  endShape();
}

