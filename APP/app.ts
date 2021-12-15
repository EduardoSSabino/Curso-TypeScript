import { createScanner } from "./node_modules/typescript/lib/typescript";

let nome: string;
let sobrenome: string;
let idade: number;
let nomeCompleto: string;

nome= "João";
sobrenome= "da Silva";
idade= 16;
nomeCompleto= nome +" "+ sobrenome;

console.log(`nome: ${nome}, sobrenome: ${sobrenome}, nomeCompleto: ${nomeCompleto}, idade: ${idade}`);

//trabalhando com arrays
let a: (number | string)[]=[];//array de numeros strings
a.push(2);
a.push(3);
a.push("treinaWeb")

console.log(a);//adicionando itens ao meu array

//objetos 
type Animal = {
    nome: string;
    idade: number;// o ponto de interrogação significa que a idade é oopcional
}

//instanciando um animal
let cachorro: Animal;

cachorro = {
    nome: "Totó",
    idade: 10
}

console.log(cachorro)

//Enum
enum produtosStatus {
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3
}

function checarProdutosStatus(status: number){
    switch (status){
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

//interface

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    nascer(): void;
    crescer(): void;
    morrer(): void;
}

let gato: IAnimal = {
    nome: "George",
    idade: 5,
    estaVivo: true,
    nascer(){
        this.estaVivo = true;
        return console.log(`O ${this.nome} nasceu!`)
    },
    crescer(){
        this.idade++;
        return console.log(`O ${this.nome} crescer!`)
    },
    morrer(){
        this.estaVivo = false;
        this.idade = 0;
        return console.log(`O ${this.nome} morreu...`)
    }

}

gato.nascer();
gato.crescer();
gato.crescer();
gato.crescer();
gato.morrer();

class Animais implements IAnimal { //implements faz a importação da interface IAnimal para a minha classe
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean){
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    nascer(){
        this.estaVivo = true;
        return console.log(`O ${this.nome} nasceu!`);
    };
    crescer(){
        this.idade++;
        return console.log(`O ${this.nome} crescer!`);
    };
    morrer(){
        this.estaVivo = false;
        this.idade = 0;
        return console.log(`O ${this.nome} morreu...`);
    };
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
namespace Terrestres {
    export class Rato extends Animais { //export serve pra deiar  classe visivil fora do escopo
        correr(){
            console.log(`O ${this.nome} correu!`)
        }
    }

    export let ratoBranco = new Rato(`Ratudo`, 2, true); // nome idade estaVivo
    ratoBranco.correr();

}

namespace Marinhos {
    export class Golfinho extends Animais {  
        nadar(){
            console.log(`O ${this.nome} nadou!`)
        }
    }

    export  let goldihoRosa = new Golfinho(`Willy`, 15, true)// nome idade estaVivo
    goldihoRosa.nadar();
}

Terrestres.ratoBranco.correr();
Marinhos.goldihoRosa.nadar();


//declaration = declaração
import calc from './calc.js';

console.log(calc.soma(10, 20));
console.log(calc.sub(20, 10))
;










