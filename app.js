var txtInput = document.querySelector("#user-input");
var trans = document.querySelector("#translate");
var output = document.querySelector("#output");

var api = "https://api.funtranslations.com/translate/klingon.json";
console.log(txtInput.textContent)

function clickHandler() {
        console.log("input", txtInput.value);
        output.innerHTML = txtInput.value;
}


trans.addEventListener("click", clickHandler);