var translateBtn = document.querySelector("#btn-translate");
var inputSection = document.querySelector("#txtbox-input");
var outputSection = document.querySelector("#txtbox-output");

console.log(translateBtn)

translateBtn.addEventListener("click",buttonClicked);
function buttonClicked(){
    console.log("Clicked");
    var input = console.log("input: " + inputSection.value)
    outputSection.innerText = "Welcome " + inputSection.value;
}



