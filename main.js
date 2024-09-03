// High order functions(Reduce,sort,map,filter,foreach)

const carros = [
  {
    id: "1",
    marca: "Ferrari",
    preco: 10000,
  },
  {
    id: "2",
    marca: "Mercedes",
    preco: 30000,
  },
  {
    id: "3",
    marca: "BMW",
    preco: 450000,
  },
];

console.log(
  carros.reduce((acc, car) => {
    return acc + car.preco;
  }, 0)
);

const letras = ["e", "f", "g", "a", "d", "c", "b"];
console.log(letras.sort());
const numerosDesordenados = [2, 5, 3, 1, 4, 6];
console.log(
  numerosDesordenados.sort((a, b) => {
    return a - b;
  })
);
console.log(carros.map((car) => car.marca));
console.log(carros.filter((car) => car.preco > 10000));
carros.forEach((car) => {
  console.log(car.preco.toFixed(2));
});
// Array
const videoGames = ["Switch", "PS4", "XBOX"];
for (let game of videoGames) {
  console.log(game);
}
videoGames.forEach((game, index, array) => {
  console.log(game + " - " + index);
});
// Objetos

const pessoa = {
  nome: "GUSTAVO",
  idade: 19,
};

for (let person in pessoa) {
  console.log(pessoa[person]);
}
