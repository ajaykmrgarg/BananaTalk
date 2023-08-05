console.log("hello from JS")
/*
var username= prompt("Name?")
alert ("user= " + username)
*/

var btnTranslate = document.querySelector("#btn-translate")
console.log(btnTranslate)

btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("i stand clicked")
})