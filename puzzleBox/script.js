document.addEventListener("onload", () => {
    const puzzleContainer = document.getElementById("puzzle");
    const puzzleSize = 3; // Changer la taille du puzzle à 3
    let tiles = [];

    function createPuzzle() {
        // Créer des cases avec les numéros 1 à 8 et une tuile vide
        for (let i = 1; i < puzzleSize * puzzleSize; i++) {
            tiles.push(i);
        }
        tiles.push(""); // Ajouter la case vide

        // Mélanger les cases
        shuffleArray(tiles);

        // Créer des éléments HTML pour chaque case
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
// fonction pour melanger les cases
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
// fonction qui defini le deplacement valide

    function moveTile(index) {
        const emptyIndex = tiles.indexOf("");
        const validMoves = [
            index - 1,    // gauche
            index + 1,    // droite
            index - puzzleSize, // haut
            index + puzzleSize  // bas
        ];

        if (validMoves.includes(emptyIndex)) {
            [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
            updatePuzzle();
        }
        winCondition();
    }
    // mettre a jour la position apres un deplacement valide

    function updatePuzzle() {
        const tileElements = puzzleContainer.children;
        tiles.forEach((tile, index) => {
            tileElements[index].textContent = tile;
            tileElements[index].className = "puzzle-tile";
            if (tile === "") {
                tileElements[index].classList.add("empty");
            }
        });
         // Check for win after updating tiles
        if (winCondition()) {
            // Add your win logic here (e.g., display a win message, confetti animation)
            alert("Congratulations! You solved the puzzle!");
        }
    }
    function winCondition() {
        for (var i = 1; i <= tiles.length; i++) {
            const bonneposition = i;
            if (tiles[i] != bonneposition) {
                return false;
            }
        }
        return true;
    }
    
    console.log(tiles[i] + "=" + indexOf(tiles[i]))
    createPuzzle();
});
