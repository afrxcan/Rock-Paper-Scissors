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

//CPU randomly selects a choice
function cpuChoose() {
  const randomIndex = Math.floor(Math.random() * 3);
  return CHOICES[randomIndex];
}

//Determines result
function getResult(player, cpu) {
  if (player === cpu) return 'draw';
  if (BEATS[player] === cpu) return 'win';
  return 'lose';
}

//Display results and update scores
function play(playerChoice) {
  const cpuChoice = cpuChoose();
  const result = getResult(playerChoice, cpuChoice);

  playerDisplay.textContent = ICONS[playerChoice];
  cpuDisplay.textContent    = ICONS[cpuChoice];

  if (result === 'win') {
    state.playerScore++;
    resultText.textContent = 'YOU WIN!';
  } else if (result === 'lose') {
    state.cpuScore++;
    resultText.textContent = 'CPU WINS!';
  } else {
    resultText.textContent = 'DRAW!';
  }

  playerScore.textContent = state.playerScore;
  cpuScore.textContent    = state.cpuScore;
  roundCount.textContent  = state.round;
  addLog(playerChoice, cpuChoice, result);
  state.round++;
}

//Links actual buttons
choiceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const choice = btn.dataset.choice;
    play(choice);
  });
});

//Game logs
function addLog(playerChoice, cpuChoice, result) {
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.textContent = `R${state.round} ► YOU: ${playerChoice.toUpperCase()}  CPU: ${cpuChoice.toUpperCase()}  → ${result.toUpperCase()}`;
  logEntries.prepend(entry);
}

//Reset game
resetBtn.addEventListener('click', () => {
  state.playerScore = 0;
  state.cpuScore    = 0;
  state.round       = 1;

  playerScore.textContent = '00';
  cpuScore.textContent    = '00';
  roundCount.textContent  = '01';

  playerDisplay.textContent = '❓';
  cpuDisplay.textContent    = '❓';
  resultText.textContent    = 'CHOOSE!';

  logEntries.innerHTML = '<div class="log-entry">SYSTEM: PRESS A BUTTON TO PLAY.</div>';
});