let botaoAzul = document.querySelector('#azul');
let botaoVermelho = document.querySelector('#vermelho');
let botaoVerde = document.querySelector('#verde');
let botaoAmarelo = document.querySelector('#amarelo');

let todosBotoes = [botaoAmarelo, botaoAzul, botaoVerde, botaoVermelho];


function criarSequencia(todosBotoes) {
  
  let valor_temporario;
  let indice_aleatorio;

  for (let i = todosBotoes.length - 1; i !== 0; i--) {
    indice_aleatorio = Math.floor(Math.random() * i);

    valor_temporario = todosBotoes[i];
    todosBotoes[i] = todosBotoes[indice_aleatorio];
    todosBotoes[indice_aleatorio] = valor_temporario;
  }
  return todosBotoes;
};

let acenderBotao = setTimeout(function acender(){
  todosBotoes.classList.add('acenderSequencia');
}, 3000);

for( botao of todosBotoes){
  let sequencia = todosBotoes[botao];
  acenderBotao = sequencia;
};