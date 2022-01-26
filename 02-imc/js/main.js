'use strict';

function camposValidos(){
    return document.getElementById('formulario').reportValidity();
}

function calcularImc (altura, peso){
    return peso/(altura * altura);
}

function classificarImc (imc){
    let texto;
    if(imc< 18.5){
        texto = ' e você está abaixo do peso.';
 } else if (imc < 25){
    texto = ' e você está com peso ideal. <div class= "verde"> Parabéns! </div> ';
 }else if (imc < 30){
    texto = ' e você está levemente acima do peso.' ;
 }else if (imc < 35){
    texto = ' e você está com obesidade grau I.';
 }else if (imc < 40){
    texto = ' e você está com obesidade grau II.';
 } else{
    texto = ' e você está com obesidade grau III. <div class= "vermelho">Cuidado!</div>';
 }
    return texto;
}

function mostrarResultado(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(camposValidos(nome, altura, peso)){
    const imc = calcularImc(altura, peso)  
    let texto =  classificarImc(imc);

    resultado.textContent = `${nome} seu imc é ${imc.toFixed(2)} ${texto}`;
  
 } else{
     resultado.textContent = 'Preecha todos os campos!!'
 }

}

document.getElementById('calcular').addEventListener('click' , mostrarResultado);