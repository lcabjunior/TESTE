// Desafio - Filtrando por notas
//Depois de calcular a media dos alunos, precisamos mostrar quem
//está reprovado entre alunos:
// ANa, Marcos, Maria, Mauro
//  7 , 4.5 ,   8,0 ,   7.5

const nomes = ['Ana','Marcos','Maria','Mauro']
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)
console.log(`Reprovados: ${reprovados}`)


const soma = 1+1
console.log(soma)