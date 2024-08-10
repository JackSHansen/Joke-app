// Tilføj en event listener til knappen
document.getElementById('joke-btn').addEventListener('click', generateJoke);

// Funktion til at hente en joke fra Joke API
function generateJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json' // Angiv, at vi vil modtage JSON som svar
        }
    })
    .then(response => {
        if (!response.ok) { // Tjek om svaret er okay
            throw new Error('Netværksrespons var ikke okay.');
        }
        return response.json(); // Parse svaret til JSON
    })
    .then(data => {
        document.getElementById('joke').textContent = data.joke; // Sæt joketeksten i DOM'en
    })
    .catch(error => {
        console.error('Der opstod en fejl ved hentning af joken:', error);
        document.getElementById('joke').textContent = 'Der opstod en fejl. Prøv igen senere.'; // Vis en fejlbesked til brugeren
    });
}
