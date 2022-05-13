function setup(){
    canvas = createCanvas(400 , 400);
    canvas.position(430,150);

    video = createCapture(VIDEO);
    video.size(400,400);
   
     poseNet = ml5.poseNet(video , modelLoaded);
     poseNet.on('pose', gotPoses);
     
}

function modelLoaded() {
    console.log("PoseNet Is Intialized");
}

function draw() {
    background ('#ebdada');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}