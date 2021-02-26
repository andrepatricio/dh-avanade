"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// string
var nome;
nome = "Ivo";
// boolean
var matriculado;
matriculado = false;
// number
var idade;
idade = 25;
// Array 
var list;
list = [1, 2, 3, 4];
var list2;
list2 = ["ivonaldo", "andre"];
// tuplas 
var list3;
list3 = ["ivonaldo", 26, false];
var idade2 = 25;
var nome2 = "ivonaldo";
// window.addEventListener("click", (e) => {
//     e.target
// })
var colors;
(function (colors) {
    colors["white"] = "#FFF";
    colors["black"] = "#000";
    colors["dhRed"] = "#cb1e40";
})(colors || (colors = {}));
var red = colors.dhRed;
console.log(red);
var test;
test = true;
test = "ivo";
test = 12354;
function logger() {
    console.log("aqui esta o log");
}
console.log(logger());
var exemplo;
function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(1, 2));
function saudacao(nome, idade) {
    return "ola " + nome + " voce tem " + idade + " anos";
}
console.log(saudacao("Ivonaldo", "25"));
function logProduto(code) {
    console.log(code);
}
logProduto("1234EF");
function getSkill(skill) {
    return skill;
}
console.log(getSkill("React"));
console.log(getSkill("Vue"));
var aluno = {
    matricula: 1,
    name: "Ivonaldo",
    mandarEmail: function (email) { return email; }
};
console.log(aluno);
var curso = {
    nameCurso: "Avanade",
    code: 123,
};
var info = {
    matricula: 1,
    name: "Ivonaldo",
    email: "ivonaldo@digitalhouse.com",
    nameCurso: "avanade",
    code: 123,
    mandarEmail: function (email) { return email; }
};
console.log(info.mandarEmail("ivonaldo.com"));
var meuCarro = {
    placa: "146XRF",
    cor: "Prata",
    modelo: "Palio",
    portas: 4,
    qualMeuCarro: function (nome) {
        return "o seu carro \u00E9 " + nome;
    }
};
var minhaMoto = {
    placa: "114DRF",
    cor: "Vermelha",
    modelo: "Pop 100",
    cilindrada: 150,
};
console.log('Carro', meuCarro);
console.log(meuCarro.qualMeuCarro("Palio"));
console.log('Moto', minhaMoto);
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var subClasse = /** @class */ (function (_super) {
    __extends(subClasse, _super);
    function subClasse(nome, greeting) {
        var _this = _super.call(this, greeting) || this;
        _this.nome = nome;
        return _this;
    }
    subClasse.prototype.greet = function () {
        return "Hello " + this.nome + " and Hello " + this.greeting;
    };
    return subClasse;
}(Greeter));
var greeter = new subClasse("Ivonaldo", "World");
console.log(greeter.greet());
