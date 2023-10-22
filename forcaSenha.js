var senha = document.getElementById("idPassword").value
var botaoHide = document.getElementById("idButton").value
var mensagemIntensidade = document.getElementById("idIntensidadeSenha").value

/*Se a senha tiver mais de 1 caractere - 1 ponto;
Se a senha tiver mais de 6 caracteres - 2 pontos;
Se a senha tiver 10 ou mais caracteres - 3 pontos;
Se a senha tiver 12 ou mais caracteres - 4 pontos;
Se a senha tiver 14 ou mais caracteres - 5 pontos;
Se a senha contiver pelo menos um número - +1 ponto;
Se a senha contiver pelo menos uma letra maiúscula - +1 ponto;
Se a senha contiver pelo menos um caractere minusculo - +1 ponto;
Se a senha contiver pelo menos um caractere especial (não alfanumérico) - +2 pontos */
var pontos = 0;
function pontosSenha() {
    if (senha.lenght > 1) {
        pontos=1;
    }else if (senha.lenght > 6) {
        pontos=2
    }else if (senha.lenght >= 10) {
        pontos=3
    }else if (senha.lenght >= 12) {
        pontos=4
    }else if (senha.lenght >= 14) {
        pontos=5
    }

    for (let index = 0; index < senha.length; index++) {
        if(senha[index] == 1 || senha[index] == 2 || senha[index] == 3 || senha[index] == 4 || senha[index] == 5 || senha[index] == 6
            || senha[index] == 7 || senha[index] == 8 || senha[index] == 9 || senha[index] == 0){
                pontos +=1
        }else if(senha[index].charCodeAt(index) < 65 || senha[index].charCodeAt(index)>90  && 
                 senha[index].charCodeAt(index)<97 || senha[index].charCodeAt(index)>122){
                pontos+=2;
        }

    }
}


