let angle = 1;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw(){
    background(0);
    fill(255);
    //rect(50, 50, 100, 50);
    push();
    translate(200, 200);
    stroke(255);
        rotate(angle);
    scale(2, -1);
    line(0, 0, 50, 100);
    rect(0, 0, 100, 50);
    pop();

    translate(300, 300);
    rotate(-angle * 3);
    fill(50, 100, 255);
    rect(0, 0, 100, 50);

    angle = angle + 2;
}