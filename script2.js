//12 - Use JavaScript to change the CSS styles of elements dynamically (e.g., change the font size, color, or visibility of an element when a button is clicked).
let p = document.querySelector(".para");
let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");
let btn4 = document.querySelector(".button4");
let btn5 = document.querySelector(".button5");

//font change
const fonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia"];
btn1.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * 5);
    p.style.fontFamily = fonts[rand];
});

//size change
btn2.addEventListener("click", () => {
    let currentSize = window.getComputedStyle(p).fontSize; //returns font size in px
    let size = parseFloat(currentSize); //converts size into float num
    p.style.fontSize = size + 2 + "px";
});
btn5.addEventListener("click", () => {
    let currentSize = window.getComputedStyle(p).fontSize; //returns font size in px
    let size = parseFloat(currentSize); //converts size into float num
    p.style.fontSize = size - 2 + "px";
});

//color change
const colors = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Cyan",
    "Magenta",
    "Lime",
];
btn3.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * 10);
    p.style.color = colors[rand];
});

//visiblity change
let visib = "visible";
btn4.addEventListener("click", () => {
    if (visib == "visible") {
        p.style.visibility = "hidden";
        visib = "hidden";
    } else if (visib == "hidden") {
        p.style.visibility = "visible";
        visib = "visible";
    }
});
