const canvas = document.getElementById('canvas')
const contexto = canvas.getContext('2d')
const btnMarcarPosicao = document.getElementById('markPosition')


const posX = document.getElementById('posX')
const posY = document.getElementById('posY')

const deslocamentoX = document.getElementById('deslocamentoX')
const deslocamentoY = document.getElementById('deslocamentoY')

const calculo = document.getElementById('calculo')
const resultanteEle = document.getElementById('resultante')

const posMarkedX = document.getElementById('posMarkedX')
const posMarkedY = document.getElementById('posMarkedY')

const personagem = {
	x: 10,
	y: 10,
	cor: "#9E0046",
	tamanho: {
		x: 10,
		y: 10
	}
}

const posicaoMarcada = {
	x: 10,
	y: 10
}

const deslocamento = {
	x: (personagem.x - posicaoMarcada.x)/10,
	y: (personagem.y - posicaoMarcada.y)/10
}

function start(){
	btnMarcarPosicao.onclick = () => {
		posicaoMarcada.x = personagem.x
		posicaoMarcada.y = personagem.y
		update()
	}
	testes()
	update()
}

function update(){
	contexto.clearRect(0,0, 500, 500)
	contexto.fillStyle = personagem.cor
	contexto.fillRect(personagem.x, personagem.y, personagem.tamanho.x, personagem.tamanho.y)

	contexto.beginPath()
	contexto.lineWidth= 3
	contexto.moveTo(posicaoMarcada.x+5, posicaoMarcada.y+5)
	contexto.lineTo(personagem.x+5, personagem.y+5)
	contexto.stroke()
	onDraw()
}

function onDraw(){
	let resultante = Math.sqrt(deslocamento.x**2 + deslocamento.y**2)
	
	deslocamento.x = Math.abs((personagem.x - posicaoMarcada.x)/10)
	deslocamento.y = Math.abs((personagem.y - posicaoMarcada.y)/10)

	posX.innerHTML = `Posição X: |${personagem.x / 10}|`
	posY.innerHTML = `Posição Y: |${personagem.y / 10}|`

	posMarkedX.innerHTML = `Posição X Marcada: |${posicaoMarcada.x / 10}|`
	posMarkedY.innerHTML = `Posição Y Marcada: |${posicaoMarcada.y / 10}|`

	deslocamentoX.innerHTML = `Deslocamento X: |${deslocamento.x} unidades|`
	deslocamentoY.innerHTML = `Deslocamento Y: |${deslocamento.y} unidades|`

	calculo.innerHTML = `Cálculo: |r²| = |${deslocamento.x}²| + |${deslocamento.y}²|`
	resultanteEle.innerHTML = `Resultante: |${resultante} unidades|`
}

function onKeyPressed(e){
	const tecla = e.key
	const eventos = {
		'ArrowUp': () => {
			personagem.y -= 10
			update()
		},
		'ArrowDown': () => {
			personagem.y += 10
			update()
		},
		'ArrowLeft': () => {
			personagem.x -= 10
			update()
		},
		'ArrowRight': () => {
			personagem.x += 10
			update()
		}
	}
	if(tecla in eventos)
		eventos[tecla]()
}

function testes(){
	if(canvas){
		console.log("Canvas OK!")
	}else{
		console.log("Canvas não encontrado!")
	}

	if(contexto){
		console.log("Contexto OK")
	}else{
		console.log("Erro ao pegar contexto")
	}
}

addEventListener('keydown', onKeyPressed)

start()