const numero = Number(prompt(`digite um numero:`));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> <strong> Raiz quadrada: ${numero ** 0.5}</strong> </p>`;
texto.innerHTML += `<p> <strong>  ${numero} e inteiro ?: ${Number.isInteger(numero)}</strong> </p>`;
texto.innerHTML += `<p> <strong> E um NaN: ${Number.isNaN(numero)}</strong> </p>`;
texto.innerHTML += `<p> <strong> Arredondando pra baixo: ${Math.floor(numero)}</strong> </p>`;
texto.innerHTML += `<p> <strong> Arredondando pra cima: ${Math.ceil(numero)}</strong> </p>`;
texto.innerHTML += `<p> <strong> Duas casas decimais: ${numero.toFixed(2)}</strong> </p>`;

