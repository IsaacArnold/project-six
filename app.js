const letters = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const missed = 0;
const startGameButton = document.querySelector('.btn__reset');
const phraseUl = document.querySelector('#phrase ul');


// Removes start screen overlay when Start Game button is clicked
startGameButton.addEventListener('click', () => {
    const overlayDiv = document.querySelector('#overlay');
    overlayDiv.style.display = 'none';
    const phraseArray = getRandomPhraseAsArray(phrases);
    // console.log(addPhraseToDisplay(phraseArray));
});

// Array of phrases
const phrases = [
    'hello world',
    'the sun is hot',
    'elephants are big',
    'i love coding',
    'javascript is hard'
];

// Function ideas and inspo credit: rohald89's Github repo: FEWD-TD-unit06
// Chooses phrase and returns it as an array of characters
function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    const phraseAsArray = Array.from(randomPhrase);
    return phraseAsArray;
}

// Adds the phrase to the display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        phraseUl.appendChild(li);
        if (arr[i] !== " ") {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}