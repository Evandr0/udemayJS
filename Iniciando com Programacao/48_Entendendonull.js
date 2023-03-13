let valor;
console.log(valor); //undefined / não inicializada

valor = null;
console.log(valor); //ausência de valor


const produto = {};
console.log(produto.preco);
console.log(produto)

produto.preco =3.50;
console.log(produto);

produto.preco = undefined; //evite atribuir undefined
//delete produto.preco
console.log(produto);
produto.preco = null; //sem preço
console.log(!!produto.preco);