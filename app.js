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