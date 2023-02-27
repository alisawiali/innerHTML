
//-----------------------------

const mydiv = document.createElement("header");
const myTest = document.createElement("h3");
const myOl = document.createElement("ol");

mydiv.className ="main";
myOl.id ="Parent";
const testcont = document.createTextNode("Alisawi");


const mynamen = ["Home","images", "servies","contact"];

mynamen.forEach(e => {
    let linkLI = document.createElement("li");
    myOl.appendChild(linkLI);

    const liste = document.createTextNode(e);
    linkLI.appendChild(liste);
});

myTest.appendChild(testcont);

mydiv.appendChild(myOl);
mydiv.appendChild(myTest);


document.body.appendChild(mydiv);


//_________________________________________________//

// const myMain = document.getElementById("imad");
// const create = document.createElement("p");
// myMain.appendChild(create);

// const myTexts = document.createTextNode("hallo welt in Berlin");

// create.appendChild(myTexts)


// myElemnt.before(myMain);
// // before ( elemnt den Psudo den den text)

// myMain.appendChild(create);

// document.body.appendChild(myMain);
