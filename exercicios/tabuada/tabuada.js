let btnShow   = document.querySelector(".btn-mostrar");
let btnClear  = document.querySelector(".btn-limpar");
let outputTab = document.querySelector(".container-tabuada");

function mostrarTabuada(){
    // Função que mostrará toda a tabuada dentro da div .- .-.
    let valueTab = parseInt(window.prompt("Digite o valor que deseja na tabuada: "));
    let msgInner = "";

    // For para fazer a tabuada .- .-.
    for(let i = 0; i <= 1000; i++){
        msgInner += `${i} x ${valueTab} = ${i * valueTab} <br>`;
    }

    // Obs: por questões de desempenho, nunca manipular diretamente o DOM .- .-.
    outputTab.innerHTML = msgInner;
}

function limparTabuada(){
    // Função que limpará toda a div .- .-.
    outputTab.innerHTML = "";
}

// Quando o botão mostrar tabuada for clicado, chamar a função mostrarTabuada() .- .-.
btnShow.addEventListener('click', () => {
    mostrarTabuada();
});

// Quando o botáo limpar tabuada for clicado, chamar a função limparTabuada() .- .-.
btnClear.addEventListener("click", () => {
    limparTabuada();
});