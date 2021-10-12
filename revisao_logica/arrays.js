// Formas de criar arrays em javascript.- .-.

// Formal
// Utilizado geralmente quando não se sabe a quantidade de itens.- .-. 
let arrayFormal = new Array();

// Literal
// Geralmente utilizado quando se tem o valor de items pré determinado.- .-.
let arrayLitereal = [];

let nomes = ['maria', 'joao', 'jose', 'anderson'];

// Objeto criado na forma literal.- .-.
let pessoa = {
    nome  : 'Anderson',
    idade : 29,
    cpf   : '115.118.284-20',
    sexo  : 'M'
};

// Iterando arrays com o for in.- .-.
console.log('[array com for in]');
for(let n in nomes){
    console.log(nomes[n]);
}

// Iterando arrays com o for normal.- .-.
console.log('[array com for normal]');
for(let index = 0; index <= nomes.length; index++){
    console.log(nomes[index]);
}

// Iterando arrays com o foreach.- .-.
console.log('[array com foreach]');
nomes.forEach(element => {
    console.log(element);
});

// Iterando com objetos.- .-.
// No caso de objetos, a viariavel prop recebe a variavel dentro do objeto que recebe o dado.- .-.
for(let prop in pessoa){
    console.log(pessoa[prop]);
}
