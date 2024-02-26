const gridContainer = document.querySelector("#grid");
const gridWidth = gridContainer.clientWidth;

function createGrid(sideLength) {
  for (let i = 0; i < Math.pow(sideLength, 2); i++) {
    const gridBox = document.createElement('div');
    gridBox.id = `box${i}`;
    gridBox.className = 'gridbox';
    gridBox.style.minWidth = `${gridWidth / sideLength}px`;
    gridContainer.appendChild(gridBox);
  }
}

createGrid(16);
