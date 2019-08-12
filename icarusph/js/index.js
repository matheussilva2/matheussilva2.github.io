const elementoListaImagens = document.getElementById("lista-imagens")
const numeroDeImagens = 8

const carregarImagens = () =>{
	let previewImages = imagens.slice(0,8)

	previewImages.forEach((imagem, index) =>{
		let imgContainer = document.createElement("div")
		imgContainer.classList.add('lista-imagens-item')

		let imgDiv = document.createElement('div')
		imgDiv.style.background = `url("${imagem.url}")`
		imgDiv.classList.add('h-100','highlight-hover', 'pic-thumb')
		imgDiv.setAttribute('onclick', 'mostrarImagem(this.id)')
		imgDiv.setAttribute('id', index)
		imgDiv.setAttribute("alt", imagem.alt)

		imgContainer.appendChild(imgDiv)

		elementoListaImagens.appendChild(imgContainer)
	})
}

$(document).ready( ()=>{
	carregarImagens()
})