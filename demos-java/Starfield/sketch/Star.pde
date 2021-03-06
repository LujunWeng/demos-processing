class Star {
  float x;
  float y;
  float z;
  float speed;
  
  float px;
  float py;
  
  Star() {
    x = random(-width, width);
    y = random(-height, height);
    z = random(width);
    px = x;
    py = y;
    speed = 10;
  }
  
  void setSpeed(float s) {
    speed = s;
  }
  
  void update() {
    z -= speed;
    if (z < 1) {
      z = width;
      x = random(-width, width);
      y = random(-height, height);
      px = x;
      py = y;
    }
  }
  
  void show() {
    fill(255);
    noStroke();
    
    float sx = map(x/z, 0, 1, 0, width);
    float sy = map(y/z, 0, 1, 0, height);
    float r = map(z, 0, width, 10, 0);
    // ellipse(sx, sy, r, r);
    stroke(255);
    line(px, py, sx, sy);
    px = sx;
    py = sy;
  }
}
