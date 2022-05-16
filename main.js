function removeGrid() {
    gridSize = 0;
    while (true) {
        gridSize = prompt('Please enter a grid size');
        if (gridSize < 16) {
            continue;
        } else if (gridSize > 100) {
            continue;
        } else {
            break;
        }
    }
    let newGrid = document.querySelectorAll('.container');
    for (n of newGrid) {
        n.remove();
    }
    createGrid(gridSize);
}

function createGrid(size) {
    footer = document.querySelector('footer')

    // elements must be created inside the for loop or only one instance of the element will be created
    // the number of containers is declared by a variable specified by the grid-button/user and executed by a for loop
    for (let x = 0;x < size; x++) {
        let section = document.querySelector('section');
        let container = document.createElement('div');
        section.insertBefore(container, footer);
        container.className = 'container'

        // loops to create a series of squares inside the container specified above
        // this should give the same amount of squares for the x and y axis (ex. 12x12)
        for (let y = 0; y < size; y++) {
            let square = document.createElement('div');
            container.append(square);
            square.className = 'square'
        }
    }
    createSketch()
}

function createSketch() {
    grid = document.querySelector('.grid');
    grid.addEventListener('click', removeGrid);

    let square = document.querySelectorAll(".square");

    // nested even listener where the outer event listeners
    document.addEventListener("mouseover", () => {
        // use a for loop to iterate through every square (parameter "box") and add an event listener for each one
        square.forEach(box => {
            box.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'black';
            });
        });
    });
}


createSketch()