console.log("hello from JS")
/*
var username= prompt("Name?")
alert ("user= " + username)
*/

var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var txtOutput=document.querySelector("#txt-output")

serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL +"?text=" + input
}

function clickHandler() {
    /*console.log("i stand clicked")*/
    //console.log("input", txtInput.value)
    //txtOutput.innerText= "aaaa"

    fetch(getTranslationURL(txtInput.value ))
    .then(response => response.json())
    .then (json =>{
        //var transaltedText=json.contents.translated;
        txtOutput.innerText=json.contents.translated
    })
 }

btnTranslate.addEventListener("click", clickHandler) 