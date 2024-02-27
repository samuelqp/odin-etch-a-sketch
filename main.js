const gridContainer = document.querySelector("#grid");
const gridWidth = gridContainer.clientWidth;
const marginSize = 0;
let currentSideLength = 16;

function createGrid(sideLength) {
  currentSideLength = sideLength;
  gridContainer.replaceChildren();

  for (let i = 0; i < Math.pow(sideLength, 2); i++) {
    let gridBox = document.createElement('div');

    gridBox.id = `box${i}`;
    gridBox.className = 'gridbox';
    gridBox.style.margin = `${marginSize}px`;

    maxWidth = gridWidth / sideLength
    gridBox.style.maxWidth = `${maxWidth}px`;
    gridBox.style.minWidth = `${maxWidth - (2 * marginSize)}px`;

    gridBox.style.minHeight = gridBox.style.minWidth;
    gridBox.style.maxHeight = gridBox.style.maxWidth;

    gridBox.addEventListener('mouseenter', function() {
      changeOnHover(gridBox.id);
    });

    gridContainer.appendChild(gridBox);
  };
}

function changeOnHover(boxID) {
  document.querySelector(`#${boxID}`).style.backgroundColor = "#242424";
};

createGrid(currentSideLength);

const dimension = document.querySelector("#dimensions");
const submit = document.querySelector("#submit");

function dimensionSubmitHandler() {
  let dimensionValue = +dimension.value;
  if (Number.isInteger(dimensionValue)
    && dimensionValue > 0 
    && dimensionValue <= 150){
    createGrid(dimensionValue);
    dimension.value = "";
    dimension.focus();
  } else if (dimensionValue === 0) {
    return ;
  } else {
    dimension.value = "";
    alert("Please input an integer greater than 0 and less than 150");
    dimension.focus();
  }
};

submit.addEventListener('click', dimensionSubmitHandler);
dimension.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    dimensionSubmitHandler();
  }
})

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
  createGrid(currentSideLength);
})

