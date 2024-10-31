

let numero = prompt('Digite sua idade')


numero = parseInt(numero)


if (!isNaN(numero)) {
  if  (numero >= 18) {
    console.log('Voce é maior de idade ')
  } else {
    console.log('Voce é menor de idade ')
  }
}