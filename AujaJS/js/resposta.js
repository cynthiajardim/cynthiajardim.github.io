const bt01 = document.getElementById("exec01");
const bt02 = document.getElementById("limpar");
const bt03 = document.getElementById("exec02");
const bt04 = document.getElementById("exec03");

const lerIptNumero = (idElemento) => {
    const entrada = document.querySelector(idElemento).value;
    return parseFloat(entrada);
}

const soma = (num1, num2) => {
    return num1 + num2;
}

const exibe = (elemento, result) => {
    document.getElementById(elemento).innerHTML = result;
}

const verificaMaior = (num1, num2) => {
    let resposta; 
    if(num1 == num2)
        resposta = "Numeros iguais."
    else if(num1 > num2)
        resposta =  `${num1} maior do que ${num2}`;
    else
        resposta = `${num2} maior do que ${num1}`;

    return resposta;
}

const ehPrimo = (num) => {
    for(let i = 2; i < num; i++){
        if(num%i == 0)
            return "Nao eh primo";
    }

    return "Eh primo";
}

bt01.onclick = function(){
    const num1 = lerIptNumero("#num1");
    const num2 = lerIptNumero("#num2");

    let result = soma(num1, num2);
    exibe("resposta", result);
}

bt02.onclick = function(){
    document.getElementById("resposta").innerHTML = "";
}

bt03.onclick = function(){
    const num1 = lerIptNumero("#num1");
    const num2 = lerIptNumero("#num2");

    let result = verificaMaior(num1, num2);
    exibe("resposta", result);
}

bt04.onclick = function(){
    const num = lerIptNumero("#num3");

    let result = ehPrimo(num);
    exibe("resposta02", result);
}



