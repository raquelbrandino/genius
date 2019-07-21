let azul = document.querySelector('.azul');
let vermelho = document.querySelector('.vermelho');
let verde = document.querySelector('.verde');
let amarelo = document.querySelector('.amarelo');

ordem = [];
ordemClicada = [];

let gerarOrdem =( ) =>{
  proximo = Math.floor(Math.random() * 4);
  ordem[ordem.length] = proximo;
  ordemClicada = [];
  for(let i in ordem){
    let elementoDiv = elemento(ordem[i]);
    acender(elementoDiv, Number(i) + 1);
  };
};

let acender = (elementoDiv, tempo) => {
  let tempo = tempo * 500;
  setTimeout(()=>{
    elementoDiv.classList.add("acenderSequencia");
  }, tempo - 250);
  setTimeout(()=>{
    elementoDiv.classList.remove("acenderSequencia");
  }, tempo);

}

let compararOrdem = ()=>{
  for(let i in ordemClicada){
      if(ordemClicada[i] != ordem[i]){
        perdeu();
        break;
      }
  };
  if(ordemClicada.length == ordem.length){
    alert("Parabens! Vamos continua!");
    proximo();
  }
};

let clicou = (cor) =>{
  ordemClicada[ordemClicada.length] = cor;
  elemento(cor).classList.add('selecionado');
  setTimeout(()=>{
    elemento(cor).classList.remove('selecionado');
    compararOrdem();
  }, 250);
}

let elemento = (cor) =>{
  if(cor == 0){
    return verde;
  }
  else if (cor == 1){
    return vermelho;
  }
  else if (cor == 2){
    return amarelo;
  }
  else if (cor == 3){
    return azul;
  }
};

let proximo = () =>{
  gerarOrdem();
};

let perdeu = () => {
  alert('Não foi dessa vez, tente novamente.');
  ordem = [];
  ordemClicada = [];
  iniciar();
}
let iniciar = () => {
  alert('Seja Bem vindo!, Vamos começar!');
  proximo();
}

verde.onclick = () => clicou(0);
vermelho.onclick = () => clicou(1);
amarelo.onclick = () => clicou(2);
azul.onclick = () => clicou(3);
iniciar();



