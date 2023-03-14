//var = variavel global pode ser acessada de qualquer lugar, menos quando declarada dentro de função.

//54 usando let
var numero = 1;
{
    let numero = 2;
    console.log('Dentro = ', numero);
}
console.log('fora = ', numero);