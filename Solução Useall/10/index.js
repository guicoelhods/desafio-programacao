//vetor
const vetor = [1, 2, 3, 3, 3, 4, 5, 6, 7];
// auxiliar para armazenas as variaveis já percorridas pelo vetor
var aux = [];
//inicializar a variavel que verifica se achamos um novo item como false
var found = false;
//percorrer o vetor
for (var i = 0; i < vetor.length; i++) {
    //se algo repetido já foi encontrado nós saimos fora do loop do for 
    if (found == true) break;
    //percorre o vetor auxiliar
    for (var j = 0; j < aux.length; j++) {
        //se algo repetido já foi encontrado nós saimos fora do loop do for 
        if (found == true) {
            console.log('Vetor tem valores repetidos');
            break;
        };
        // se o valor do vetor for igual a algum valor já percorrido nós 
        // colocamos nossa variavel como true
        if (vetor[i] == aux[j]) {
            found = true;
        };
    }
    //pra cada vez que percorremos um indice do vetor nós a armazenamos
    aux.push(vetor[i]);
}