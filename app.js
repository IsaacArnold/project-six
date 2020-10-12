const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
let missed = 0;
const startGameButton = document.querySelector('.btn__reset');
const phraseUl = document.querySelector('#phrase ul');
const overlayDiv = document.querySelector('#overlay');
const triesImg = document.querySelectorAll('.tries img');



// Removes start screen overlay when Start Game button is clicked
startGameButton.addEventListener('click', () => {
    overlayDiv.style.display = 'none';
    resetGame();
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
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
// ///////////////////////////////////////////////////////////////
function checkLetter(button){
    const phraseLi = document.querySelectorAll('.letter');
    let match = null;
    for (let i = 0; i < phraseLi.length; i++) {
        if (phraseLi[i].textContent === button) {
            phraseLi[i].className = 'letter show';
            match = button.textContent;
        }
    }
    return match;
}

qwerty.addEventListener('click', (e) => {
    letterClicked = document.getElementsByTagName('button');
    if (e.target.tagName === 'BUTTON') {
        const buttonClicked = e.target;
        buttonClicked.className = 'chosen';
        buttonClicked.disabled = 'true';
        const letterFound = checkLetter(buttonClicked.textContent);
        if (letterFound === null) {
            const tries = document.querySelectorAll('.tries');
            const heartImg = document.querySelectorAll('.tries img');
            tries[0].className = '';
            heartImg[0].src = 'images/lostHeart.png';
            missed += 1;
        }
    }
    checkWin();
});

function checkWin() {
    const numLettersWithShow = document.querySelectorAll('.show');
    const numLettersWithLetters = document.querySelectorAll('.letter');
    if (numLettersWithShow.length === numLettersWithLetters.length) {
        overlayDiv.style.display = 'flex';
        overlayDiv.className = 'win';
        const h2 = document.querySelector('.title');
        h2.textContent = 'You guessed the phrase - Congratulations!'
    }
    if (missed >= 5) {
        overlayDiv.style.display = 'flex';
        overlayDiv.className = 'lose';
        const h2 = document.querySelector('.title');
        h2.textContent = "You didn't guess the correct phrase - try again."
    }
}

function resetGame() {
    const resetButton = document.querySelector('.btn__reset');
    const letterClicked = document.getElementsByTagName('button');
    const scoreboardLi = document.querySelectorAll('#scoreboard li');
    const shownLetter = document.querySelectorAll('.letter .show');
    if (overlayDiv.className === 'win' || 'lose') {
        resetButton.textContent = 'Reset Game';
    }
    for (let i = 0; i < letterClicked.length; i++) {
        letterClicked[i].className = '';
        letterClicked[i].disabled = false;
    }
    for (let i = 0; i < scoreboardLi.length; i++) {
        scoreboardLi[i].className = 'tries';
        triesImg[i].src = 'images/liveHeart.png';
    }
    shownLetter.className = '';
    phraseUl.textContent = '';
    missed = 0;
}