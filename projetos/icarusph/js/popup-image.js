const popupElement = document.getElementById("image-popup-container")
const closePopupBtn = document.getElementById("close-button-popup")
const popupImage = document.getElementById("popupImage")
const botaoProximo = document.getElementById("nextImageBtn")
const botaoAnterior = document.getElementById("previousImageBtn")

let indiceAtual = null

function configurarHandles(){
	closePopupBtn.onclick = function (){
		popupElement.style.display = 'none'
	}

	botaoProximo.onclick = () => proximaImagem()
	botaoAnterior.onclick = () => imagemAnterior()
}

function mostrarImagem(id){
	indiceAtual = parseInt(id)

	console.log(id, indiceAtual)

	popupElement.style.display = 'flex'
	popupImage.src = imagens[indiceAtual].urlOriginal

	if(estaNoFim()){
		botaoProximo.style.visibility = "hidden"
		botaoAnterior.style.visibility = "initial"
	}else if(estaNoComeco()){
		botaoProximo.style.visibility = "initial"
		botaoAnterior.style.visibility = "hidden"
	}else{
		botaoProximo.style.visibility = "initial"
		botaoAnterior.style.visibility = "initial"
	}
}

function proximaImagem(){
	if(!estaNoFim()){
		mostrarImagem(indiceAtual + 1)
	}
}

function imagemAnterior(){
	if(!estaNoComeco()){
		mostrarImagem(indiceAtual - 1)
	}
}

const estaNoFim = () => (indiceAtual >= imagens.length - 1 )

const estaNoComeco = () => (indiceAtual <= 0)

configurarHandles()