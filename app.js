var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var bodyBackground = document.querySelector("h1, h2");
var resetbtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    numSquares = 3;

    //generate all new colors
    colors = generateRandomColors(numSquares);

    //pick a new random color from the array
    pickedColor = pickColor();

    //change colors of the squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    numSquares = 6;

    //generate all new colors
    colors = generateRandomColors(numSquares);

    //pick a new random color from the array
    pickedColor = pickColor();

    //change colors of the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";

    }
});

resetbtn.addEventListener("click", function () {
    //generate all new colors
    colors = generateRandomColors(numSquares);

    //pick a new random color from the array
    pickedColor = pickColor();

    //change the colorDisplay to match picked curent color
    colorDisplay.innerHTML = pickedColor;

    //change colors of the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    bodyBackground.style.backgroundColor = "steelblue";

    this.innerHTML = "New Colors";
});

colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageDisplay.innerHTML = "CORRECT!";
            changesColor(clickedColor);
            bodyBackground.style.backgroundColor = clickedColor;
            resetbtn.innerHTML = "Play Again!"
        } else {
            this.style.backgroundColor = "#444444";
            messageDisplay.innerHTML = "Try Again!"
        }
    });

}

function changesColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function generateRandomColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}