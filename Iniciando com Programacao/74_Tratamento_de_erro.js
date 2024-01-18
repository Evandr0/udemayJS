function imprimirNome(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        console.log('Erro ao mostrar o nome: '+ e.message);
    }
}

const obj = { name: 'Roberto'}

imprimirNome(obj)