let currentPlayer = 'X';
let gameOver = false;

// Función que cambia el turno del jugador
function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Función que comprueba si un jugador ha ganado
function checkWin() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winCombinations.some(combination => {
    return combination.every(index => {
      return document.getElementsByClassName('cell')[index].classList.contains(currentPlayer === 'X' ? 'cross' : 'circle');
    });
  });
}

// Función que comprueba si el juego está empatado
function checkTie() {
  return Array.from(document.getElementsByClassName('cell')).every(cell => {
    return cell.classList.contains('marked');
  });
}

// Función que marca la celda y comprueba si hay un ganador
function placeMark(cell) {
  if (gameOver || cell.classList.contains('marked')) {
    return;
  }
  cell.textContent = currentPlayer;
  cell.classList.add('marked');
  cell.classList.add(currentPlayer === 'X' ? 'cross' : 'circle');
  if (checkWin()) {
    alert(currentPlayer + ' wins!');
    gameOver = true;
  } else if (checkTie()) {
    alert('It\'s a tie!');
    gameOver = true;
  } else {
    switchPlayer();
  }
}

// Función que reinicia el juego
function reset() {
  Array.from(document.getElementsByClassName('cell')).forEach(cell => {
    cell.classList.remove('marked', 'circle', 'cross');
    cell.textContent = '';
  });
  currentPlayer = 'X';
  gameOver = false;
}

// Evento que escucha cuando se hace clic en una celda
Array.from(document.getElementsByClassName('cell')).forEach(cell => {
  cell.addEventListener('click', () => {
    placeMark(cell);
  });
});

// Evento que escucha cuando se hace clic en el botón de reinicio
document.querySelector('button').addEventListener('click', reset);
