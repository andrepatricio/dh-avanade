// string
let nome: string;
nome = "Ivo";

// boolean
let matriculado: boolean;
matriculado = false;

// number
let idade: number;
idade = 25;

// Array 
let list: number[];
list = [1,2,3,4];

let list2: Array<string>;
list2 = ["ivonaldo", "andre"];

// tuplas 
let list3: [string, number, boolean];
list3 = ["ivonaldo", 26, false]


let idade2 = 25;
let nome2 = "ivonaldo";

// window.addEventListener("click", (e) => {
//     e.target
// })

enum colors {
    white = "#FFF",
    black = "#000",
    dhRed = "#cb1e40",
}

let red = colors.dhRed;
console.log(red);


let test: any;
test = true;
test = "ivo";
test = 12354

function logger(): void {
    console.log("aqui esta o log");
}
console.log(logger());


let exemplo: Array<string> | undefined | null;


function soma(num1: number, num2: number) {
    return num1 + num2
}
console.log(soma(1, 2));

type customType = string | number;

function saudacao(nome: string, idade: customType) {
    return `ola ${nome} voce tem ${idade} anos`;
}
console.log(saudacao("Ivonaldo", "25"));

function logProduto(code: customType) {
    console.log(code)
}
logProduto("1234EF");


type skill = "React" | "Angular" | "Vue";

function getSkill(skill: skill) {
    return skill;
}
console.log(getSkill("React"));
console.log(getSkill("Vue"));


type aluno = {
    matricula: number;
    name: string;
    email?: string;
    mandarEmail: Function;
}

const aluno: aluno = {
    matricula: 1,
    name: "Ivonaldo",
    mandarEmail: (email: string) => email
}
console.log(aluno);

type curso = {
    nameCurso: string,
    code: number,
}

const curso: curso = {
    nameCurso: "Avanade",
    code: 123,
}

type alunoInfo = aluno & curso;

const info: alunoInfo = {
    matricula: 1,
    name: "Ivonaldo",
    email: "ivonaldo@digitalhouse.com",
    nameCurso: "avanade",
    code: 123,
    mandarEmail: (email: string) => email
}
console.log(info.mandarEmail("ivonaldo.com"));



interface veiculo {
    placa: string,
    cor: string,
    modelo: string,
}

interface carro extends veiculo {
    portas: number;
    qualMeuCarro: (nome: string) => string;
}

interface moto extends veiculo {
    cilindrada: number
}

const meuCarro: carro = {
    placa: "146XRF",
    cor: "Prata",
    modelo: "Palio",
    portas: 4,
    qualMeuCarro: (nome: string) => {
        return `o seu carro é ${nome}`;
    }
}

const minhaMoto: moto = {
    placa: "114DRF",
    cor: "Vermelha",
    modelo: "Pop 100",
    cilindrada: 150,
}


console.log('Carro', meuCarro);
console.log(meuCarro.qualMeuCarro("Palio"));
console.log('Moto', minhaMoto);




class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting
    }
}

class subClasse extends Greeter {
    nome: string;
    constructor(nome: string, greeting: string) {
        super(greeting);
        this.nome = nome;
    }

    greet() {
        return `Hello ${this.nome} and Hello ${this.greeting}`
    }
}

let greeter = new subClasse("Ivonaldo", "World");
console.log(greeter.greet());