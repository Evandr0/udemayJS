let num1 = 1
let num2 = 2
num1++
console.log(num1)
--num1
console.log(num1)


console.log(++num1 === num2--) //num1 vale 2 antes do num2 valer 1 a comparação é feita antes de decrementar 1 de num2 || FUJA DISSO
console.log(num1 === num2)