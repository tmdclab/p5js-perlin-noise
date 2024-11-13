// This code creates an animated pattern using Perlin noise. 
// You can modify it by adjusting the following parameters:
// - TOTAL_ANGLE: Change this value to increase or decrease the total degrees the shape covers (e.g., try 360 for a simpler circle).
// - minCircleRadius and width / 3 in the draw function: These control the minimum and maximum radius limits for the animation. 
//   You can adjust these to control the pulsing effect's range.
// - radiusDirection: Modify this value (e.g., -1 or -0.2) to change the speed at which the radius expands and contracts.
// - noiseFactor in the draw function: The Perlin noise effect can be modified by changing the noise parameters (e.g., multiply by different values).
// - Color and opacity: Customize the color and transparency in the stroke and fill functions for different visual effects.

let TOTAL_ANGLE = 720;
let circleRadius = 0;
let minCircleRadius = 50;
let radiusDirection = -0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  stroke(255, 25);
  circleRadius = height / 2;
}

function draw() {
  // Draw a semi-transparent black rectangle to create a fading effect
  fill(0, 6); // Black fill with low opacity for a smooth fading effect
  noStroke();
  rect(0, 0, width, height);

  let centerX = width / 2;
  let centerY = height / 2;

  noFill();
  stroke(255, 250); // Adjust the color and opacity of the flower outline
  beginShape();
  for (let angle = 0; angle < TOTAL_ANGLE; angle++) {
    let noiseFactor = noise(angle * 0.012, frameCount / 150.0);

    let posX = centerX + circleRadius * cos(radians(angle)) * noiseFactor;
    let posY = centerY + circleRadius * sin(radians(angle)) * noiseFactor;

    curveVertex(posX, posY);
  }
  endShape(CLOSE);

  // Update radius
  circleRadius += radiusDirection;

  // Reverse direction when radius reaches certain limits
  if (circleRadius <= minCircleRadius || circleRadius > width / 3) {
    radiusDirection = -radiusDirection;
  }
}
