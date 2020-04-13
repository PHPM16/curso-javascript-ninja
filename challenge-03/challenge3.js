let firstVar = {};
console.log(firstVar)
let pessoa = {
    nome: 'Lincoln',
    sobrenome: 'Alexandrino',
    sexo: 'Feminino',
    idade: 25,
    altura: 1.68,
    peso: 60,
    andando: false,
    caminhouQuantosMetros: 0,
}

pessoa.fazerAniversario = () => pessoa.idade++;

pessoa.andar = (metros) => {
    if(pessoa.caminhouQuantosMetros === 1){
        pessoa.caminhouQuantosMetros += metros
        pessoa.andando = true
        `só hoje eu já caminhei ${pessoa.caminhouQuantosMetros} metro`
    }

    pessoa.caminhouQuantosMetros += metros
    pessoa.andando = true
};

pessoa.parar = () => pessoa.andando = false

pessoa.andar(5)
pessoa.andar(10)

pessoa.parar()

pessoa.nomeCompleto = () => {
    if(pessoa.sexo.toLowerCase() === 'feminino'){
        `Olá! eu sou a ${pessoa.nome} ${pessoa.sobrenome}!`
    }
    else{
        `Olá! eu sou o ${pessoa.nome} ${pessoa.sobrenome}!`
    }
}
pessoa.nomeCompleto()

pessoa.mostrarIdade = () => {
    if(pessoa.idade === 1){
        `tenho ${pessoa.idade} ano`
    }
    
    
    `tenho ${pessoa.idade} anos`
}
pessoa.mostrarIdade()

pessoa.mostrarPeso = () => `Eu peso ${pessoa.peso} Kg.`
pessoa.mostrarPeso()

pessoa.mostrarAltura = () => `Minha altura é ${pessoa.altura}m`
pessoa.mostrarAltura()


pessoa.apresentacao = function(){
    let nomeCompleto = `Olá eu sou o ${pessoa.nome} ${pessoa.sobrenome}`;
    
        if(pessoa.sexo.toLowerCase() === 'feminino'){
           nomeCompleto = `Olá eu sou a ${pessoa.nome} ${pessoa.sobrenome}`
        }

        let idade = `tenho ${pessoa.idade} anos`;
            if(pessoa.idade === 1){
                idade = `tenho ${pessoa.idade} ano`
            }

        let metro = `eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`;
            if(pessoa.caminhouQuantosMetros === 1){
                metro = `eu já caminhei ${pessoa.caminhouQuantosMetros} metro!`
            }

        return `${nomeCompleto}, ${idade}, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, ${metro}`

}

pessoa.andar(120)
pessoa.parar()

console.log(pessoa.apresentacao())