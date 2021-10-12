let arrayNumber = [];

function gerarNumeroAleatorio(max){
    return parseInt(Math.random() * max);
}

while(arrayNumber.length < 20){
    let randomNumber = gerarNumeroAleatorio(30);

    if(arrayNumber.indexOf(randomNumber) < 0){
        arrayNumber.push(randomNumber);
    }
}

arrayNumber.sort((a, b) => {
   return a - b;
});

console.log(arrayNumber);