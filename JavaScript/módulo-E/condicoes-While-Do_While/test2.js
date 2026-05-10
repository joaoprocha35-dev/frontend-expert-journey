/*Exercício 1: O Contador Inteligente
O Problema: O usuário quer contar de um número inicial até um número final.

Peça um Início (ex: 5).

Peça um Fim (ex: 12).

O programa deve mostrar todos os números entre eles.

O desafio de lógica: E se o usuário digitar o Início maior que o Fim (ex: de 10 até 1)? O seu código deve ser inteligente o suficiente para perceber isso e contar para trás (regressivo) em vez de não fazer nada.*/
const readline = require('readline-sync');

let n1 = Number(readline.question("Numero inicial: "));
let n2 = Number(readline.question("Numero final: "));

let c = n1; 

console.log(`--- Contando de ${n1} ate ${n2} ---`);

do {
    console.log(c); // Aqui é onde o número aparece no terminal!

    if (n1 < n2) {
        c++; // Se o início é menor, eu subo
    } else {
        c--; // Se o início é maior, eu desço
    }

} while (n1 < n2 ? c <= n2 : c >= n2); 

console.log("Programa finalizado com sucesso!");