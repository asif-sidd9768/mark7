var textArea = document.querySelector("#input")
var translateButton = document.querySelector("#translate-button")
var outputText = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/minion.json?"


function getTranslationURL(text){
    return text = serverURL + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("something wrong with server! try again after some time")
}

function clickEventHandler(){
    var inputText = textArea.value
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => outputText.innerText = json.contents.translated)
    .catch(errorHandler)
}

translateButton.addEventListener("click",clickEventHandler)