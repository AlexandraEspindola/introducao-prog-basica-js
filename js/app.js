console.log('Olá, Javascript!')  //retorna no console do Navegador

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true
//var sith = false

//js tipagem dinamica assim como ruby e python


// var userName = 'Alexandra'

// document.getElementById('user-Name').innerHTML = userName

// ---------- VARIAVEIS ---------- //

// console.log(nome)
// console.log(idade)
// console.log(jedi)


// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)


//---------- OPERADORES MATEMÁTICOS ---------- //

// var n1 = 7
// var n2 = 2.5

// console.log(typeof n1)
// console.log(typeof n2)

// var total = n1+n2
// console.log(total) // 10

// var n1 = 5
// var n2 = '5'

// var total = n1+ parseInt(n2)
// console.log(total) //55

// var n1 = 5
// var n2 = 'cinco'

// var total = n1+ parseInt(n2)  
// console.log(total)  //NaN


// var total = n1-n2
// console.log(total)

// var total = n1*n2
// console.log(total)

// var total = n1/n2
// console.log(total)


//---------- OPERADORES DE COMPARAÇÃO ---------- //

// var v1 = 5
// var v2 = '5'

// var resultado = v1 ===  v2 // considerando a tipagem
// var resultado2 = v1 ==  v2
// var resultado3 = v1 != v2
// var resultado4 = v1 !== v2

// console.log(resultado)
// console.log(resultado2)
// console.log(resultado3)
// console.log(resultado4)

//ignorando a tipagem = = 
// se a tipagem é importante = = = 


// ---------- Funções ---------- //

// function soma (n1, n2) {
//     console.log(n1+n2)
// }

// soma(2,2)

// function boasVindas (nome) {
//     alert ('Seja bem vindo(a) ' + nome + '!')
// }

// boasVindas('Alê')

// function soma (n1, n2) {
//     return n1 + n2
// }

// var resultado = soma (5,5)
// console.log (resultado)


// ------------------- Controle de Fuxos ------------------- //

// ---------- BDD - Behavrior driven development ---------- //

// Sendo um cliente correntista do banco - identifica o ator
// Posso sacar dinheiro em caixas eletrônicos - identifica o que deve ser desenvolvido(a)
// Para poder comprar em lugares em lugares que não aceitam o cartão de débito ou crédito - o valor agregado da funcionalidade


// var saldo = 1000

// function saque (valor){

//     if (valor > saldo ){
//         console.log('Valor do saque superior ao saldo' )
//     } else if (valor > 700) {
//         console.log('Valor do saque superior ao máximo permitido por operação' )
//     } else {
//         saldo = saldo - valor

//     }
// }

// saque (701)

// console.log(saldo)




// Cenario 1: Saque com sucesso
// Dado que meu saldo é de R$ 1000 reais
// Quando faço um saque de R$ 500 reais
// Então o valor do saque deve ser deduzido do meu saldo


// Cenário 2: Saque com valor superior ao saldo
// Dado que o meu salado é de R$ 1000 reais
// Quando eu faço um saque de R$ 1001 reais  como o sistema deve se comportar PO?
// Então não deve deduzir o saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo


// Cenário 3: Saque com valor máximo
// Dado que o meu saldo é de R$ 1000
// E que o valor máximo por operação é de R$ 700 reais
// Quando faço um saque no valor de R$ 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação


// --------------- Arrays --------------- //



// var gaveteiro = ['Meias', 'Gravatas', 'Pijamas', 'Documentos']


// console.log(gaveteiro[0])

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

console.log(typeof personagens)

console.log(personagens)

personagens.push('C3pO')
personagens.push('R2D2')

console.log(personagens)


personagens = personagens.filter(function (p) {
    return p !== 'Darth Vader'
})  //ignora um item especifico do array - nesse caso vai ignorar "Darth Vader" e não vai aparecer na lista




personagens = personagens.filter(function (p) {
    return p ===  'Mestre Yoda'
}) // filtrando pra retornar só o item da lista "Mestre Yoda"





console.log(personagens)




