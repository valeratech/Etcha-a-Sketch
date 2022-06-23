let power = false;

function removeGrid() {
    gridSize = 0;
    power = false;
    // loop to limit the grid-size to a minimum of 16 and a maximum of 100
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

        let container = document.createElement('div');
        master.insertBefore(container, footer);
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

function test(e) {

    if (e.target.className === 'square') {
        e.target.classList.remove('square');
        e.target.classList.add('light');
    } else if (e.target.className === 'light') {
        e.target.classList.remove('light');
        e.target.classList.add('dark');
    } else if (e.target.className === 'dark') {
        e.target.classList.remove('dark');
        e.target.classList.add('black');
    } else {
        //pass
    }
}

function onOff() {
    console.log(power);
    if (power) {
        power = false;
        createSketch();
    } else {
        power = true;
        createSketch();
    }
}


function createSketch() {

    // nested even listener where the outer event listeners
    // document.addEventListener("mouseover", () => {
    // use a for loop to iterate through every square (parameter "box") and add an event listener for each one
    if (power) {
        let square = document.querySelectorAll(".square");
        square.forEach(box => {
            box.addEventListener('mouseover', function colorBox(e) {
                test(e);
            })
        })
    } else {
    }
}

let master = document.querySelector('.master');
master.addEventListener('click', onOff);
grid = document.querySelector('.grid');
grid.addEventListener('click', removeGrid);



createSketch();
