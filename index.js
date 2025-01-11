const container = document.querySelector(".container");

function layOutGrid() {
    for (let i = 0; i < 256; i++) {
        const divs = document.createElement("div");
        divs.classList.add("divDesign");
        container.appendChild(divs);
    }
}

layOutGrid();

// create container in js and make div squares with for loop
