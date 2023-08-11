//                        se for verdade retorna aprovado se for falso, retorna Reprovado.
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
//ou
// const resultado = nota => {
//     return nota >= 7 ? 'Aprovado' : 'Reprovado' 
// }

console.log(resultado(7.1))

console.log(resultado(6.7))