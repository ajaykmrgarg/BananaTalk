console.log("hello from JS")
/*
var username= prompt("Name?")
alert ("user= " + username)
*/

var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")


function clickHandler(){
    console.log("i stand clicked")
    console.log("input", txtInput.value)
}

btnTranslate.addEventListener("click", clickHandler) 