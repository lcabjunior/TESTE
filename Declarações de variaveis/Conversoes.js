//tipos de dados
//booleanos

//conversao implícita
//comparação entre numero e texto***
const numero = 456;
const numeroString = "456";
console.log(numero == numeroString)

//conversao explicita


//No java script
// = atribui
// == compara valores que estão dentro
// === compara nao so o valor mais tambem o tipo

// Number()
// String()

console.log(numero + Number(numeroString))

let um = "1";
let dois = "2";

console.log(+ um * + dois);

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.



// EXERCICIO
var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)