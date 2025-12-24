let round = 1;
let score = 0;
let cardCount = 2; // Starting number of cards
let sequence = [];
let correctAnswer = 0;
let isGameOver = false;

/* ---------------- DOM ELEMENTS ---------------- */
const sequenceText = document.getElementById("sequence");
const roundText = document.getElementById("round");
const scoreText = document.getElementById("score");
const cardContainer = document.getElementById("cardContainer");
const main = document.querySelector("main");

// Game Over Elements
const gameOverModal = document.querySelector(".gameover");
const finalScoreSpan = document.getElementById("finalScore");
const playAgainBtn = document.getElementById("playAgain");

const backDesigns = ["back-1", "back-2", "back-3", "back-4"];

gameOverModal.style.display = "none";
playAgainBtn.addEventListener("click", resetGame);
startRound();


/* ---------------- GAME LOGIC ---------------- */
function startRound() {
    isGameOver = false;
    
    generateSequence();
    const options = generateOptionsData();
    renderCards(options);
     roundText.textContent = `Round: ${round}`;
    scoreText.textContent = `Score: ${score}`;
    setTimeout(() => {
        flipAllCards();
    }, 100);
}

function nextRound() {
    if (isGameOver) return;

    round++;
    
    // Increase difficulty: Add a card every 5 rounds
    if (round % 5 === 0) {
        cardCount++;
    }

    startRound();
}

function endGame() {
    isGameOver = true;
    finalScoreSpan.textContent = score;
    gameOverModal.style.display = "flex";
}

function resetGame() {
    round = 1;
    score = 0;
    cardCount = 2;
    

    gameOverModal.style.display = "none";
    
    // Restart
    startRound();
}


/* ---------------- SEQUENCE GENERATOR ---------------- */

function generateSequence() {
    sequence = [];
    const start = Math.floor(Math.random() * 10) + 1; // Random start 1-10
    const step = Math.floor(Math.random() * 5) + 1;   // Random step 1-5

    // Base length is 3, increases every 6 rounds
    const sequenceLength = 3 + Math.floor((round - 1) / 6);

    for (let i = 0; i < sequenceLength; i++) {
        sequence.push(start + i * step);
    }
    correctAnswer = sequence[sequence.length - 1] + step;
    sequenceText.textContent = sequence.join(" | ");
}


/* ---------------- OPTION GENERATOR ---------------- */

function generateOptionsData() {
    let options = [correctAnswer];

    while (options.length < cardCount) {
        let fake = correctAnswer + (Math.floor(Math.random() * 10) - 5);
        if (fake > 0 && !options.includes(fake)) {
            options.push(fake);
        }
    }

    // Shuffle the options so the answer isn't always first
    return options.sort(() => Math.random() - 0.5);
}


/* ---------------- CARD RENDERING ---------------- */

function renderCards(optionsArray) {
    cardContainer.innerHTML = "";
    optionsArray.forEach((numberValue) => {
        createCard(numberValue);
    });
}

function createCard(value) {
    const card = document.createElement("div");
    card.classList.add("card");

    const inner = document.createElement("div");
    inner.classList.add("card-inner");

    const front = document.createElement("div");
    front.classList.add("front-card");
    const numberText = document.createElement("p");
    numberText.classList.add("option-number");
    numberText.textContent = value;
    front.appendChild(numberText);

    const back = document.createElement("div");
    back.classList.add("back-card");
    const randomDesign = backDesigns[Math.floor(Math.random() * backDesigns.length)];
    back.classList.add(randomDesign);

    inner.appendChild(front); 
    inner.appendChild(back);  
    card.appendChild(inner);

    card.addEventListener("click", () => {
        if (isGameOver) return; 

        if (value === correctAnswer) {
            score++;
            nextRound();
        } else {
            endGame();
        }
    });
    cardContainer.appendChild(card);
}

function flipAllCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.classList.add("flipped");
    });
}