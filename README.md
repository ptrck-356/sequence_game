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
