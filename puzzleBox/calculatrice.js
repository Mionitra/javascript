document.addEventListener("DOMContentLoaded", () => {
    const puzzleContainer = document.getElementById("puzzle");
    const puzzleSize = 3;
    let tiles = [];

    function createPuzzle() {
        // Create tiles with numbers 1 to 8 and an empty tile
        tiles = [...Array(puzzleSize * puzzleSize - 1).keys()].map(x => x + 1);
        tiles.push("");

        // Shuffle tiles
        tiles.sort(() => Math.random() - 0.5);

        // Create HTML elements for each tile
        tiles.forEach((tile, index) => {
            const tileElement = document.createElement("div");
            tileElement.className = "puzzle-tile";
            tileElement.textContent = tile;
            if (tile === "") {
                tileElement.classList.add("empty");
            }
            tileElement.addEventListener("click", () => moveTile(index));
            puzzleContainer.appendChild(tileElement);
        });
    }

    function moveTile(index) {
        const emptyIndex = tiles.indexOf("");
        const validMoves = [
            index - 1,    // left
            index + 1,    // right
            index - puzzleSize, // up
            index + puzzleSize  // down
        ];

        if (validMoves.includes(emptyIndex)) {
            [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
            updatePuzzle();
        }
    }

    function updatePuzzle() {
        const tileElements = puzzleContainer.children;
        tiles.forEach((tile, index) => {
            tileElements[index].textContent = tile;
            tileElements[index].className = "puzzle-tile";
            if (tile === "") {
                tileElements[index].classList.add("empty");
            }
        });
    }
    

    createPuzzle();
});
