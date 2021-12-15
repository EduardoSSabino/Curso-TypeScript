let nome;
let sobrenome;
let idade;
let nomeCompleto;
nome = "João";
sobrenome = "da Silva";
idade = 16;
nomeCompleto = nome + " " + sobrenome;
console.log(`nome: ${nome}, sobrenome: ${sobrenome}, nomeCompleto: ${nomeCompleto}, idade: ${idade}`);
//trabalhando com arrays
let a = []; //array de numeros strings
a.push(2);
a.push(3);
a.push("treinaWeb");
console.log(a); //adicionando itens ao meu array
//instanciando um animal
let cachorro;
cachorro = {
    nome: "Totó",
    idade: 10
};
console.log(cachorro);
//Enum
var produtosStatus;
(function (produtosStatus) {
    produtosStatus[produtosStatus["Ativo"] = 1] = "Ativo";
    produtosStatus[produtosStatus["Inativo"] = 2] = "Inativo";
    produtosStatus[produtosStatus["Indisponivel"] = 3] = "Indisponivel";
})(produtosStatus || (produtosStatus = {}));
function checarProdutosStatus(status) {
    switch (status) {
        case produtosStatus.Ativo:
            console.log('Produto disponivel!');
            break;
        case produtosStatus.Inativo:
            console.log('Produto não encontrado');
            break;
        case produtosStatus.Indisponivel:
            console.log('Produto aguardando estoque!');
            break;
    }
}
checarProdutosStatus(produtosStatus.Ativo);
let gato = {
    nome: "George",
    idade: 5,
    estaVivo: true,
    nascer() {
        this.estaVivo = true;
        return console.log(`O ${this.nome} nasceu!`);
    },
    crescer() {
        this.idade++;
        return console.log(`O ${this.nome} crescer!`);
    },
    morrer() {
        this.estaVivo = false;
        this.idade = 0;
        return console.log(`O ${this.nome} morreu...`);
    }
};
gato.nascer();
gato.crescer();
gato.crescer();
gato.crescer();
gato.morrer();
class Animais {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    nascer() {
        this.estaVivo = true;
        return console.log(`O ${this.nome} nasceu!`);
    }
    ;
    crescer() {
        this.idade++;
        return console.log(`O ${this.nome} crescer!`);
    }
    ;
    morrer() {
        this.estaVivo = false;
        this.idade = 0;
        return console.log(`O ${this.nome} morreu...`);
    }
    ;
}
let galinha = new Animais("Astolfa", 0, true);
galinha.nascer();
galinha.crescer();
galinha.crescer();
galinha.crescer();
galinha.morrer();
/*modificadores de acesso:
    public
    proteced
    private
    reandonly
    */
//metodos get e set
//metodos get e set
/*
  get estaVivo(): boolean {
      return this._estaVivo;
  }

  set estaVivo(status: boolean){
      this._estaVivo = status;
  }
*/
//namespace
var Terrestres;
(function (Terrestres) {
    class Rato extends Animais {
        correr() {
            console.log(`O ${this.nome} correu!`);
        }
    }
    Terrestres.Rato = Rato;
    Terrestres.ratoBranco = new Rato(`Ratudo`, 2, true); // nome idade estaVivo
    Terrestres.ratoBranco.correr();
})(Terrestres || (Terrestres = {}));
var Marinhos;
(function (Marinhos) {
    class Golfinho extends Animais {
        nadar() {
            console.log(`O ${this.nome} nadou!`);
        }
    }
    Marinhos.Golfinho = Golfinho;
    Marinhos.goldihoRosa = new Golfinho(`Willy`, 15, true); // nome idade estaVivo
    Marinhos.goldihoRosa.nadar();
})(Marinhos || (Marinhos = {}));
Terrestres.ratoBranco.correr();
Marinhos.goldihoRosa.nadar();

//declaration = declaração

import calc from './calc.js';
console.log(calc.soma(10, 20));
console.log(calc.sub(20, 10));
