const quotes = ["Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
  "Try to be a rainbow in someone's cloud. - Maya Angelou",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison"];

  let qoutecontainer = document.getElementById("quote-container"); 

  let generateQouteButton = document.getElementById("quote-btn");
generateQouteButton.addEventListener("click",generateQoute);

  //function to generate and display a random quote
  setInterval(generateQoute,15000);//setting time interval
  function generateQoute() {
  let y = Math.floor(Math.random() * quotes.length);//generate random index 
   qoutecontainer.innerHTML = quotes[y];//passing the random index as an index of the element to be display. 
  }
//to clear quote  
  