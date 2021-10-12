const pessoas = [{
    nome: 'anderson',
    idade: 29
}, {
    nome: 'jussara',
    idade: 27
}, {
    nome: 'juliano',
    idade: 24
}, {
    nome: 'jennifer',
    idade: 25
}]

for(let index in pessoas){
    console.log(pessoas[index].nome + ' tem ' + pessoas[index].idade + ' anos.');
}