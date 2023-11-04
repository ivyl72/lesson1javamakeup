function start() {
    
    y = Math.floor(Math.random() * 10 + 1);

    let guess = 7;
    chance = document.getElementById("chances");

    document.getElementById("submitguess").onclick = function () {
    
    let x = document.getElementById("guessField").value;

    if(guess == 0){
        alert("NO MORE GUESSES LEFT! TRY AGAIN NEXT TIME! The number is : " + y);
    }
    if(x > 10 || x < 0){
        guess--;
        alert("Invalid Value");
        chance.innerHTML="Tries: " + guess;
    }else if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + (7 - guess) + " GUESS ");
            chance.innerHTML="Tries: " + guess;
    }
    else if (x > y) {
        guess--;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
        chance.innerHTML="Tries: " + guess;
        document.getElementById("userG").innerHTML += (x + ", ");
    }
    else {
        guess--;
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
        chance.innerHTML="Tries: " + guess;
        document.getElementById("userG").innerHTML += (x  + ", ");
    }

    }
    
}

    function reset(){
        guess = 7;
        alert("Game Restarted");
        chance.innerHTML="Tries: " + guess;
    }
    function increase(){
        document.getElementById("guessField").value++;
    }
    function decrease(){
        document.getElementById("guessField").value--;
    }
