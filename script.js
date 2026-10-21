function calcularIMC() {
  var pesoTexto = document.getElementById("peso").value;
  var alturaTexto = document.getElementById("altura").value;
  var resultado = document.getElementById("resultado");

  var peso = parseFloat(pesoTexto);
  var altura = parseFloat(alturaTexto);

  resultado.style.display = "block";

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.className = "erro";
    resultado.innerHTML = "Erro: informe valores numéricos maiores que zero.";
    return;
  }

  var imc = peso / (altura * altura);

  var classificacao;
  var classeCor;

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
    classeCor = "abaixo";
  } else if (imc < 25) {
    classificacao = "Peso normal";
    classeCor = "normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
    classeCor = "sobrepeso";
  } else {
    classificacao = "Obesidade";
    classeCor = "obesidade";
  }

  resultado.className = classeCor;
  resultado.innerHTML =
    "<strong>IMC: " + imc.toFixed(2) + "</strong><br>" + classificacao;
}
 