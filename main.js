"use strict";
//Tipagem no TypeScript
//tipagem implícita
let username = 'nome';
//tipagem explícita 
let pi = 3.1415;
let logado = true;
//union types
let rg = 256621315;
rg = '256621315';
//tipagem global
let generico = [];
generico = {
    a: '',
    b: 8,
    c: true
};
generico = 'Eu sou generico';
generico = 6.89;
//tipagem de array para apenas um tipo:
const listaDeNomes = ['João Pedro', 'César', 'Vitor', 'Cláudia', 'Vitória', 'Larissa'];
listaDeNomes.push('Roberta');
const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
notas.push('nota');
//tipagem que guarda mais de um tipo no array <genérico>
const valores = ['palavra', 888, '336465464 '];
const array = [true, false, true];
const lista = [true, 58264, "palavra"];
let pessoa = {
    nome: 'Pietro',
    idade: 22,
    altura: 1.8,
    cpf: '111.111.111-22',
    solteiro: false,
    habilidades: ['Java', 'Angular', 'Typescript', 'Node.js', 'Springboot'],
    endereco: {
        rua: 'Rua feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep: '123000-000'
    }
};
