var txtInput = document.querySelector(".user_input");
console.log (txtInput);

var trans = document.querySelector(".click_me");

function clickHandler(){
    alert("clicked");
    //document.querySelector("#txt-output").innerText = txtInput;
}

//trans.addEventListener("click", clickHandler);


function showOutput(){
    if (txtInput== null || txtInput == ""){
        alert("no input");
    }
    else {
        alert(txtInput);
        document.getElementById("txt-output").innerText = txtInput;
    }
}