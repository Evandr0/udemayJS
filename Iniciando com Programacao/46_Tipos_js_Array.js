//Arrays
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores.length); //conta quantos arrays
valores.push({id: 3}, false, null, 'teste'); //insere no array
console.log(valores);

console.log(valores.pop); //retira ultimo item do array

delete valores[0]; //deleta primeiro item do array

console.log(typeof valores);