const container = document.querySelector(".container");

document.querySelector("button").onclick = function () {
    let gridSize = prompt ('Please enter grid count (max 100):', '16'); 
    gridSize = parseInt(gridSize); 

    if (gridSize && gridSize <= 100) {
        makeDivs(gridSize); 
    
    } else {
        alert("Invalid input! Enter a number LESS than 100.");
    }

 };


function makeDivs(gridSize) {

    container.innerHTML = "";

    const squareSize = 300 / gridSize;

    for (i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);

        div.addEventListener('mouseover', () => { 
            div.style.backgroundColor = 'black';
        })
       
    }

}

makeDivs();
