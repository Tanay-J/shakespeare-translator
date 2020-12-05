var btn = document.querySelector("#btn");
var inputText = document.querySelector("#inputTxt");
var outputText = document.querySelector("#outputTxt");
var apiURL = "https://api.funtranslations.com/translate/shakespeare.json";


function getURL(text){
    return apiURL+"?"+"text="+text;
}

function clickHandler(){
    var inputTxt = inputText.value;
    fetch(getURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        outputText.innerText = json.contents.translated;
    })
}
function goBack() {
    window.history.back();
}

btn.addEventListener("click",clickHandler);

