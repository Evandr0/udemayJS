const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logragouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome,idade } = pessoa;

console.log(nome, idade);

const {nome: n, idade: i} = pessoa;

console.log(pessoa);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: {logragouro, numero, cep } } = pessoa;
console.log(logragouro, numero, cep);