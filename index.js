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

                divs.addEventListener("mousemove", () => {
                    divs.style.backgroundColor = "green"; // Change to random color with opacity
                });
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

        divs.addEventListener("mousemove", () => {
            divs.style.backgroundColor = "green"; // Change to random color with opacity
        });

    }
}

function clearGrid() {
    container.innerHTML = "";
}


//Figure out how to change colors of grid permanetnly and figure
//out opacity rgb random value

layOutGrid();
