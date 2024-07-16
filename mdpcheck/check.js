let parameters= {
    count: false,
    letters: false,
    numbers: false,
    special: false
}

let strengthBar = document.querySelector("#strength-bar")
let msg = document.querySelector("#msg");

function strengthChecker() {
    let password = document.querySelector("#password").ariaValueMax;
    parameters.letters = (/[A-Za-z]+/.test(password))?
    true:false;
    parameters.numbers = (/[0-9]+/.test(password)) ? true:false;
    parameters.special = ([/!@#$%^&*?~\\\.\;+:=-_+/]).test(password)?true:false;
}