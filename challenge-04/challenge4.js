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
    if(carro.assentos <= carro.quantidadePessoas){
        return `O carro já está lotado`
    }
    let pluralOuSingular = quantasPessoasCabem === 1? 'pessoa':'pessoas';
    if(carro.assentos > carro.quantidadePessoas){
        return `Só cabem ${carro.assentos-carro.quantidadePessoas} ${pluralOuSingular}`
    }
    return `Já temos ${carro.quantidadePessoas} pessoas no carro!`
}

console.log(carro.acrescentarPessoas(4))



