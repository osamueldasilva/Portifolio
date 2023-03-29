const divUsuario = document.getElementById("usuario");

// Exibe o prompt para o usuário
const nome = window.prompt("Qual seu nome?");

// Adiciona o valor da resposta na div
divUsuario.innerText = `Olá ${nome}, é um prazer receber você em meu portfólio, espero que goste.`;







function scrollToSection2() {
  document.querySelector('#section_2').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};



