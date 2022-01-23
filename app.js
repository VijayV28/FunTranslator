// Variables
var translateBtn = document.querySelector("#btn-translate");
var inputSection = document.querySelector("#txtbox-input");
var outputSection = document.querySelector("#txtbox-output");

// API url
var serverURL = "https://api.funtranslations.com/translate/minion.json"

// Handling errors
function errorHandler(){
    console.log("error: " + error);
    alert("An error ("+error+") has occured. Try again later");
}

// Event of clicking the button
translateBtn.addEventListener("click",buttonClicked);


// Acknowledging the click
function buttonClicked(){
    var input = inputSection.value;
    outputFetcher(inputSection.value);
}

// Fetching the output
function outputFetcher(input){
    var url = serverURL + "?text=" + input;
    fetch(url)
    .then(response => response.json())
    .then(json => output(json.contents.translated))
    .catch(errorHandler)
}

// Printing the output
function output(json){
    outputSection.innerText = json;
}




