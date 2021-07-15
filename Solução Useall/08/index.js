//criei um array com os número para o cálculo
const num = [6,4,10,7];

const media = (num.reduce(function(previous, currentValue){
    return previous + currentValue
}) / num.length).toFixed(2);

// Estou somando o anterior e o valor recorrente depois dividindo
//Usei toFixed() para arredondar com número específicos de casas decímais
console.log(media)

