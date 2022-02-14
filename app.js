var txtInput = document.querySelector(".user_input");
var trans = document.querySelector(".click_me");
console.log(txtInput)

function clickHandler() {
    alart("clicked");
    console.log("input", txtInput.value);
};

trans.addEventListener("click", clickHandler);