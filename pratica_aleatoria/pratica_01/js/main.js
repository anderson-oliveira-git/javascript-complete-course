let inputName  = document.querySelector('.name');
let inputCpf   = document.querySelector('.cpf');
let dateH2     = document.querySelector('.date');
let btnProcess = document.querySelector('.btnProcess');

function dateProcess(){
    let msg = `Meu nome é ${inputName.value} e meu cpf é ${inputCpf.value}`;
    dateH2.innerHTML = msg;
}

btnProcess.addEventListener('click', () => {
    dateProcess();
});


