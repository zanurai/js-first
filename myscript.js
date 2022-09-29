let circle = document.getElementById("circle");
let down = document.getElementById("down");
let up = document.getElementById("up");

let rotateValue = circle.style.transform

let rotateSum;

down.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
up.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}