// ABRIR E FECHAR A CARTA

function abrirCarta() {

    const carta = document.querySelector(".carta");

    carta.classList.toggle("aberta");

}



// PERGUNTA 1

function resposta1(opcao) {

    const resposta = document.getElementById("resposta1");

    if (opcao === "sim") {

        resposta.innerHTML =
            "Eu sabia! ❤️ Você passou no primeiro teste.";

    } else {

        resposta.innerHTML =
            "Resposta inválida! Tente novamente ";

    }

}



// PERGUNTA 2

function resposta2(opcao) {

    const resposta = document.getElementById("resposta2");

    if (opcao === "sim") {

        resposta.innerHTML =
            "Ainda bem, porque eu também quero!";

    } else {

        resposta.innerHTML =
            "Essa opção não estava disponível";

    }

}



// PERGUNTA 3

function resposta3(opcao) {

    const resposta = document.getElementById("resposta3");

    if (opcao === "sim") {

        resposta.innerHTML =
            "Resposta correta. Você conhece sua namorada! 💗";

    } else {

        resposta.innerHTML =
            "Pense melhor antes de responder... ";

    }

}



// PERGUNTA 4

function resposta4(opcao) {

    const resposta = document.getElementById("resposta4");

    if (opcao === "sim") {

        resposta.innerHTML =
            "Eu também te amo muito muito!";

    } else {

        resposta.innerHTML =
            "Essa resposta foi considerada inválida ❤️";

    }

}