const body = document.getElementsByTagName("body")[0];
const button = document.querySelectorAll("button");
const green = document.getElementById("green");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const random = document.getElementById("random");
function setColor(name) {
    body.style.backgroundColor = name;
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
    setColor("random");
})


