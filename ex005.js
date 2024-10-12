function soma(num1, num2){
    return num1 + num2

}
function subtracao(num1, num2){
    return num1 - num2
}

function multiplicacao(num1, num2){
    return num1*num2
}

function divisao(num1, num2){
    return num1/num2
}

let num1 = prompt('Digite um numero:')
let num2 = prompt('Digite OUTRO numero:')

let resp = Number(num1)
let resp1 = Number(num2)

console.log(`Numeros inseridos: ${num1} e ${num2}`)
console.log('soma:', soma(resp, resp1 ))
console.log('subtração', subtracao(resp, resp1 ))
console.log('multiplicação:', multiplicacao(resp, resp1 ))
console.log('divisão:', divisao(resp, resp1 ))