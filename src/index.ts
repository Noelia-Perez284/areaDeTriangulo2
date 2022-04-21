// Realice un programa que devuelva el área del
// triangulo usando los siguientes pares de base-altura:
// • (1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
// • Implemente un método llamado calcularAreaTriangulo
// que reciba dos números por parámetro (uno llamado
// base y otro altura)

function calcularArea(base: number, altura: number): number {
  let area: number = (base * altura) / 2;
  return area;
}

for (let i = 1; i <= 7; i++) {
  let area = calcularArea(i, i * 2);
  console.log(area);
}

//¿Y si seguimos la serie numérica hasta 100?

//for (let i = 1; i <=100; i++) {
//   let area = calcularArea(i, i * 2);
//   console.log(area);
// }
