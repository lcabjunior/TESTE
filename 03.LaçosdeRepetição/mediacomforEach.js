// calcular a media entre as seguintes notas usando o Foreach

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

// callback
//notas.forEach(nota =>{

  //  somaDasNotas += nota
//})

notas.forEach(function(nota){// o foreach automaticamente le o indice/arrays

    somaDasNotas += nota   //sem precisa de colocar o [i] 
})

let media = somaDasNotas/notas.length

console.log(media)