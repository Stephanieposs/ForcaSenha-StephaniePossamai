var senha = document.getElementById("idPassword")
var botaoHide = document.getElementById("idButton")
var out = document.getElementById("idOut");
var div = document.getElementById("idDiv");
var indexMain = 1;
var index = 1;
var pontosTotais =0;

senha.addEventListener("input", intensidadeSenha)
botaoHide.addEventListener("click", show);

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

    pontosTotais = pontos + pontosExtras;
    console.log("total: "+pontosTotais)

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

function intensidadeSenha() {
    pontosSenha();
    if (pontosTotais <= 5) {
        console.log("Passou aqui no pontos total <-=5")
        out.value = "Senha Fraca";
        out.style = "color:red;";
        div.style = "background-color:red;width: 25%;";
    }else if(pontosTotais > 5 && pontosTotais <9){
        out.style = "color:yellow;";
        out.value = "Senha Moderada";
        div.style = "background-color:yellow;width: 50%;";
    }else{
        out.style = "color:green;";
        out.value = "Senha Forte";
        div.style = "background-color:green;width: 100%;";
    }
}

function show() {
    senha = document.getElementById("idPassword")
    if (senha.type === "password") {
        senha.type = "text";
        botaoHide.innerHTML = "HIDE"
      } else {
        senha.type = "password";
        botaoHide.innerHTML = "SHOW"
      }
}
