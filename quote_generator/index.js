// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"You cann't build a reputation on what you are going to do."`,
    person: `--Henry Ford`,
  },
  {
    quote: `"Your time is limited, don't waste it living someone else's life."`,
    person: `--Steve Job`,
  },
  {
    quote: `"The only limit to our realization of tomorrow will be our doubts of today"`,
    person: `--Franklin D. Roosevelt`,
  },
  {
    quote: `"The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks."`,
    person: `--Mark Zuckerberg`,
  },
  {
    quote: `"When in a tough situation, remember you are not alone. Others have faced similar situations and succeeded."`,
    person: `-- Catherine Pulsifer`,
  }
];

btn.addEventListener('click', function(){
    let random= Math.floor(Math.random() * quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})