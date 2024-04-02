async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.text();
}

async function getQuote() {
    return get('https://www.tronalddump.io/random/quote');
}

function refreshQuotes() {
    const quotesDiv = document.getElementById('result');
    quotesDiv.textContent = 'Loading...';

    Promise.all([getQuote(), getQuote(), getQuote()])
        .then(quotes => {
            quotesDiv.textContent = '';
            quotes.forEach(quote => {
                const p = document.createElement('p');
                p.textContent = `${quote.value} - ${quote.tags.join(', ')}`;
                quotesDiv.appendChild(p);
            });
        })
        .catch(error => {
            quotesDiv.textContent = 'An error occurred: ' + error.message;
        });
}

document.getElementById('refresh').addEventListener('click', refreshQuotes);

// Load initial quotes
//refreshQuotes();

