//Tipagem no TypeScript

//tipagem implícita

let username = 'nome'

//tipagem explícita 

let pi: number = 3.1415
let logado: boolean = true

//union types

let rg: number | string | boolean = 256621315
rg = '256621315'


//tipagem global

let generico: any = []
generico = {
    a: '',
    b: 8,
    c: true
}
generico = 'Eu sou generico'
generico = 6.89

//tipagem de array para apenas um tipo:

const listaDeNomes: string[] = ['João Pedro', 'César', 'Vitor', 'Cláudia', 'Vitória' , 'Larissa']
listaDeNomes.push('Roberta')

const notas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
notas.push()

//tipagem que guarda mais de um tipo no array <genérico>

const valores: Array<string | number> = [ 'palavra', 888 , '336465464 ']
const array: Array <boolean> = [true, false, true ]
const lista: Array <any> = [true , 58264 , "palavra"]
