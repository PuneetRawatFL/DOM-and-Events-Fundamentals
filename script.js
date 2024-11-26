console.log("DOM and Events Fundamentals");

//1 - Explain what the DOM (Document Object Model) is in your own words.
//The Document Object Model (DOM) is a programming interface that represents the structure of a web page in a tree-like format. We can dynamically access and update,  manipulate  and change the dom using programs and script according to our needs.

//2 - Write a small HTML file and manipulate its DOM using JavaScript to change the content of an element (e.g., change the text of a `<p>` tag).
let p = document.querySelector("p");
p.innerText = "This assignment is complete.";

//4 - Use `document.querySelector` and `document.querySelectorAll` to select specific elements and modify their content, attributes, and styles.
let h3 = document.querySelector("h3"); //using querySelector
h3.innerText = "Changed using querySelector"; //chaning text
h3.className = "new-heading"; //changing class name attribute
h3.style.color = "blue"; //changing color style

let h2 = document.querySelectorAll("h2"); //using querySeletorAll
h2.forEach((elem) => (elem.style.color = "red")); //changing every h2 element color

//6 - Write JavaScript to add an event listener to the button that changes the background color of the page when clicked.
let btn1 = document.querySelector("#btn1"); //select element
//adding event listener
btn1.addEventListener("click", () => {
    let body = document.querySelector("body");
    body.style.backgroundColor = "pink";

    //7 - Extend the functionality to log a message to the console each time the button is clicked.
    console.log("Button clicked!");
});

//8 - Design a simple number-guessing game.
//selecting elements
let btn2 = document.querySelector("#btn2");
let msg = document.querySelector("#message");
let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let rand = Math.floor(Math.random() * 10);

//adding event listener for sumbit button
submit.addEventListener("click", () => {
    let guess = input.value;
    scoreTracker();
    pointTracker(guess);

    //maintaing records
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
//11 and 12 is is in separate html file and script

//13 - Extend the number-guessing game by implementing a high-score system.
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

//19 - Create a class `Player` in JavaScript with properties like `name`, `score`, and methods like `increase score ()`.
//creating class
class Player {
    constructor(name, score) {
        this.name = name;
        this.score = 0;
    }
    //increase score function
    increaseScore() {
        this.score++;
    }
    //display score with name
    displayScore() {
        console.log(`${this.name}: ${this.score}`);
        return `${this.name}: ${this.score}`;
    }
}

//20 - Instantiate objects of the `Player` class and use them in a simple game or scoring system.
//selecting elements
let p1 = document.querySelector("#player1");
let p2 = document.querySelector("#player2");
//creating player objects
const Player1 = new Player("Puneet");
const Player2 = new Player("Joe");

//21 - Display player information on the webpage using DOM manipulation.
//manipulating DOM
p1.innerText = Player1.displayScore();
p2.innerText = Player2.displayScore();

//23 - Write JavaScript to open the modal when a button is clicked.
//selecting elements
let btn3 = document.querySelector("#btn3");
let modal = document.querySelector("#myModal");
//adding event listener
btn3.addEventListener("click", () => {
    modal.style.display = "block";
});

//24 - Add an event listener for the "Esc" key that closes the modal when pressed.
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key == "Escape") {
        modal.style.display = "none";
    }
});
