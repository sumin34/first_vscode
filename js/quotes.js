const quotes = [
{
    quote : "Don't dwell on the past",
    author : "A"
},{
    quote : "Follow your heart",
    author : "B"
},{
    quote : "You only live once",
    author : "C"
},{
    quote : "Love yourself",
    author : "D"
},{
    quote : "Life is a journey",
    author : "E"
},{
    quote : "Don't dream, Be it",
    author : "F"
},{
    quote : "Courage is very important when it comes to anything",
    author : "G"
},{
    quote : "The harder you work, the more likely you can reach the goal",
    author : "H"
}
]
const quote = document.querySelector("#quote span:first-child");
//const author = document.querySelector("#quote span:last-child");


const randNum=Math.floor(Math.random(0)*quotes.length);
const todaysQuote = quotes[randNum];

quote.classList.add("quote");
//author.classList.add("author");
quote.innerText = todaysQuote.quote;
//author.innerText = todaysQuote.author;

