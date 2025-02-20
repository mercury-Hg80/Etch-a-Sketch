const container = document.querySelector(".container");

    function makeGrid() {
        for (i = 0; i < 16; i++) {
            for (j = 0; j < 16; j++) {
                const row = document.createElement("div");
                container.appendChild(row);

        }
        }
    }
