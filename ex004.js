//A)
function somaNum(num1, num2){
    let soma = num1 + num2
    console.log(soma)
}
somaNum(5, 3)

//B) 

function analise(num1, num2){
    return num1 >= num2


}
console.log(analise(4,4))

//C)

function recebeNum(n){
    return n %2 == 0



}
console.log(recebeNum(3))

//D)

function mensagem(m){
    console.log(`Tamanho da mensagem:`, m.length)
    console.log(`Mensagem em maiusculo:`, m.toUpperCase())
}
mensagem('Bom dia')