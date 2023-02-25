
for (let i = 0; i <= 3; i++) {
  const mydiv = document.createElement("div");
  const myHead = document.createElement("h1");
  const myP = document.createElement("h3");

  mydiv.id = "parent";
  const x = "number";
  const ergebnis = "resoult";
  const myText = document.createTextNode(
    "Hallo welt" + " " + `${ergebnis}` + " "+`${x}` + " :" + [i]
  );
  const myTPar = document.createTextNode("Ich lebe in Berlin" + "__" + [i]);
  const myHr = document.createElement("hr");

  myHead.appendChild(myText);
  myP.appendChild(myTPar);
  mydiv.appendChild(myHead);
  mydiv.appendChild(myP);
  mydiv.appendChild(myHr);
  mydiv.style.cssText =
    "width:500px;background-color:red; margin:10px auto; padding:20px;border-radius:10px;";
  document.body.appendChild(mydiv);
}


// ---------------------------------------

const myinput = document.getElementById("name");
const myAge = document.getElementById("age");
const mySubmit = document.getElementById("sub");
const myText = document.getElementById("onblurtext");
const onKeyup = document.getElementById("onkeyup")


// document.forms[0].onsubmit = function (e) {
//   let inputValid = false;
//   let ageValid = false;
//   false;

//   if (myinput.value !== "" && myinput.value.length < 10) {
//     inputValid = true;
//   }
//   if (myAge.value !== "") {
//     ageValid = true;
//   }

//   if (inputValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// };

myinput.onfocus = function (){
    myText.textContent = "Bitte schreib dein Name hier";
}
myinput.onkeyup = function (){
    onKeyup.textContent = myinput.value;
}

myinput.onblur = function (){
    myText.textContent = "";
    if( myinput.value !== "" &&  myinput.value.length < 10){
        myText.textContent = "Bitte  vergesse dein Name nicht und es soll nicht wenig als 10 bochstaben ";
        myText.style.cssText = "color:blue;width:250px; border:none;padding:10px; border-radius:20px;margin-top:10px;text-transform: capitalize;"
    }

}
myAge.onfocus = function(){
    myText.textContent = "Bitte schreib dein Password Bitte hier";
    myText.style.cssText = " color:red;margin-left:20px;";
}

myAge.onblur = function(){
    myText.textContent = "";
    if(myAge.value !== "" && myAge.value.length <= 5){
        myText.textContent = "dein Passwrod soll 2 mal große und 3  Nummer  und 5 zeichen sein";
        myText.style.cssText = " color:green;margin-left:20px;";
    }
}

const myImad = document.querySelector(".imad");
const myVater = document.getElementById("Ali");


if(myImad.contains(myVater)){
    myVater.id = "hallo Vater";
}
// ---------------------------------------


const myTowInput = document.getElementById("testOne");
const myDiv = document.getElementById("div");
//const mySub = document.getElementById("omer");
const aLi = document.getElementById("ali");

myTowInput.onkeyup = function (){
   // myDiv.textContent = myTowInput.value * 1.7;
 //alert("Sie sind aud dem key ");
    aLi.innerHTML = myTowInput.value;
}

// mit onkeyup barcuen wir keinen button aber wenn click brauchen denn benutzen wir button (3)
// myTowInput  ==> wo das geschrieben wird
// wo es gezeigt wir
// wo daruf gedrückt,damit es gezeigt 

















