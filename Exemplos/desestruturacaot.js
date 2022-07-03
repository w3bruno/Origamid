//Desestruturação

function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}
document.addEventListener('click', handleMouse);
//Exemplo1

const frutas = ['banana', 'uva'];
const [fruta1] = frutas;
console.log(fruta1);
//Exemplo2

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(3));
//Exemplo3
