

// função do tempo de prova


function paddedFormat(num) {
    return num < 10 ? "0" + num : num;
}

function startCountDown(duration, element) {



    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) { clearInterval(countInterval) };


    }, 1000);
}

window.onload = function () {
    let time_minutes = 10; // Value in minutes
    let time_seconds = 0; // Value in seconds

    let duration = time_minutes * 60 + time_seconds;

    element = document.querySelector('#count-down-timer');
    element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;


    startCountDown(--duration, element);

    

    var timer = setTimeout(function() {
         // esse escript ele vai atualizar página quando chegar certo limite
        window.location='index.html'
        alert("Terminou limite de Prova");
    }, 601000); 
};            



//fim da função tempo de prova

function desistir(){
    alert("Que pena... Você Desistiu :-(");
}


function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i);
    });
}


const titulo = document.querySelector('.efeito');
typeWriter(titulo);

/////////////////////////////////////////////////////////

//estilo da pergunta 1

function pergunta1(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 12 * i);
    });
}

const perguntas1 = document.querySelector('.ss');
pergunta1(perguntas1);

/// estilo pergunta 2

/* Pra colocar o próximo efeito na pergunta apenas copiar e colar e mudar um script são os (nome da function, nome  da const,) */

function pergunta2(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 12 * i);
    });
}

const perguntas2 = document.querySelector('.ss1');
pergunta1(perguntas2);

//estilo de pergunta 3

function pergunta3(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 12 * i);
    });
}

const perguntas3 = document.querySelector('.ss2');
pergunta1(perguntas3);


//estilo de pergunta 4

function pergunta4(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 12 * i);
    });
}

const perguntas4 = document.querySelector('.ss3');
pergunta4(perguntas4);

//estilo de pergunta 5

function pergunta5(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 12 * i);
    });
}

const perguntas5 = document.querySelector('.ss4');
pergunta5(perguntas5);

//estilo de pergunta 6

function pergunta6(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 12 * i);
    });
}

const perguntas6 = document.querySelector('.ss5');
pergunta6(perguntas6);

//pergunta 7


function pergunta7(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 12 * i);
    });
}

const perguntas7 = document.querySelector('.ss5');
pergunta7(perguntas7);




