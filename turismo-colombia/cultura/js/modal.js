const iframeShakira = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0jO79m?utm_source=generator" width="60%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'

const iframeJBalvin = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0POF7a?utm_source=generator" width="60%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'

const iframeMaluma = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0N7ckw?utm_source=generator" width="60%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'

const fecharModal = document.querySelector('#fechar-modal')
const modal = document.getElementById("my-modal");

const abrirModal = (id) => {
    //removendo o frame atual da div para então adicionar outro
    let iframeAtual = document.querySelector('.conteudo-modal iframe');
    if(iframeAtual != null){
        iframeAtual.parentNode.removeChild(iframeAtual);
    }
        
    let modalConteudo = document.querySelector('.conteudo-modal')

    if(id == 'shakira'){
        modalConteudo.insertAdjacentHTML('beforeend', iframeShakira)
    } else if(id == 'jbalvin') {
        modalConteudo.insertAdjacentHTML('beforeend', iframeJBalvin)
    } else {
        modalConteudo.insertAdjacentHTML('beforeend', iframeMaluma)
    }
        
    modal.style.display = 'block';
}

fecharModal.addEventListener("click", function(){
    modal.style.display = 'none';
})