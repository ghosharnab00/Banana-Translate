var txtInput = document.querySelector("#user-input");
var trans = document.querySelector("#translate");
var output = document.querySelector("#output");

console.log(txtInput.textContent);

//var testApi = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var url = "https://api.funtranslations.com/translate/klingon.json";

function getReq(url){
        return (url + "?text=" + txtInput.value);
}

//function clickHandler() {
  //      fetch (getReq(testApi))
    //    .then(function res(response){ return response.json()})
      //  .then( function js(json) { var output_text = json.contents.translated; output.innerHTML = output_text })

//}

function callBack(){
        fetch (getReq(url))
        .then(response => response.json())
        .then( json => {var output_text = json.contents.translated;
                output.innerHTML = output_text; })
                .catch(err => alert("Server Limit Crossed , try after 1 hour"))
        }


        trans.addEventListener("click", callBack);