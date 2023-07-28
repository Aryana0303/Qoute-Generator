
let button = document.querySelector("#new-quote");

let quote = document.querySelector(".quote");

let person = document.querySelector(".person");


const quotes = [{
  quote: `"Be yourself; everyone else is already taken."`,
  person: ` Oscar Wilde`
},{
  quote: `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
  person: `  Maya Angelou` 

},{
  quote: `"I haven't failed. I've just found 10,000 ways that won't work."`,
  person: ` Thomas Edison` 

}, {
  quote: `"Life is what happens when you're busy making other plans"`,
  person: ` John Lennon` 

}, {
  quote: `"Life shrinks or expands in proportion to one's courage."`,
  person: ` Anais Nin` 

}, {
  quote: `"Great minds discuss ideas; average minds discuss events; small minds discuss people."`,
  person: ` Eleanor Roosevelt` 

}, {
  quote: `"The greatest discovery of all time is that a person can change his future by merely changing his attitude."`,
  person: ` Oprah Winfrey` 

}, {
  quote: `"In this world nothing can be said to be certain, except death and taxes."`,
  person: ` Benjamin Franklin` 

}, {
  quote: `"The only thing we have to fear is fear itself."`,
  person: ` Franklin D. Roosevelt` 

}, {
  quote: `"The man who removes a mountain begins by carrying away small stones."`,
  person: ` Chinese Proverbs` 

}, {
  quote: `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
  person: ` Mahatma Gandhi` 
}, {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    person: "Robert Louis Stevenson"
}, {
    quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    person: "Helen Keller"
}];

// event listener
button.addEventListener('click', function(){

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})