//Fetching data for easy reference
const playerDisplay = document.getElementById('player-display');
const cpuDisplay    = document.getElementById('cpu-display');
const resultText    = document.getElementById('result-text');
const playerScore   = document.getElementById('player-score');
const cpuScore      = document.getElementById('cpu-score');
const roundCount    = document.getElementById('round-count');
const logEntries    = document.getElementById('log-entries');
const resetBtn      = document.getElementById('reset-btn');
const choiceBtns    = document.querySelectorAll('.choice-btn');

//Initial values
const state = {
  playerScore: 0,
  cpuScore:    0,
  round:       1,
};

//Game logic
const CHOICES = ['rock', 'paper', 'scissors'];

const ICONS = {
  rock:     '🪨',
  paper:    '📄',
  scissors: '✂️',
};

const BEATS = {
  rock:     'scissors',
  paper:    'rock',
  scissors: 'paper',
};