// 1. Regra de Três (proporção direta)

// Útil para: porcentagem, conversões de escala, redimensionamento de elementos.

// // Ex: Se 200px representa 100%, quanto é 60%?
// let total = 200;
// let porcentagem = 60;

// let resultado = (total  porcentagem) / 100;
// console.log(resultado); // 120

// ---

// 2. Porcentagem

// Útil para: desconto, impostos, crescimento, progresso de barra.


// let preco = 150;
// let desconto = 20;

// let precoComDesconto = preco - (preco  desconto / 100);
// console.log(precoComDesconto); // 120


// ---

//  3. Distância entre dois pontos (usado em jogos, mapas, etc.)

// Fórmula: `√((x2 - x1)² + (y2 - y1)²)`


// let x1 = 2, y1 = 3;
// let x2 = 7, y2 = 8;

// let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// console.log(distancia); // ~7.07


// ---

//  4. Área de um círculo

// Fórmula: `A = π  r²`


// let raio = 5;
// let area = Math.PI  Math.pow(raio, 2);
// console.log(area); // ~78.54


// ---

//  5. Número aleatório em intervalo

// Útil para: sorteios, jogos, simulações.


// // Aleatório entre 1 e 100
// let aleatorio = Math.floor(Math.random()  (100 - 1 + 1)) + 1;
// console.log(aleatorio);


// ---

//  6. Fatorial

// Útil em: algoritmos, combinações, recursão.


// let n = 5;
// let fatorial = 1;
// while (n > 1) {
//   fatorial = n;
//   n--;
// }
// console.log(fatorial); // 120


// ---

//  7. Conversão de graus para radianos

// Útil para: rotacionar elementos, trigonometria, gráficos.


// let graus = 90;
// let radianos = graus  (Math.PI / 180);
// console.log(radianos); // 1.5707 (π/2)


// ---

//  8. Média aritmética

// Útil para: boletins, relatórios, gráficos.


// let notas = [8, 9.5, 7, 10];
// let media = notas.reduce((a, b) => a + b, 0) / notas.length;
// console.log(media); // 8.625


// ---

//  9. Arredondamentos


// let num = 3.75;
// console.log(Math.floor(num)); // 3 (pra baixo)
// console.log(Math.ceil(num));  // 4 (pra cima)
// console.log(Math.round(num)); // 4 (mais próximo)


// ---

//  10. Máximo e mínimo

// Útil para: validações, limites de valores, estatísticas.


// let valores = [15, 3, 42, 9];
// console.log(Math.max(...valores)); // 42
// console.log(Math.min(...valores)); // 3


//-------------------------------------------------------------

// 1. Regra de Três (proporção direta)

// Útil para: porcentagem, conversões de escala, redimensionamento de elementos.

// Ex: Se 200px representa 100%, quanto é 60%?
let total = 200;
let porcentagem = 60;

let resultado = (total * porcentagem) / 100;
console.log(resultado); // 120
 