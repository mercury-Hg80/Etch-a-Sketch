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
    container.style.setProperty("--grid-count", gridSize);

    

    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        
      

        div.addEventListener('mouseover', () => { 
            div.style.backgroundColor = 'black';
        });
     container.appendChild(div);  
    }

}

makeDivs(16);
