function createGrid() {
    // prompt('Grid Size');
    let newGrid = document.querySelectorAll('div');
    console.log(newGrid)
    for (n of newGrid) {
        n.remove();
    }
}


let square = document.querySelectorAll(".square");
document.addEventListener("mouseover", () => {

    square.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
});

grid = document.querySelector('.grid');
grid.addEventListener('click', createGrid);

