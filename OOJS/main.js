// Exercício Polimorfismo
// Classe base
class Animal {
    constructor(nome, quantidadeInicial) {
        this.nome = nome;
        this.quantidade = quantidadeInicial || 0;
    }

    adicionarUnidade(unidade) {
        if (unidade > 0) {
            this.quantidade += unidade;
        }
    }

    getQuantidade() {
        return this.quantidade;
    }

    descrever() {
        return `Quantidade de ${this.nome}s: ${this.getQuantidade()}`;
    }
}

// Classe Cachorro
class Cachorro extends Animal {
    constructor(quantidadeInicial) {
        super("cachorro", quantidadeInicial);
    }
}

// Classe Gato
class Gato extends Animal {
    constructor(quantidadeInicial) {
        super("gato", quantidadeInicial);
    }
}

// Classe SomaAnimal
class SomaAnimal {
    constructor() {
        this.animais = [];
    }

    adicionarAnimal(animal) {
        this.animais.push(animal);
    }

    descreverAnimais() {
        this.animais.forEach(animal => {
            console.log(animal.descrever());
        });
    }
}

// Demonstração de uso
const somaAnimal = new SomaAnimal();

// Criando os animais
const cachorro = new Cachorro(2);
const gato = new Gato(3);
const passaro = new Animal("pássaro", 4); // Terceira instância genérica

// Adicionando os animais
somaAnimal.adicionarAnimal(cachorro);
somaAnimal.adicionarAnimal(gato);
somaAnimal.adicionarAnimal(passaro);

// Incrementando unidades
cachorro.adicionarUnidade(1); // Incrementa 1 cachorro
gato.adicionarUnidade(1);     // Incrementa 1 gato
passaro.adicionarUnidade(2);  // Incrementa 2 pássaros

// Descrevendo os animais
somaAnimal.descreverAnimais();
// Saída:
// Quantidade de cachorros: 3
// Quantidade de gatos: 4
// Quantidade de pássaros: 6