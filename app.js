const letters = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const missed = 0;
const startGameButton = document.querySelector('.btn__reset');

// Removes start screen overlay when Start Game button is clicked
startGameButton.addEventListener('click', () => {
    const overlayDiv = document.querySelector('#overlay');
    overlayDiv.style.display = 'none';
});

// Array of phrases
const phrases = [
    'hello world',
    'the sun is hot',
    'elephants are big',
    'i love coding',
    'javascript is hard'
];

// Chooses phrase and returns it as an array of characters
// Function idea and inspo credit: rohald89's Github repo: FEWD-TD-unit06
function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    const phraseAsArray = Array.from(randomPhrase);
    return phraseAsArray;
}