function preload() {

}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,400,300);
}

function take_snapshot() {
    save('mum.png');
}

function modelLoaded() {
    console.log("poseNet is somehow initialized");
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        console.log("the awesome x of nose is" + results[0].pose.nose.x);
        console.log("the awesome y of nose is" + results[0].pose.nose.y);
    }else{
        console.log("error");
    }
}