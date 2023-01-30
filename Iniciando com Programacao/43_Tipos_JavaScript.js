//string
const escola = "Cod3r";

console.log(escola.charAt(0));//retorna letra na posição 4.
console.log(escola.charAt(5));//nao existe caracter 5
console.log(escola.charCodeAt(3));//tabela Unicode.
console.log(escola.indexOf('d'));//retorna o indice do caracter procurado.

console.log(escola.substring(1))//retorna a string após o indice indicado.
console.log(escola.substring(0, 3));//retorna a string do indice 0 + 3 caracteres.

console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(','));