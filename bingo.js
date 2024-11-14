const bingoBoard = document.getElementById('bingo-board');
const bingoLetters = ['B', 'I', 'N', 'G', 'O'];

function generateBoard() {
  bingoLetters.forEach((letter, index) => {
    const row = document.createElement('div');
    row.classList.add('row');

    const start = index * 15 + 1;
    const end = start + 14;

    for (let i = start; i <= end; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = `${letter}${i}`;
      cell.addEventListener('click', () => toggleHighlight(cell));
      row.appendChild(cell);
    }

    bingoBoard.appendChild(row);
  });
}

function toggleHighlight(cell) {
  cell.classList.toggle('clicked');
}

generateBoard();