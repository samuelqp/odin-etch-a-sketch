const gridContainer = document.querySelector("#grid");
const gridWidth = gridContainer.clientWidth;
const marginSize = 0;

function createGrid(sideLength) {
  for (let i = 0; i < Math.pow(sideLength, 2); i++) {
    const gridBox = document.createElement('div');
    gridBox.id = `box${i}`;
    gridBox.className = 'gridbox';
    gridBox.style.margin = `${marginSize}px`;

    maxWidth = gridWidth / sideLength
    gridBox.style.maxWidth = `${maxWidth}px`;
    gridBox.style.minWidth = `${maxWidth - (2 * marginSize)}px`;

    gridBox.style.minHeight = gridBox.style.minWidth;
    gridBox.style.maxHeight = gridBox.style.maxWidth;
    gridContainer.appendChild(gridBox);
  }
}

createGrid(16);
