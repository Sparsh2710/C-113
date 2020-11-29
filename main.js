function setup() {
    Canvas = createCanvas(300, 200);
    Canvas.position(530, 300);
    Video = createCapture(VIDEO);
    Video.hide();
}

function draw() {
    image(VIDEO, 0, 0, 200, 200);  
    rect(30, 20, 55, 55, 20, 15, 10, 5); 
}

function take_snapshot() {
    save('Photo_frame.jpg');
}