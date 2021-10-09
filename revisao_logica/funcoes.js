// Função convencional 
function teste() {
    console.log("Função convencional")
}

// Função expresion
let func = function(){
    return new Date().getFullYear();
}

console.log(func());

// Arrow functions
const arrow = () => {
    console.log("Arrow functions")
}

// Função que recebe parametros 
function funcParamenter(x, y){
    let soma = x + y;

    return soma;
}

console.log(funcParamenter(10, 22));

// Função com parametros padrões

function funcPadroes(x = 10, y = 3){
    let soma = x + y;
    return soma;
}

console.log(funcPadroes());