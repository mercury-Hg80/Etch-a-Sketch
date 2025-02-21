const container = document.querySelector(".container");

function promptUser() {
    let request = prompt("Please enter the amount of squares per side for the new grid would you like:", "");

}

function makeDivs() {
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
