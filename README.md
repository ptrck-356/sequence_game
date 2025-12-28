# Sequence Gambit

## 1. Game Overview
Sequence Gambit is a browser-based logic and pattern-recognition game where players analyze numerical sequences and predict the next correct value. The game challenges players through increasing difficulty using longer sequences and additional answer cards.

The game uses a casino-inspired theme with animated flip cards to create an engaging user experience.

---

## 2. Objective
The objective of the game is to:
- Analyze the displayed number sequence
- Determine the correct next number
- Select the correct card containing the answer

The game continues until the player selects an incorrect card.

---

## 3. Project Structure

```
sequence_game/
├── assets/
│   ├── cards/          # Card SVG images
│   └── fonts/          # Custom fonts
├── pages/
│   └── game.html       # Main game screen
├── start-page.html     # Start menu
├── style.css           # Styling and animations
├── script.js           # Game logic
└── README.md           # Documentation
```

---

## 4. Game Flow

### 4.1 Start Screen
- Displays the game title “Sequence Gambit”
- Contains a Start button that navigates to the game screen

### 4.2 Game Screen
Each round displays:
- Current round number
- Player score
- A numerical sequence
- Face-down cards containing possible answers

Cards flip automatically at the start of each round.

---

## 5. Core Game Mechanics

### 5.1 Sequence Generation
- A random starting number (1–10) is generated
- A random step value (1–5) is chosen
- Initial sequence length starts at 3
- Sequence length increases every 6 rounds

**Example:**
10 | 12 | 14
Next correct number: **16**

---

### 5.2 Answer Logic
The correct answer is calculated as:

---

### 5.3 Card Options
- The correct answer is always included
- Incorrect values are randomly generated
- Game starts with 2 cards
- Every 5 rounds, one additional card is added
- Card positions are shuffled randomly

---

## 6. JavaScript Logic Overview

### Key Variables
- `round` – Tracks the current round
- `score` – Tracks player score
- `cardCount` – Number of cards shown
- `sequence` – Stores the current number sequence
- `correctAnswer` – Stores the expected next number
- `isGameOver` – Prevents actions after game ends

---

### Main Functions
- `startRound()` – Initializes each round
- `generateSequence()` – Creates the number sequence
- `generateOptionsData()` – Generates card values
- `renderCards()` – Displays cards on screen
- `nextRound()` – Advances the game
- `endGame()` – Ends the game and shows Game Over screen
- `resetGame()` – Resets all values for replay

---

## 7. Player Interaction

### Correct Answer
- Score increases by 1
- Player advances to the next round

### Incorrect Answer
- Game ends immediately
- Game Over screen is displayed with final score

---

## 8. Difficulty Progression
The game becomes more challenging through:
- Longer number sequences (every 6 rounds)
- More answer cards (every 5 rounds)

---

## 9. Game Over & Restart
### Game Over Condition
- Selecting an incorrect card

### Restart Behavior
- Round resets to 1
- Score resets to 0
- Card count resets to 2
- New random sequences are generated

---

## 10. Visual & UI Design
- Dark-themed interface for focus
- Casino-style typography
- Card flip animations using CSS 3D transforms
- Responsive layout

Cards Design:
![Cards](/assets/cards/card%201.svg)
![Cards](/assets/cards/card%202.svg)
![Cards](/assets/cards/card%203.svg)
![Cards](/assets/cards/card%204.svg)
![Cards](/assets/cards/card-number-placeholder.svg)

---

## 11. Technologies Used
- HTML – Structure
- CSS – Styling and animations
- JavaScript – Game logic and interactivity

---

## 12. Group Members
- John Patrick Agravante
- Kate Quintero
- Micha Ella Nardo
- Marjorie Iyas
- Ibrahim Ronald Pardinas
- Christopher John Labordo