// Como podemos melhorar o esse código usando TS? 

let pessoa1: {nome:string, idade:number, profissao:string} = {

    nome: "Maria",
    idade: 29,
    profissao: "atriz"
}

interface Pessoa2 {

    nome: string,
    idade: number,
    profissao: string
}

const pessoa2 : Pessoa2 = {

    nome: "Roberto",
    idade: 19,
    profissao: "padeiro"
}

let pessoa3 = {
    nome: "Laura",
    idade: "32",
    profissao: "atriz"
};

let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: "padeiro"
}

//Ou

enum Work {

    actress,
    baker,
    dev
}

type Human = {

    name: string,
    age: number,
    occupation: Work
}

let person1 : Human = {

    name: "Edurdo",
    age: 19,
    occupation: Work.dev
}