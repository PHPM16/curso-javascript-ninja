/*
Crie um array com 5 items (tipos variados).
*/
// ?

let arr = [5, 'lápis', function(){}, null, undefined]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?

let addItem = (item) => {
    arr.push(item)
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
    addItem([3, '3', function(){}])

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?
    console.log(`O segundo elemento do segundo array é ${arr[5][1]}.`)
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O primeiro array tem ${arr.length} itens.`)
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O segundo array tem ${arr[5].length} itens.`)
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let evenNumbers = []
let i = 10;
let oddNumbers = []

while (i <= 20) {
    i%2 === 0? evenNumbers.push(i):oddNumbers.push(i)
    i++
}

console.log( `Números pares entre 10 e 20: ${evenNumbers} `);
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( `Números ímpares entre 10 e 20: ${oddNumbers}`);
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
let arr4 = [];
for(let i = 100; i<=120; i++){
    i%2 === 0? arr4.push(i):null
}
console.log( `Números pares entre 100 e 120: ${arr4}` );
// ?

let arr5 = [];
for(let i = 111; i<=125; i++){
    i%2 !== 0? arr5.push(i):null
}

console.log( `Números ímpares entre 111 e 125: ${arr5}` );
// ?