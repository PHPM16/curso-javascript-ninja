let soma = (num1, num2) => num1+num2;

let result = soma(5,10)+5;

console.log(result)
let novavar;

function responderNovaVariavel(){
    novovar = 90
    return 'O valor da variável agora é ' + novovar
}

console.log(responderNovaVariavel())


let funcaoMaluca = (num1, num2, num3) => {
    if(num1 === undefined || num2 === undefined || num3 === undefined){
        console.log(`Preencha todos os valores corretamente`)
    }
       console.log((num1*num2*num3)+2)
}

console.log(funcaoMaluca(2,9,4))


let segundaFuncaoMauluca = (x, y, z) => {
    if(x === undefined && y === undefined && z === undefined){
        return false
    }
    else if(y === undefined && z === undefined){
        return x
    }
    else if(z === undefined){
        return x+y
    }
    else{
        return (x+y)/z
    }
}

console.log(segundaFuncaoMauluca(8,4))

