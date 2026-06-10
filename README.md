# Number Guessing Game CLI

A fun command line number guessing game where you try to guess a randomly selected number.

Project URL: https://roadmap.sh/projects/number-guessing-game

## Requirements

- Node.js
- npm

## Setup

```bash
git clone <your-repo-url>
cd number-guessing-game
npm install
```

## Usage

```bash
node app.js
```

## How to Play

1. Run the game and select a difficulty level:
   - Easy (10 chances)
   - Medium (5 chances)
   - Hard (3 chances)

2. Try to guess the number between 1 and 100
3. After each wrong guess you will get:
   - A hint whether the number is higher or lower
   - A temperature hint (very cold, getting warmer, very close)
   - How many chances you have left
4. After each round you can choose to play again

## Features

- 3 difficulty levels
- Hint system to help you when stuck
- Timer to track how long each round takes
- High score tracking per difficulty level (persists between sessions)
- Play multiple rounds without restarting
