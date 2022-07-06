const cliente = {
    
    nome: "luiz carlos",
    idade: 36,
    cpf: "105848645",
    email: "luiz@gmail.com",
    fones: ["123132131","4564564645"]

}

cliente.dependentes = {

    nome: "Louis junior",
    parentesco: "Filha",
    dataNasc: "15/08/1984"   
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva" // alterando o nome do dependente

console.log(cliente)