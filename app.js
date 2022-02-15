var txtInput = document.querySelector("#user-input");
var trans = document.querySelector("#translate");
console.log(txtInput)

function clickHandler() {
    if (txtInput != null){
        console.log("input", txtInput.value);
    }
    else {
        return null;
    }
};


trans.addEventListener("click", clickHandler);