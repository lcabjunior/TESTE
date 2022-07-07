const cliente = {
    
    nome: "luiz carlos",
    idade: 36,
    cpf: "105848645",
    email: "luiz@gmail.com",
    fones: ["123132131","4564564645"],


dependentes: [{

    nome: 'Louis junior',
    parentesco: 'Filha',
    dataNasc: '15/08/1984'   
},

{
nome: 'samia Maria',
parentesco: 'filha',
dataNasc: '04/01/2014'

}
],

saldo:100,
depositar:function(valor){ // valor que recebe para ser depositado
    this.saldo += valor // += é um operador de incremento
}

}

console.log(cliente.saldo)
cliente.depositar(30) // método
console.log(cliente.saldo) // traz o saldo atualizado