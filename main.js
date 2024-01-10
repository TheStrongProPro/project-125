var noseX = 0;
var noseY = 0;
var difference = 100;
var rightWristX = 0;
var leftWristX = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550, 550);
  canvas.position(560, 150);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotposes);
}

function modelLoaded() {
  console.log("PoseNet is Initialized");
}

function draw() {
  document.getElementById("square_side").innerHTML =
    "Width and Height of the square will be = " + difference + " px ";
  background("#969A97");
  text("Omkara", noseX, noseY);
  textSize(difference);
}

function gotposes(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("Nose X = " + noseX + "Nose Y = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log(
      "leftWristX = " +
        leftWristX +
        "rightWristX = " +
        rightWristX +
        "difference = " +
        difference
    );
  }
}
