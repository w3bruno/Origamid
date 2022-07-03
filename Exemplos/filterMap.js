const precos = [
  'crédito',
  'Débito',
  'R$ 400',
  'R$ 200',
  'Contas a pagar',
  'Meus dados',
  'R$ 300',
];

const precosFiltro = precos.filter((preco) => preco.includes('R$'));
const precosAltera = precosFiltro.map((preco) =>
  Number(preco.replace('R$ ', '')),
);
console.log(precosFiltro);
console.log(precosAltera);
