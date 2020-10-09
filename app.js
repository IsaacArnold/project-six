const letters = document.querySelector('#qwerty');
const phraseDiv = document.querySelector('#phrase');
const missed = 0;
const startGameButton = document.querySelector('.btn__reset');

startGameButton.addEventListener('click', () => {
    const overlayDiv = document.querySelector('#overlay');
    overlayDiv.style.display = 'none';
});