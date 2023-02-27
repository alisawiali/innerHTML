




//-----------------------------

const mydiv = document.createElement("header");
const myHead = document.createElement("h3");
const myDIVS = document.createElement("div");
const myOl = document.createElement("ul");



mydiv.className ="main";
myOl.id ="Parent";
const testLogo = document.createTextNode("Alisawi");




const mynamen = ["Home","images", "servies","contact"];

mynamen.forEach(e => {
    let linkLI = document.createElement("li");
    myOl.appendChild(linkLI);

    const liste = document.createTextNode(e);
    linkLI.appendChild(liste);
   
});


document.getElementById("imad").prepend("hallo Imad Alisawi")




myHead.appendChild(testLogo);
myDIVS.appendChild(myHead);



myDIVS.appendChild(myOl);


document.body.style.cssText = "width:80%;margin:auto;";

myOl.style.cssText = "display:flex;color:red;font-size:15px;gap:20px"
myDIVS.style.cssText = "display:flex;justify-content:space-between;align-items: center; background-color:#ccc;padding:0 2.2em;border-radius:0 2rem"



mydiv.appendChild(myDIVS)




document.body.appendChild(mydiv);





//_________________________________________________//

// after und before außer den div arbeitet
// append  ===> am ende setzt 
// prepend  ==> am anfang setzt es 
// remove ==> löscht den element absolute (statt  dispaly:none;);