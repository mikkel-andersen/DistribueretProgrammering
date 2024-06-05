// Client-side JavaScript

// Select the button
const button = document.querySelector('button');

// Add an event listener to the button
button.addEventListener('click', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Get the name and new phone number from the form inputs
    const navn = document.querySelector('input[name="navn"]').value;
    const nytTlf = document.querySelector('input[name="nytTlf"]').value;
    console.log("hej");

    fetch('/updateKontakt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            navn: navn,
            nytTlf: nytTlf,
        }),
    })
    .then(response => {
        // Check if the response is JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            // Parse the response as JSON
            return response.json();
        } else {
            // Throw an error
            throw new Error('Server response is not JSON');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});