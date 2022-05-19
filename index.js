var randomNumber1 = Math.floor (Math.random() * 6) + 1;  // Give a random number between 1 and 6

var randomDiceImage = "dice" + randomNumber1 + ".png";  //String fron dice 1 - 6

var randomImageSource = "./images/" + randomDiceImage;  // Example (./images/dice1.png) - (./images/dice6.png)

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src", randomImageSource);


// For The Second Dice 
var randomNumber2 = Math.floor (Math.random()*6) + 1; 

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "./images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img") [1];

image2.setAttribute("src", randomImageSource2);


// changing the text 
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉Player 1 Wins!!!";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!🎉";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}


