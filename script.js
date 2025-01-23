const input = document.getElementById("input");
const result = document.getElementById("result");

// split mi divide la stringa per singoli oggetti e me li mette in un array
// reverse mi inverte gli ordini degli oggetti nell'array
// join mi riunisce gli oggetti in un unica stringa
function reverseString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const value = input.value;
    const reverse = reverseString(value);

    if (value == "") {
        result.innerHTML = `<h2 class="text-danger-emphasis">PLEASE ENTER A VALUE</h2>`
    } else if (reverse == value) {
        result.innerHTML = `<h2 class="text-success">IT IS PALINDROME</h2>`;
    } else {
        result.innerHTML = `<h2 class="text-danger">IT IS NOT PALINDROME</h2>`;
    }

    input.value = "";
}