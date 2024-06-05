// Function to fetch a random quote
async function getRandomQuote() {
    const response = await fetch('https://www.tronalddump.io/random/quote');
    const data = await response.json();
    return data;
}

// Function to fetch quotes by tag
async function getQuotesByTag(tag) {
    const response = await fetch(`https://www.tronalddump.io/search/quote?tag=${tag}`);
    const data = await response.json();
    return data._embedded.quotes;
}

// Function to display a quote
function displayQuote(quote) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // clear the div
    const p = document.createElement('p');
    p.textContent = `${quote.value} - ${quote.tags.join(', ')}`;
    resultDiv.appendChild(p);

    // Add event listener to each tag
quote.tags.forEach(tag => {
    const span = document.createElement('span');
    span.textContent = tag;
    span.style.cursor = 'pointer';
    span.addEventListener('click', () => {
        displayQuotesByTag(tag);
    });
    p.appendChild(span);
});
}

// Function to display quotes by tag
async function displayQuotesByTag(tag) {
    const quotes = await getQuotesByTag(tag);
    quotes.forEach(displayQuote);
}

// Event listener for the button
document.getElementById('refresh').addEventListener('click', async () => {
    const quote = await getRandomQuote();
    displayQuote(quote);
});

// Load initial quote
getRandomQuote().then(displayQuote);