let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a) essa função pergunta pro usuario um texto e coloca esse texto em minusculo e adiciona a palavra cenoura
//b)