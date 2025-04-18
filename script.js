const button = document.getElementById("reset-grid");
const container = document.getElementById("container");

//this function is for getting the random color by hovering
//function createGrid() is now set for darkening hovered areas, so it does not use this function
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    container.innerHTML = '';

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.dataset.darkness = 0;

        square.addEventListener("mouseenter", () => {
            let darkness = parseInt(square.dataset.darkness);
            if (darkness < 10) {
                darkness += 1;
                square.dataset.darkness = darkness;
                square.style.backgroundColor = `rgba(0, 0, 0, ${darkness / 10})`;
            }
        })
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "";
        })


        container.appendChild(square);
    }
}

button.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (1-100):");
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    createGrid(newSize);
})

createGrid(16);