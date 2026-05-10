const readline = require("readline-sync")

/*
Exercício 2: O Somador Infinito (até que eu canse)
O Problema: Crie um programa que peça para o usuário digitar vários números, um após o outro.

O programa deve ir somando esses números.

O desafio de lógica: O programa só deve parar quando o usuário digitar o número 0.

No final, mostre o total da soma e qual foi o maior número que ele digitou durante a execução. (Dica: você vai precisar de uma variável para "guardar" o maior valor atual).
*/
do{
    let n1 = Number(readline.question("Digite o numero: "))
    let c = Number(n1++)
    if( n1 !== 0 ){
        n1++
    }else{
        console.log(`Total ${c}. Programa finalizado.`)
    }
}

while(n1 !== 0){
}