const leitor = require("readline-sync")

function guessNumber() {
    let start = leitor.question("Digite s para começar: ")

    while (start != "s") {
        start = leitor.question("")
    }
    console.log("Advinhe um número de 1 a 100!");
    let option = 0;
    let ans = Math.floor(Math.random() * (100 - 1) + 1);
    for (let index = 1; option != ans; index++) {
        option = leitor.questionInt(`Tentativa ${index}: `)
        if (option > ans) {
            console.log("Muito alto! \nInsira um numero menor!\n ");
        } else if (option < ans) {
            console.log("Muito Baixo! \nInsira um numero maior!\n ");   
        } else if (option == ans) {
            console.log("Resposta certa!");
        }else {
            console.log("Numero inválido!");
        }
    }
}

guessNumber()