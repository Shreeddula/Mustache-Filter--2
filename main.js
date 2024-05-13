function setup(){
    canvas=createCanvas(450,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(450,450);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,450,450);
}

function preload(){
}
function take_snapshot(){
    save("my_picture.jpg");
}

function modelLoaded(){
    console.log("Pose Net Initialized");
}

function gotPose(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}