//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha /2;

//Velocidade da Bolinha
let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

//Variáveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 85;
let bordaRaquete = 20;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();  
  movimentaBolinha();
  colideParede();
  raquete();
  movimentaRaquete();
  colideRaquete();
 
  }


function mostraBolinha(){ circle(xBolinha,yBolinha,diametroBolinha);
}

function raquete(){
rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete, bordaRaquete);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
}
}
  function colideRaquete(){
    if (xBolinha -raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha - raioBolinha > yRaquete - alturaRaquete){
      velocidadeXBolinha *= -1;
    }
  }

function colideParede(){
   if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0){
    velocidadeXBolinha *= -1;
  }

  if(yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1;
  
}
}