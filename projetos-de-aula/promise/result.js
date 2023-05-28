const loadRecipe = recipeList => {
    const divRes = document.querySelector("#resultado")
    recipeList.forEach(element => {
        divRes.innerHTML += `<h1>${element.nome}</h1>`
    });
    console.log(recipeList);
}

if(self.fetch){
    const url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json";

    //fetch => alta ordem
    //then => funcoes de callback
    /*fetch(url).then(function(response){
        //console.log("Resposta gerada:",response);
        //return response.text();
        return response.json();
    }).then(function(data){
        console.log(data);
    }).catch(function(erro){
        console.log(`Erro! ${erro}`)
    })*/


    /*fetch(url).then( response => response.json() )
    .then(lista => { function(json){loadRecipe(json)}
        console.log(lista)
    } /*loadRecipe sem parenteses executa depois)
    .catch(erro => console.log(`Erro! ${erro}`) );*/

    fetch(url).then(response => response.json()).then(function(listaDeReceitas){loadRecipe(listaDeReceitas)});

} else {

}