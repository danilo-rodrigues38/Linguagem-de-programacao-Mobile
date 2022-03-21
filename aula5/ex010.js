/*
Faça um programa que solicite ao usuário o preço atual da gasolina e informe 
a mensagem "A gasolina está cara" se o valor informado for maior do que 2.5
*/

console.log ('****************')
console.log ('* Exercício 10 *')
console.log ('****************')
console.log (' ')
console.log ('Programa para informar se o valor da gasolina está alto.')
const readline = require ('readline-sync')
var valor = readline.question ('Informe o valor da gasolina:')
if (valor >= 2.5) {
    console.log ('O valor de R$', valor, ', está muito caro!')
} else {
    console.log ('O valor de R$', valor, ', está num preço bom.')
}
console.log (' ')
console.log (' ')