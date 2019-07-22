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
  tempo = tempo * 1000;
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
    alert("Parabéns! Vamos continuar!");
    gerarOrdem();
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

let perdeu = () => {
  alert('Não foi dessa vez, tente novamente.');
  ordem = [];
  ordemClicada = [];
  iniciar();
}
let iniciar = () => {
  alert('Seja bem-vindo! Vamos começar!');
  gerarOrdem();
}

function contadorTempo(op) {
	let s = 1;
	let m = 0;
  let h = 0;
  
	intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) document.getElementById("hora").innerHTML = "0" + h + "h"; else document.getElementById("hora").innerHTML = h + "h";
		if (s < 10) document.getElementById("segundo").innerHTML = "0" + s + "s"; else document.getElementById("segundo").innerHTML = s + "s";
		if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + "m"; else document.getElementById("minuto").innerHTML = m + "m";		
		s++;
	},1000);
}

window.onload = contadorTempo();
verde.onclick = () => clicou(0);
vermelho.onclick = () => clicou(1);
amarelo.onclick = () => clicou(2);
azul.onclick = () => clicou(3);
iniciar();