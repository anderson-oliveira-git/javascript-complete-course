// Objeto criado da forma formal.- .-.
const pessoa = new Object();

// Forma literal de criar objeto.- .-.
let funcionario = {
    nome  : '',
    idade : 0,
    cpf   : 0,
    sexo  : ''
};

const produto = {
    nome: 'caneta',
    qtd: 20,
    comprar (n) {
        if(n > this.qtd){
            return console.log("não temos a quantidade solicitada");
        }
        this.qtd -= n;
    },
    teste2 () {
        console.log(this);
    }
}

// produto.comprar(15);
// console.log(produto.teste());
console.log(produto.teste2());