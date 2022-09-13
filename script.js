//Exercício 1

const megaSena = [
  [1,3,5,7,9,11], //sorteio 1
  [0,2,4,6,8,10], //sorteio 2
  [4,8,12,18,22,26], //sorteio 3
  [5,10,15,20,25,30] //sorteio 4
]

// if(megaSena.length === 4){
//   for(let i = 0; i < megaSena.length; i++){
//     //console.log(`sorteio ${i+1} ${megaSena[i]}`)
//     let sorteio = `sorteio ${i+1}: `
//     for(let j=0; j < megaSena[i].length; j++){
//       sorteio += megaSena[i][j] + ", "
//       //console.log(megaSena[i][j])
//     }
//     console.log(sorteio)
//   }
// }else{
//   console.log(`É necessário alterar o número de itens do array.`)
// }

//for in e for of - o exemplo é igual ao de cima, entretanto com uma sintaxe mais curta.

// if(megaSena.length === 4){
//   for(let i in megaSena){
//     let sorteio = `sorteio ${Number(i)+1}: `
//     for(let j of megaSena[i]){
//       sorteio += j + ", "
//     }
//     console.log(sorteio)
//   }
// }else{
//   console.log(`É necessário alterar o número de itens do array.`)
// }

//Pratica guiada 4

const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

// for (let i in filmes){
//   console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)

//   for (let j in filmes[i].elenco.length){
//     console.log(`Tem no elenco ${filmes.elenco[i][j]}`)
//   }
// }

for (let i = 0; i < filmes.length; i++){
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)

  for (let j = 0; j < filmes[i].elenco.length; j++){
    console.log(`Tem no elenco ${filmes[i].elenco}`)
  }
}