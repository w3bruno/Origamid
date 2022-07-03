//Operador Rest
function showLista(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
showLista('Google', 'Bruno', 'Andre', 'Rafael');

//Operador Spread
const numeros = [10, 5, 20];
const numeros2 = [...numeros, 30, 40, 50];
const maior = Math.max(...numeros2);
console.log(maior);

const carro = {
  cor: 'Azul',
  portas: 4,
};

carroAno = {
  ...carro,
  ano: '2022',
};
console.log(carroAno);
console.log(carro);
