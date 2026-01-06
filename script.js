const quotes = [
  { text: "Success is not final; failure is not fatal.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" }
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = `"${quotes[random].text}"`;
  document.getElementById("author").innerText = `— ${quotes[random].author}`;
}
