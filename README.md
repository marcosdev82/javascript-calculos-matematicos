# 📐 Métodos Estáticos do Objeto `Math` no JavaScript

O objeto `Math` fornece utilitários matemáticos poderosos e estáticos. Abaixo estão os métodos mais usados no desenvolvimento de aplicações JavaScript, com exemplos práticos e suas respectivas descrições.

---

## 🔢 Arredondamentos e Manipulação Numérica

| Método               | Descrição                                      | Exemplo                      |
|----------------------|-----------------------------------------------|------------------------------|
| `Math.abs(x)`        | Retorna o valor absoluto de `x`               | `Math.abs(-7)` → `7`         |
| `Math.ceil(x)`       | Arredonda `x` para cima                       | `Math.ceil(4.3)` → `5`       |
| `Math.floor(x)`      | Arredonda `x` para baixo                      | `Math.floor(4.9)` → `4`      |
| `Math.round(x)`      | Arredonda `x` para o inteiro mais próximo     | `Math.round(4.5)` → `5`      |
| `Math.trunc(x)`      | Remove os decimais de `x`                     | `Math.trunc(4.9)` → `4`      |
| `Math.sign(x)`       | Retorna o sinal de `x` (`-1`, `0`, `1`)       | `Math.sign(-5)` → `-1`       |

---

## 📊 Estatística

| Método               | Descrição                                      | Exemplo                         |
|----------------------|-----------------------------------------------|----------------------------------|
| `Math.max(...valores)` | Retorna o maior valor entre os argumentos   | `Math.max(3, 8, 1)` → `8`        |
| `Math.min(...valores)` | Retorna o menor valor entre os argumentos   | `Math.min(3, 8, 1)` → `1`        |

---

## 🧮 Operações Matemáticas

| Método               | Descrição                                      | Exemplo                         |
|----------------------|-----------------------------------------------|----------------------------------|
| `Math.pow(x, y)`     | Potência: `x` elevado a `y`                   | `Math.pow(2, 3)` → `8`          |
| `Math.sqrt(x)`       | Raiz quadrada de `x`                          | `Math.sqrt(9)` → `3`            |
| `Math.cbrt(x)`       | Raiz cúbica de `x`                            | `Math.cbrt(8)` → `2`            |

---

## 🎲 Aleatoriedade

| Método               | Descrição                                      | Exemplo                         |
|----------------------|-----------------------------------------------|----------------------------------|
| `Math.random()`      | Retorna um número pseudoaleatório entre 0 e 1 | `Math.random()` → `0.374...`    |

```js
// Exemplo: Número aleatório entre 1 e 10
const num = Math.floor(Math.random() * 10) + 1;
