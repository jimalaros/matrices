const math = require('mathjs')

const generarMatriz = (n) => {
    let max = 9;
    let min = 0;
    let longitud = n*n;
    let filas = n;
    let columnas = n;

    let matrizFila = new Array(longitud);
    //i = filas y j = columnas
    for(let i=0;i<filas;i++){
        matrizFila[i] = new Array();
        for(let j=0;j<columnas;j++){
            matrizFila[i][j]=Math.trunc(Math.random() * (max - min) + min);
        }
    }

    let numeros = matrizFila.filter(function (numero) {
        return numero != null;
    });

    return numeros;
}

const generarTranspuesta = (n) => {
    const resultado = generarMatriz(n);

    let transformacion = math.matrix(resultado);

    let matriz = transformacion._data;
    let matrizTranspuesta = math.transpose(matriz);

    return "Matriz: " + matriz + " Transpuesta: " + matrizTranspuesta;
}
    
module.exports = { generarMatriz, generarTranspuesta }