function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Valor em real é de: R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
//git remote add origin https://github.com/NathanFreitass/Conversor-de-moedas.git//
//git add --all//
//git commit -m "Initial commit"
//git push origin main
