var senha = document.getElementById("idPassword")
var botaoHide = document.getElementById("idButton").value
var mensagemIntensidade = document.getElementById("idIntensidadeSenha").value
var indexMain = 1;
var index = 1;

senha.addEventListener("input", pontosSenha)

function pontosSenha() {

    console.log("passou aqui")
    var pontos = 0;
    senha = document.getElementById("idPassword").value

    //console.log(index)

    if (indexMain > 1 && indexMain <= 6) {
        pontos = 1;
    } else if (indexMain > 6 && indexMain < 10) {
        pontos = 2
    } else if (indexMain >= 10 && indexMain < 12) {
        pontos = 3
    } else if (indexMain >= 12 && indexMain < 14) {
        pontos = 4
    } else if (indexMain >= 14) {
        pontos = 5
    }
    console.log("pontos do comeco " + pontos)

    var pontosExtras = (pontoNumero() + pontoLower() + pontoUpper()+pontoSimbolos())


    console.log(pontosExtras)
    //return pontos + pontosExtras


    indexMain++

}
senha = document.getElementById("idPassword").value
function pontoSimbolos() {
    for (let index = 0; index < senha.length; index++) {
        if (
            senha[index].charCodeAt() > 32 && senha[index].charCodeAt() < 48 || 
            senha[index].charCodeAt() > 57 && senha[index].charCodeAt() < 65 || 
            senha[index].charCodeAt() > 90 && senha[index].charCodeAt() < 97 ||
            senha[index].charCodeAt() > 122) {
            console.log("caractere ");
            return 2;
        }
    }
    return 0
}
function pontoNumero() {
    for (let index = 0; index < senha.length; index++) {
        if (senha[index] == 1 || senha[index] == 2 || senha[index] == 3 || senha[index] == 4 || senha[index] == 5 || senha[index] == 6
            || senha[index] == 7 || senha[index] == 8 || senha[index] == 9 || senha[index] == 0) {
            console.log("numero")
            return 1
        }
    }
    return 0;
}
function pontoLower() {
    for (let index = 0; index < senha.length; index++) {
        if (senha[index] == senha[index].toLowerCase() &&
        senha[index].charCodeAt() > 96 && senha[index].charCodeAt() < 123) {
            console.log("lower")
            return 1
        }

        // 
    }
    return 0
}
function pontoUpper() {
    for (let index = 0; index < senha.length; index++) {
        if (senha[index].charCodeAt() > 64 && senha[index].charCodeAt() < 91) {
            console.log("upper")
            return 1
        }
    }
    return 0
}

/*Total de pontos possíveis: 10.
A senha será considerada "Forte" se somar 9 ou mais pontos;
A senha será considerada "Moderada" se somar mais de 5 e menos de 9 pontos;
A senha será considerada "Fraca" se somar 5 ou menos pontos. */


