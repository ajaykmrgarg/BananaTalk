console.log("hello from JS")
/*
var username= prompt("Name?")
alert ("user= " + username)
*/

var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var txtOutput=document.querySelector("#txt-output")

function clickHandler(){
    /*console.log("i stand clicked")*/
    //console.log("input", txtInput.value)
    txtOutput.innerText= "aaaa"
}

btnTranslate.addEventListener("click", clickHandler) 