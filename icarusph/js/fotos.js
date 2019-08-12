const elementoListaImagens = document.getElementById("lista-imagens")

const carregarImagens = () =>{
	imagens.forEach((imagem, index) =>{
		let imgContainer = document.createElement("div")
		imgContainer.classList.add('lista-imagens-item')

		let imgDiv = document.createElement('div')
		imgDiv.style.background = `url("${imagem.urlOriginal}")`
		imgDiv.classList.add('h-100','highlight-hover', 'pic-thumb')
		imgDiv.setAttribute('onclick', 'mostrarImagem(this)')
		imgDiv.setAttribute('id', index)

		imgContainer.appendChild(imgDiv)

		elementoListaImagens.appendChild(imgContainer)
	})
}

$(document).ready( ()=>{
	carregarImagens()
})