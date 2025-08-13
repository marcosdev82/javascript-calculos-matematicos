
// Exercício: Calculando Frete com Base na Distância

// Você está desenvolvendo um sistema de cálculo de frete para entregas. O valor do frete é calculado com base na **distância em quilômetros entre o armazém e o cliente**, e você precisa:

// 1. Garantir que a distância seja sempre positiva usando `Math.abs()`.
// 2. Arredondar **para cima** o número de quilômetros com `Math.ceil()`, já que o sistema cobra por **quilômetro completo**.
// 3. Calcular o valor final do frete considerando **R\$ 2,50 por quilômetro**.

// ---

// Regras:

// * Distância pode ser recebida como valor positivo ou negativo (ex: GPS pode retornar -8.3 km por erro).
// * O sistema cobra por cada km inteiro (mesmo que a distância seja 3.1 km, será cobrado como 4 km).
// * O valor por km é R\$ 2,50.

// ---

// emplo de entrada:

// ```js
// const distancia = -8.3; // distância fornecida pelo GPS
// ```

// ---

// Saída esperada:

// ```js
// Distância considerada: 9 km
// Valor total do frete: R$ 22.50
// ```

// ---

// Código base para o aluno completar:

// ```js
// const precoPorKm = 2.5;
// const distanciaInformada = -8.3;

// // 1. Use Math.abs() para tornar a distância positiva
// const distanciaPositiva = // ...

// // 2. Use Math.ceil() para arredondar para cima
// const distanciaFinal = // ...

// // 3. Calcule o valor total do frete
// const valorFrete = // ...

// console.log(`Distância considerada: ${distanciaFinal} km`);
// console.log(`Valor total do frete: R$ ${valorFrete.toFixed(2)}`);
// ```

// --------------------------------------------------------------

// emplo de entrada:


const distancia = -8.3; // distância fornecida pelo GPS

const distanciaInformada = Math.ceil(Math.abs(distancia))
const valorFrete = distanciaInformada * 2.50
console.log(`Distância considerda: ${distanciaInformada} km`)
console.log(`Valor total do frete: R$ ${valorFrete.toFixed(2)}`);





