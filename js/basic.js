console.log('Olá, Javascript!')

var userName= 'Sarah Azevedo'

document.getElementById('user-name').innerHTML= userName

// Variáveis //

var nome = 'Mestre Yoda'
var idade = 100
var jedi= true

//console.log(typeof nome)
//console.log(typeof idade)
//console.log(typeof jedi)

// Operadores matemáticos //

//var n1= 7
//var n2= 2.5

//console.log(typeof n1)
//console.log(typeof n2)   

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir
 

//var total= n1/ n2
//console.log(total)

// Operadores de comparação //

//var v1 = 5
//var v2= '5'

//var resultado= v1 !== v2
//console.log(resultado)

// Funções //
//function soma(n1, n2) {
   // console.log(n1+ n2)

//}

//soma(5 ,100)

//function boasVindas(nome) {
//   alert(nome + ', Seja bem-vindo(a)')
// }

// boasVindas("Sarah")

//function soma(n1, n2) {
   //  return n1 + n2
//}

 //var resultado = soma(5,5)
 //console.log(resultado)

 // Controle de fluxos //

 // Sendo um cliente correntista do banco
 // Posso sacar dinheiro em caixas eletrônicos
 // Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

 //var saldo= 1000

 //function saque(valor) {

    //if(valor > saldo) {
        //console.log('Valor do saque superior ao saldo')
    //} else if (valor > 700) {
         //console.log('Valor do saque é superior ao maximo permitido por operação')
    //} else {
       // saldo = saldo - valor
    //}

 //}       

 //saque(701)
 //console.log(saldo)

 // Cenario 1: Saque com sucesso
 // Dado que meu saldo é de 1000 reais
 // Quando faço um saque de 500 reais
 // Então o valor do saque deve ser deduzir do meu saldo

 // Cenario 2: Saque com valor superior ao saldo
 // Dado que meu saldo é de 1000 reais
 // Quando faço um saque de 1001 reais
 // Então não deve deduzir do meu saldo
 // E deve mostrar uma mensagem alerta informando que o valor é superior ao saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido

// Arrays //

//var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
//console.log(gaveteiro[3])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia','Darth Vader']

// personagens.push('C3pO')
// personagens.push('R2D2')

// personagens.pop()

// personagens = personagens.filter(function(p){
  // return p !== 'Darth Vader'
// })

// personagens = personagens.filter(function(p){
   // return p === 'Mestre Yoda'
// })

// console.log(personagens)

// Controles de repetição (Loops) //

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia','Darth Vader', 'R2D2']

// personagens.forEach(function(p){
// console.log
// })

// for (var i in personagens) {
   // console.log(personagens[i])
// }

 // for(var i = 0; i <=10; i++) {
   // console.log(i)
   // codigo vai ser executado até a condição retornar false

// }

// Objetos // 

// var yoda = {
    // nome: 'Mestre Yoda',
    // idade: 100,
    // jedi: true,
    // mostra_idade: function() {
    // console.log('A idade do ${this.nome} é ${this.idade} anos.')
    // }
// }
// console.log(yoda)
// yoda.mostra_idade()

// Constantes //

const nome = 'Darth Vader'
console.log(nome)

 nome = 'Mestre Yoda'
console.log(nome)

