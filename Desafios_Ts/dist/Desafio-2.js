"use strict";
// Como podemos melhorar o esse código usando TS? 
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: "atriz"
};
const pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro"
};
let pessoa3 = {
    nome: "Laura",
    idade: "32",
    profissao: "Atriz"
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: "padeiro"
};
//Ou
var Work;
(function (Work) {
    Work[Work["actress"] = 0] = "actress";
    Work[Work["baker"] = 1] = "baker";
    Work[Work["dev"] = 2] = "dev";
})(Work || (Work = {}));
let person1 = {
    name: "Eduardo",
    age: 19,
    occupation: Work.dev
};
