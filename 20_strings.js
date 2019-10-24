const escola = "Cod3r"
console.log(escola.charAt(4)) //mostra string no indice 4
console.log(escola.charCodeAt(4)) //mostra codigo ASCII do r (4)
console.log(escola.indexOf('C')) //mostra valor do indice na variavel escola. Cod3r C = 0
console.log(escola.substring(1)) //escreve a variavel a partir do indice 1.
console.log(escola.substring(0, 3)) // escreve indice 0, 1 ,2 (3 nao esta incluso)
console.log("Escola ".concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // altera numero 3 por e.
console.log('Ana,Maria, Pedro'.split(',')) //Array .split(',') passar separador.