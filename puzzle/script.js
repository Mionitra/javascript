
const puzzleContainer = document.querySelector('#puzzle');
let puzzle = [];
let size = 3;

function generatePuzzle() {
    for (let i=1; i<= size*size; i++){
        puzzle.push({
            value: i,
            position: i,
            x:(getCol(i)-1) * 200,
            y:(getRow(i)-1) * 200,
            disabled: true,
        })
    }
}

function getCol(pos){
    let col = Math.ceil(pos/size);
    return col;
}

function getRow(pos){
    let row = pos % size;
    if (row == 0) {
        row = 3;
    }
    return row;
}
function renderPuzzle() {
    puzzleContainer.innerHTML = '';
    // boucle pour inserer dans l'html les elements dans la liste push
    // puzzle.forEach((item) => {
    //     puzzleContainer.innerHTML += `
    //     <div class="puzzle-block">${item.value}</div>
        
    //     `;
        
    // })
    for (let item of puzzle) {
        if (!item.disabled) continue
        else  {puzzleContainer.innerHTML += `
        <div class="puzzle-block">${item.value}</div>
        `;}
    }
}

function randomizePuzzle() {
    const randomPuzzle = getRandomValues()
    let i = 0
    puzzle.forEach((item) =>  {
        item.value = randomPuzzle[i]
        i++
    })
    const emptyCase = puzzle.find((item) => item.value === size*size)
    emptyCase.disabled = false
    console.log(emptyCase)
}

function getRandomValues() {
    const values = []
    for (let i=1; i <= size*size; i++){
        values.push(i);
    }
    const randomValues = values.sort(() => Math.random() - 0.5);
    return randomValues
    
}
function handleInput() {
    document.addEventListener('keydown', handleKeydown)
}

function handleKeydown(e) {
    console.log(e.key)
}
generatePuzzle();
randomizePuzzle();
renderPuzzle();
handleKeydown()