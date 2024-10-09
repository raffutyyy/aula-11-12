/* function x(n1, n2, n3, n4){

    let soma = (n1 + n4) /2
    return soma
    
}
 const novoArray = console.log (x(3,5,3,1))

*/

function x(numeros){
    let array = []
    let primNum = numeros[0] /2
    let segNum = numeros[numeros.length -1] /2
    array.push(segNum)
    array.push(primNum)

    return array;
}
