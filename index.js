var participantes = ["Ana", "Bia", "Claudia", "Daniel", "Fernanda", "Gaby"];

function sortear() {
    var index = Math.floor(Math.random() * participantes.length);
    var resultado = document.getElementById("resultado");
    resultado.textContent = participantes[index];
}
