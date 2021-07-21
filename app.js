var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#text-output");
var serverURL = "https://api.funtranslations.com/translate/klingon.json"

function translateText(input) {
    fetch(serverURL + "?"+ "text=" + input)
        .then(response => response.json())
        .then(json => {
            textOutput.innerText = json.contents.translated
        })
        .catch(error => console.log(error))
}

function clickEventHandler() {
    translateText(textInput.value)
}

btnTranslate.addEventListener("click", clickEventHandler)