// Seleção
const form = document.getElementById("form");
const inputTamanho = document.getElementById("tamanho");
const opcoes = document.querySelectorAll(".opcoes");
const inputSenhaGerada = document.getElementById("senha-gerada");
const mensagemDeErro = document.getElementById("mensagem-de-erro");

const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMaiusculas = letrasMinusculas.toUpperCase();
const numeros = "0123456789";
const simbolos = "!@#$*";

// Funções
const verificarOpcoesMarcadas = (opcoes) => {
  if (
    !opcoes[0].checked &&
    !opcoes[1].checked &&
    !opcoes[2].checked &&
    !opcoes[3].checked
  ) {
    return true;
  }
};

// Eventos
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // se o tamanho estiver vazio
  if (inputTamanho.value === "") {
    inputTamanho.value = "8";
  }

  if (verificarOpcoesMarcadas(opcoes)) {
    mensagemDeErro.classList.remove("hidden");
    inputSenhaGerada.value = "";
  } else {
    mensagemDeErro.classList.add("hidden");
    inputSenhaGerada.value = "senha";
  }
});
