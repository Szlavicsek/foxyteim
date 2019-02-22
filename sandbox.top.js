var vid = document.getElementById("bgVideo");
vid.playbackRate = 2;

function numberGenerator() {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    let division = document.getElementById("pDiv");
    let button2 = document.getElementById("button2")
    let mouth = document.getElementById("mouth2")

    if (randomNumber != 8) {
       button2.innerHTML = "Nooo, it's not an 8, it's a " + randomNumber + "!"
       mouth.style.stroke = "rgba(0, 0, 0, 0)"
       mouth.style.strokeDasharray = "1, 200"
       mouth.style.strokeDashoffset = "20"
    } else {
        button2.innerHTML = "Yay, it's an " + randomNumber + "!!! Foxy Teim!"
        mouth.style.stroke = "#000"
        mouth.style.strokeDasharray = "200", "0"
        mouth.style.strokeDashoffset = "20"
    }
 }

 document.getElementById("button2").onclick=function(){
    numberGenerator();
 }
//
// document.getElementById("submitButton").onclick=function(){
//    formFunc()
// }
//
// function formFunc() {
//    let Pear = document.getElementById("li1")
//    let Apple = document.getElementById("li2")
//    let Cherry = document.getElementById("li3")
//    let Mango = document.getElementById("li4")
//    let Banana = document.getElementById("li5")
//
//    let fruitInput = document.getElementById("fruitInput")
//    let enteredFruit = fruitInput.value
//
//    if (enteredFruit == "Pear") {
//       console.log(enteredFruit)
//    }
// }

// function validateForm() {
//
//    var nameFirst = document.getElementById('nameFirst');
//    var theValue = nameFirst.value;
//
//    if(theValue != "Nick") {
//
//       console.log("Will this fire?");
//
//       var messageHolder = document.getElementById('target');
//       messageHolder.style.color = "red";
//       messageHolder.innerHTML = "<h2>Put in my name!</h2>";
//       nameFirst.select();
//       //nameFirst.focus();
//
//
//       return false;
//
//       console.log("Will this fire 2?");
//    }
//
// }
