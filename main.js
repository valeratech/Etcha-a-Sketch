let square = document.querySelectorAll(".square");
document.addEventListener("mouseover", () => {

    square.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
});

