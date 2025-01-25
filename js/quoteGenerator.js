import { quotes } from './quotes.js';
console.log(quotes);

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");
const generateQuote = document.getElementById("generateQuote");
const authorElement = document.getElementById("author");

function quoteGenerator() {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIdx].quote;
    const author = quotes[randomIdx].author;
    console.log(quote, author);
    quoteElement.innerHTML = `${quote}` + "  " + `<i>${author}</i>`;
    // quoteElement.innerHTML = `${author}`;
}

generateQuote.addEventListener("click", function () {
    quoteGenerator();
})
// function generateQuote() {
//     const randomIdx = Math.floor(Math.random() * quotes.length);
//     const quote = quotes[randomIdx].quote;
//     quoteElement.innerHtml = quote;
// }
