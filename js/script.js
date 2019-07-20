let Botaoazul = document.querySelector('#azul');
let Botaovermelho = document.querySelector('#vermelho');
let Botaoverde = document.querySelector('#verde');
let Botaoamarelo = document.querySelector('#amarelo');

let botoes = [Botaoazul, Botaovermelho, Botaoverde, Botaoamarelo]

function embaralhar(botoes) {
    let valor_temporario;
    let indice_aleatorio;
  
    for (let i = botoes.length - 1; i !== 0; i--) {
      indice_aleatorio = Math.floor(Math.random() * i);
  
      valor_temporario = botoes[i];
      botoes[i] = botoes[indice_aleatorio];
      botoes[indice_aleatorio] = valor_temporario;
    }
    return botoes;
  };
  
console.log(embaralhar(botoes));