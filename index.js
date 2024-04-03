
function getRandomNumber(){
    return Math.floor(Math.random() * 6) +1;
}

function randomDice(faceToDisplay){
   return "images/dice"+faceToDisplay+ ".png";
}

var randomNumber1 = getRandomNumber(); 
var randomNumber2 = getRandomNumber();

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice(randomNumber1));

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice(randomNumber2));


if (randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML = "🎲 Player 1 won"; 
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🎲 Player 2 won"; 
}
else if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "👏 It was a draw"; 
}