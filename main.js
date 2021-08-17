function preload() {

}

function setup() {
        canvas = createCanvas(600, 400);
        video = createCapture(VIDEO);
        video.hide();
    
}

function draw() {

    image(video, 0, 0, 600, 400);
}
function take_snapshot() {
    save("your-photo.png");
}
