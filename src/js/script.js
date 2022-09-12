// Seleção
const form = document.getElementById("form");
const inputTamanho = document.getElementById("tamanho");
const opcoes = document.querySelectorAll(".opcoes");
const inputSenhaGerada = document.getElementById("senha-gerada");
const mensagemDeErro = document.getElementById("mensagem-de-erro");
const btnCopiar = document.getElementById("btn-copiar");
const msgSenhaCopiada = document.getElementById("msg-copiar-senha");

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

  let caracteresAleatorios = "";

  // se o tamanho estiver vazio
  if (inputTamanho.value === "") {
    inputTamanho.value = "8";
  }

  if (verificarOpcoesMarcadas(opcoes)) {
    mensagemDeErro.classList.remove("hidden");
    inputSenhaGerada.value = caracteresAleatorios;
  } else {
    mensagemDeErro.classList.add("hidden");
    if (opcoes[0].checked) {
      // maiúsculas
      for (var i = 0; i < 26; i++) {
        caracteresAleatorios += letrasMaiusculas.charAt(
          Math.floor(Math.random() * 26)
        );
      }
    }
    if (opcoes[1].checked) {
      // minúsculas
      for (var i = 0; i < 26; i++) {
        caracteresAleatorios += letrasMinusculas.charAt(
          Math.floor(Math.random() * 26)
        );
      }
    }
    if (opcoes[2].checked) {
      // números
      for (var i = 0; i < 10; i++) {
        caracteresAleatorios += numeros.charAt(Math.floor(Math.random() * 10));
      }
    }
    if (opcoes[3].checked) {
      // símbolos
      for (var i = 0; i < 5; i++) {
        caracteresAleatorios += simbolos.charAt(Math.floor(Math.random() * 5));
      }
    }

    let senha = "";

    for (var i = 0; i < caracteresAleatorios.length; i++) {
      senha += caracteresAleatorios.charAt(
        Math.floor(Math.random() * caracteresAleatorios.length)
      );
    }
    inputSenhaGerada.value = senha.slice(0, inputTamanho.value);
  }
});

btnCopiar.addEventListener("click", (e) => {
  e.preventDefault();

  if(inputSenhaGerada.value === "") {
    msgSenhaCopiada.innerText = "Não há nada para copiar :(";
    msgSenhaCopiada.classList.remove("copiada");
    msgSenhaCopiada.classList.add("erro");
  } else {
    navigator.clipboard.writeText(inputSenhaGerada.value);
    msgSenhaCopiada.innerText = "Senha copiada com sucesso!";
    msgSenhaCopiada.classList.remove("erro");
    msgSenhaCopiada.classList.add("copiada");
  }
})