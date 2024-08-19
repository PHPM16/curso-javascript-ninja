// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(num1, num2){
    return num1+num2
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let result = soma(5, 10) + 5

// Qual o valor atualizado dessa variável?
console.log('Linha 8', result)

// Declare uma nova variável, sem valor.
let newvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function newvarvalue(){
    newvar = 43
}
console.log('Linha 22','O valor da variável agora é ' + newvar)

// Invoque a função criada acima.
newvarvalue()

// Qual o retorno da função?
console.log('Linha 22','O valor da variável agora é ' + newvar)
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function threenum(num1, num2, num3){
    if(num1 === undefined || num2 === undefined || num3 === undefined){
        console.log('Linha 37',`Preencha todos os valores corretamente`)
    } 
    else {
        return(num1*num2*num3)+2
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log('Linha 46', threenum(2,6))

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(threenum(2,6,8))

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento // se o argumento c e o argumento b não forem passados retorn a.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function thirdnum(a, b, c) {
    if(!!c && !!b && !!a){
    return (a+b)/c;
   }
   else if(!c  && !!b && !!a){
    return a+b
   }
   else if(!c && !b && !!a){
    return a
   }
   else{
    return null
   }
}

/*Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.)
Coloque um comentário de linha ao lado da função com o resultado de cada invocação.*/
console.log('Condição 1, Linha 80', thirdnum(1))
console.log('Condição 2, Linha 81', thirdnum(2, 5))
console.log('Condição 3, Linha 82', thirdnum(5, 5, 2))
console.log('Condição 4, Linha 83', thirdnum())