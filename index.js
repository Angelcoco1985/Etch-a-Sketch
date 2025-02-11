const container = document.querySelector(".container");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    let userInput = prompt("How many squares per side would you like your grid?");
    if (userInput <= 100) {
        clearGrid();
        let k = userInput;
        function layOutGrid() {
            for (let i = 0; i < (k * k); i++) {
                const divs = document.createElement("div");
                divs.classList.add("divDesign");
                container.appendChild(divs);
            }
        }
        
        layOutGrid();

    }
})

function layOutGrid() {
    for (let i = 0; i < 256; i++) {
        const divs = document.createElement("div");
        divs.classList.add("divDesign");
        container.appendChild(divs);
    }
}

function clearGrid() {
    container.innerHTML = "";
}

// divs.addEventListener("mouseenter", () => {
//     divs.style.backgroundColor = "green";
// })

layOutGrid();

// create container in js and make div squares with for loop
