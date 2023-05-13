//capturar elemento no botão DOM
const bt01 = document.querySelector("#bt01");
const bt02 = document.querySelector("#bt02");

const exibeTermos = lista => {
    const elemento =  document.querySelector("#resultado");
    //console.log(elemento);
    for(let i = 0; i < lista.length; i++){
        let objeto = lista[i];
        elemento.innerHTML += `<tr>
                                    <td>${objeto.termo}</td>
                                    <td>${objeto.ocorrencia}</td>
                                </tr>`; 
    }
}

const exibeQtdLetras = num => {
    document.querySelector("#total-de-letras").innerHTML = num;
}

const exibeQtdVogais = num => {
    document.querySelector("#total-de-vogais").innerHTML = num;
}

const contaVogais = texto => {
    let totalDeVogais = 0;
    //texto.toLowerCase();
    for(let i = 0; i < texto.length; i++){
        if(("aeiou").indexOf(texto[i].termo) >= 0){
            totalDeVogais++;
        }
    }
    exibeQtdVogais(totalDeVogais);
}

const pesquisarTermo = (palavra, lista) => {
    for(let i = 0; i < lista.length; i++){
       if(lista[i].termo == palavra){
            return i;
       }
    }

    return -1;
}

const contaLetras = texto => {
    const listaTermos = texto.split(" ");
    let numLetras = 0;
    for(let i = 0; i < listaTermos.length; i++){
        numLetras += listaTermos[i].length;
    }

    exibeQtdLetras(numLetras);
}
/**
 * Função para contar número de palavras do texto que foi passado como parâmetro
 * 
 * @param texto - String
 * @return {termo1: ocorrencia1, termo2:ocorrencia2, termo3:ocorrencia3...}
 */
const contaPalavras = texto => {
    const listaDePalavras = texto.toLowerCase().split(" ");
    //console.log(listaDeP]alavras);
    let resultado = [];
   
    for(let i = 0; i < listaDePalavras.length; i++){
        let objetoContagem = {}; 
        
        let indice = pesquisarTermo(listaDePalavras[i], resultado);
        if(indice >= 0){
            resultado[indice].ocorrencia++;
        } else {
            objetoContagem.termo = listaDePalavras[i];
            objetoContagem.ocorrencia = 1;

            resultado.push(objetoContagem);
        } 
    }
    //console.log(resultado);
    exibeTermos(resultado);
}
//programar evento
bt01.addEventListener("click", function(){
    //ao clicar no evento

    //recuperar texto digitado
    const texto = document.querySelector("#texto").value;
    //conta palavras
    contaPalavras(texto);
    
    //conta letras
    contaLetras(texto);
    
    //conta vogais
    contaVogais(texto);
        
    //conta palavras
    contaPalavras(texto);
       
    //letras mais comuns
});

bt02.addEventListener("click", function(){
    /*let endereco = {
        rua: "Rua dos Pinheiros",
        numero: 2,
        cidade: "Sao Paulo",
        uf: "SP"
    }*/

    let array = [
        {
            rua: "Rua dos Pinheiros",
            numero: 2,
            cidade: "Sao Paulo",
            uf: "SP",
            interesses: ["Teste3", "Teste4"]
        },
        {
            rua: "Rua dos Pinheiros",
            numero: 3,
            cidade: "Sao Paulo",
            uf: "SP",
            interesses: ["Teste1", "Teste2"]
        },
        {
            rua: "Rua dos Pinheiros",
            numero: 4,
            cidade: "Sao Paulo",
            uf: "SP",
            interesses: ["IA", "DevOps"]
        }
    ]

    //document.querySelector("#result").innerHTML = `O usuário mora em ${endereco.cidade}/${endereco.uf} no nº ${endereco.numero} na ${endereco.rua}`;

    for(endereco of array){
        let frase = `O usuário mora em ${endereco.cidade}/${endereco.uf} no nº ${endereco.numero} na ${endereco.rua}. `;
        frase += `<ul> Interesses: `
        for(interesse of endereco.interesses){
            frase += `<li> ${interesse} </li>`;
        }

        document.querySelector("#result").innerHTML += frase+`</ul><br>`;
    }
});