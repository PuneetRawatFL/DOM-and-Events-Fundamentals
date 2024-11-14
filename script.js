console.log("DOM and Events Fundamentals");

//1
//The Document Object Model (DOM) is a programming interface that represents the structure of a web page in a tree-like format. We can dynamically access and update,  manipulate  and change the dom using programs and script according to our needs.

//2
let p = document.querySelector("p");
p.innerText = "This assignment is complete.";

//3
let h3 = document.querySelector("h3"); //using querySelector
h3.innerText = "Changed using querySelector";
h3.className = "new-heading";
h3.style.color = "blue";

let h2 = document.querySelectorAll("h2"); //using querySeletorAll
h2.forEach((elem) => (elem.style.color = "red"));

//6
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    let body = document.querySelector("body");
    body.style.backgroundColor = "pink";

    //7
    console.log("Button clicked!");
});

//8
let btn2 = document.querySelector("#btn2");
let msg = document.querySelector("#message");
let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let rand = Math.floor(Math.random() * 10);

submit.addEventListener("click", () => {
    let guess = input.value;
    scoreTracker();
    pointTracker(guess); //Q13

    //
    lowAttempet = attempts;
    if (attempts < lowAttempet) {
        lowAttempet = attempts;
    }
    lowAtt.innerText = lowAttempet;

    //display message
    if (guess == rand) {
        msg.innerText = "Congratulations! Correct";
        console.log("Correct");
    } else if (guess > rand) {
        msg.innerText = "Too high!";
        console.log("Too high!");
    } else {
        msg.innerText = "Too low!";
        console.log("Too low!");
    }
});

//13
let attempts = 0; //track attempts
let highScore = 0; //track high score
let lowAttempet = 0; //track lowest attempt
let points = 100; //track points
let lowAtt = document.querySelector("#lowAtt"); //lowest attempt
let att = document.querySelector("#attempts"); //attempts
let userScore = document.querySelector("#userScore"); //user score
let highSc = document.querySelector("#highScore"); //high score

//score tracker function
const scoreTracker = () => {
    //attempt logic
    attempts++;
    att.innerText = attempts;
    //score logic
    userScore.innerText = points;
};

//point tracker function
const pointTracker = (guess) => {
    //correct guess
    if (guess == rand) {
        if (points > highScore) {
            highScore = points;
            highSc.innerText = highScore;
        }
    }
    //higher guess
    else if (guess > rand) {
        points = points - 10;
    }
    //lower guess
    else if (guess < rand) {
        points = points - 10;
    }
};

//restart button
const reset = document.querySelector("#btn2");
reset.addEventListener("click", () => {
    console.log("game reset");
    attempts = 0;
    points = 100;
    userScore.innerText = points;
    att.innerText = attempts;
    msg.innerText = "";
    input.value = "";
});

//19
//creating class
class Player {
    constructor(name, score) {
        this.name = name;
        this.score = 0;
    }
    increaseScore() {
        this.score++;
    }
    displayScore() {
        console.log(`${this.name}: ${this.score}`);
        return `${this.name}: ${this.score}`;
    }
}
let p1 = document.querySelector("#player1");
let p2 = document.querySelector("#player2");
//creating objects
const Player1 = new Player("Puneet");
const Player2 = new Player("Joe");
//manipulating DOM
p1.innerText = Player1.displayScore();
p2.innerText = Player2.displayScore();

//22 - create modal
let btn3 = document.querySelector("#btn3");
let modal = document.querySelector("#myModal");
btn3.addEventListener("click", () => {
    modal.style.display = "block";
});

//23
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (event.key == "Escape") {
        modal.style.display = "none";
    }
});
