var cell = document.querySelectorAll(".cell");
var result = document.querySelector(".result")
var restart = document.querySelector(".restart")

let Xturn = true;
let compteur = 0;
let caseGagnant = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function gagnant(lettre){
    if (lettre = 'X'){
        result.innerHTML = "PlayerX wins";
    } else {
        result.innerHTML = "PlayerO wins";
    }
};

function conditionGagnant(){
    for (let i of caseGagnant){
        let [e1, e2, e3] = [
            cell[i[0]].innerHTML,
            cell[i[1]].innerHTML,
            cell[i[2]].innerHTML,
        ]
        if (e1!='' && e2!='' && e3!=''){
            if (e1 == e2 && e2 == e3){
                gagnant();   
            }
        }
    }
};

cell.forEach((element) => {
    element.addEventListener("click", () => {
        if (Xturn){
            Xturn = false;
            element.innerHTML = "X";
            element.disabled = true;
            result.innerHTML = "PlayerO's turn";
        }
        else{
            Xturn = true;
            element.innerHTML = "O";
            element.disabled = true;
            result.innerHTML = "PlayerX's turn";
        }
    })
});

function restartGame(){
    cell.innerHTML = "";
}