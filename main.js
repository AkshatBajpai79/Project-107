//https://teachablemachine.withgoogle.com/models/w9mzX6BMq/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/w9mzX6BMq/model.json', modelReady);
}

function modelReady()
{
classifier.classify(gotResults);
}