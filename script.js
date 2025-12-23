let round = 1;
let score = 0;
let cardCount = 2;

let sequence = [];
let correctAnswer = 0;

const sequenceText = document.getElementById("sequence");
const roundText = document.getElementById("round");
const scoreText = document.getElementById("score");
const backCard = document.querySelector(".back-card");
const main = document.querySelector("main");
const cardContainer = document.getElementById("cardContainer");

const backDesigns = [
    "back-1",
    "back-2",
    "back-3",
    "back-4"
];

/* ---------------- SEQUENCE ---------------- */

function generateSequence() {
    sequence = [];
    const start = Math.floor(Math.random() * 5) + 1;
    const step = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < 3; i++) {
        sequence.push(start + i * step);
    }

    correctAnswer = sequence[2] + step;
    sequenceText.textContent = sequence.join(", ");
}

/* ---------------- BACK CARD DESIGN ---------------- */

function randomizeBackCard() {
    backDesigns.forEach(design => backCard.classList.remove(design));

    const randomIndex = Math.floor(Math.random() * backDesigns.length);
    backCard.classList.add(backDesigns[randomIndex]);
}

/* create a new card using existing structure */
function createCard() {
    const card = document.createElement("div");
    card.classList.add("card");

    const inner = document.createElement("div");
    inner.classList.add("card-inner");

    const back = document.createElement("div");
    back.classList.add("back-card");

    const randomIndex = Math.floor(Math.random() * backDesigns.length);
    back.classList.add(backDesigns[randomIndex]);

    const front = document.createElement("div");
    front.classList.add("front-card");

    const number = document.createElement("p");
    number.classList.add("option-number");

    front.appendChild(number);
    inner.appendChild(back);
    inner.appendChild(front);
    card.appendChild(inner);

    // ✅ CLICK HANDLER (THIS IS THE IMPORTANT PART)
    card.addEventListener("click", () => {
        const value = Number(number.textContent);
        console.log("Selected:", value);

        if (value === correctAnswer) {
            score++;
        }

        nextRound();
    });

    cardContainer.appendChild(card);
}



function addCard() {
    const back = document.createElement("div");
    back.classList.add("back-card");

    const canvas = document.createElement("canvas");
    back.appendChild(canvas);

    const front = document.createElement("div");
    front.classList.add("front-card");

    const option = document.createElement("p");
    option.textContent = "";
    front.appendChild(option);

    // random back design
    const randomIndex = Math.floor(Math.random() * backDesigns.length);
    back.classList.add(backDesigns[randomIndex]);

    cardContainer.appendChild(back);
    cardContainer.appendChild(front);
}

function flipAllCards() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.classList.remove("flipped"); // ensure back first
    });

    setTimeout(() => {
        cards.forEach(card => {
            card.classList.add("flipped");
        });
    }, 1000); // delay before flip
}


function generateOptions() {
    const fronts = document.querySelectorAll(".option-number");

    let options = [correctAnswer];

    while (options.length < cardCount) {
        let fake = correctAnswer + (Math.floor(Math.random() * 10) - 5);
        if (fake > 0 && !options.includes(fake)) {
            options.push(fake);
        }
    }

    options.sort(() => Math.random() - 0.5);

    fronts.forEach((el, i) => {
        el.textContent = options[i];
    });
}


function syncCards() {
    cardContainer.innerHTML = "";

    for (let i = 0; i < cardCount; i++) {
        createCard();
    }
}


/* ---------------- ROUND LOGIC ---------------- */

function startRound() {
    generateSequence();

    if (round !== 1 && round % 5 === 0) {
        cardCount++;
    }

    syncCards();
    generateOptions();
    flipAllCards();

    roundText.textContent = `Round: ${round}`;
    scoreText.textContent = `Score: ${score}`;
}




/* ---------------- NEXT ROUND ---------------- */

function nextRound() {
    round++;
    startRound();
}

/* ---------------- INIT ---------------- */

startRound();
