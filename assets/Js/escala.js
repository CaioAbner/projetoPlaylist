const btn_criar_escala = document.querySelector("#novaEscalaBtn");
const container_escalas = document.querySelector("#container-escalas");

// function criarEscala() {
//   const escala = {
//     nome: document.querySelector('#nomeEscala').value,
//     data: document.querySelector('#dataEscala').value,
//     horario: document.querySelector('#horarioEscala').value
//   };
//   if (escala.nome && escala.data && escala.horario) {
//     container_escalas.appendChild(escala)
//   } else {
//     alert('Preencha todos os campos para criar a escala.');
//   }
// }

const escalas = JSON.parse(localStorage.getItem("escalas-louvor")) || [];

function exibirEscalas() {
  if (escalas) {
    escalas.forEach((escala_da_vez) => {
      container_escalas.appendChild(escala_da_vez);
    });
  } else {
    alert('Você precisa criar uma escala para exibi-la.');
  }
}

btn_criar_escala.addEventListener('click', () => {
  window.location.href = 'nova-escala.html'
})

exibirEscalas();