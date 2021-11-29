function dino(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    x=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/69fSbL0cW/model.json', modelloaded);
}
function modelloaded(){
    x.classify(gotresults);
}
function gotresults(error,results){
if(error){
console.log(error);
}
else{
    console.log(results);
}
}