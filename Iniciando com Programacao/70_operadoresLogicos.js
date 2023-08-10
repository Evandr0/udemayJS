//operadores logicos
// console.log(true && true); //verdadeiro
// console.log(!false);//contrário de falso ou !diferente de falso
// var a = 10; var b=25 ; console.log (a>
//     b)
//==========

function compras(trabalho1, trabalho2){
    const comprarSoverte = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSoverte

    return { comprarSoverte, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))
