Star[] stars = new Star[800];

void setup() {
  size(800, 800);
  for (int i = 0; i < stars.length; i++) {
    stars[i] = new Star();
  }
}

void draw() {
  float speed = map(mouseY, 0, height, 30, 0);
  background(0, 60);
  translate(width / 2, height / 2);
  for (int i = 0; i < stars.length; i++) {
    stars[i].setSpeed(speed);
    stars[i].update();
    stars[i].show();
  }
}
