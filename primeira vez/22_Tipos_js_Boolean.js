let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1 //booleano?? 1 = true e 0 = false

console.log(!!isAtivo)

//os verdadeiros..
console.log(!!3)
console.log(!!-1) // todos os numeros são verdadeiros menos o 0
console.log(!!(isAtivo = true))


//os falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//finalizando
console.log(!!('' || null || 0 || ' ')) // umas das alternativas é true então = true