var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replaceAll(/e/g, "enter").replaceAll(/i/g, "imes").replaceAll(/a/g, "ai").replaceAll(/o/g, "ober").replaceAll(/u/g, "ufat")


  document.getElementById('output').innerHTML = '<textarea cols="60"  rows="10" readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replaceAll(/enter/g, "e").replaceAll(/imes/g, "i").replaceAll(/ai/g, "a").replaceAll(/ober/g, "o").replaceAll(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly cols="80"  rows="10" id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="padraoc" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-texto');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  