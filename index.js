/*jshint esversion: 6 */
/*jshint esversion: 7 */

// Select container to append gridCell(s) later (as children).
const container = document.getElementById('container');

// Default grid size in px.
const gridHeight = 600;
const gridWidth = 600;

// Prompts user to enter a grid size. Deletes old grid.
let clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', resetGrid);

let gridSize = 32 ** 2;

// Generate div elements based on input and append to container.
for (i = 0; i < gridSize; i++) {
    let gridCell = document.createElement('div');
    gridCell.classList = 'gridCell';

    container.appendChild(gridCell);

    // Add Event Listener to trigger color change.
    gridCell.addEventListener('mouseover', colorChange);

}

//Dynamic grid styling based on gridSize.
container.style.gridTemplateColumns =
    'repeat(' + Math.sqrt(gridSize) + ',' + gridWidth / Math.sqrt(gridSize) + 'px)';

container.style.gridTemplateRows =
    'repeat(' + Math.sqrt(gridSize) + ',' + gridHeight / Math.sqrt(gridSize) + 'px)';

// Implements the color change when mouse is over target.
function colorChange(e) {
    event.target.style.backgroundColor = '#99CED3';
}

// Draws new grid based on user input
function resetGrid(e) {

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    let newGridSize = prompt('How many squares per side do you want? Enter a number (Maximum is 100).') ** 2;

    if (newGridSize <= 100 ** 2) {

        for (i = 0; i < newGridSize; i++) {
            let gridCell = document.createElement('div');
            gridCell.classList = 'gridCell';

            container.appendChild(gridCell);

            // Add Event Listener to trigger color change.
            gridCell.addEventListener('mouseover', colorChange);

            container.style.gridTemplateColumns =
                'repeat(' + Math.sqrt(newGridSize) + ',' + gridWidth / Math.sqrt(newGridSize) + 'px)';

            container.style.gridTemplateRows =
                'repeat(' + Math.sqrt(newGridSize) + ',' + gridHeight / Math.sqrt(newGridSize) + 'px)';
        }
    } else {
        alert('This number is too large. Try something less than 100 squares per side.')
    }

}