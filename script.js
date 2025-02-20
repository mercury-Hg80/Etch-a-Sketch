const container = document.querySelector(".container");



function makeDivs() {
    for (i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('.square');
        container.appendChild(div);
    }
}