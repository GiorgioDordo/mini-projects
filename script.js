const body = document.getElementsByTagName("body")[0];
const button = document.querySelectorAll("button");
const green = document.getElementById("green");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const random = document.getElementById("random");

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red},${green},${blue})`;

    body.style.backgroundColor = color;
}


green.addEventListener("click", () => {
    setColor("green");
})

red.addEventListener("click", () => {
    setColor("red");
})

blue.addEventListener("click", () => {
    setColor("blue");
})

random.addEventListener("click", () => {
    randomColor();
})

// in alternativa agli addEventListener potevo utilizzare onclick direttamente sull'html,
// ed asseggnare ad ogni elemento la propria funzione


