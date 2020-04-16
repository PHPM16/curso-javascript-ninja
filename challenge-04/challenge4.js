let isTruthy = (item) => !!item;
console.log(isTruthy(25))

let carro = {
    marca: 'Fiat',
    modelo: 'Punto',
    placa: 'lks-5080',
    ano: 2000,
    cor: 'vermelho',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};

carro.mudarCor = (cor) => carro.cor = cor;

carro.mudarCor('Amarelo');

carro.obterCor = () => carro.cor;

carro.obterModelo = () => carro.modelo;

carro.obterMarca = () => carro.marca;

carro.obterMarcaModelo = () => `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`;

carro.acrescentarPessoas =  function(pessoa){
    carro.quantidadePessoas += pessoa;
    let quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    let pluralOuSingular = quantasPessoasCabem === 1? 'pessoa':'pessoas';
    if(carro.assentos === carro.quantidadePessoas){
        return `O carro já está lotado`
    }
    else if(carro.quantidadePessoas > 0 && carro.assentos > carro.quantidadePessoas){
        return `Só cabem ${quantasPessoasCabem} ${pluralOuSingular}`
    }

    return `O carro está vazio`
 }


console.log(carro.acrescentarPessoas(0))
console.log(carro.acrescentarPessoas(2))
console.log(carro.acrescentarPessoas(3))
console.log(carro.acrescentarPessoas(-3))

console.log(carro.quantidadePessoas)



