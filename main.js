Status = "";
input_text = "";

function setup(){
    canvas = createCanvas(300,290);
    canvas.position(490,116);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}

function draw(){
    image(video,0,0,300,290);
}


function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("objectInput").value;
}
function modelLoaded(){
  console.log("MODEL LOADED!");
  Status = true;
}

