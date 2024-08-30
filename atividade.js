document.addEventListener("DOMContentLoaded", () => {
   
    const botaoCalcular = document.getElementById("calcularNota");

  
    function calcularNota() {
        alert("Bem-vindo ao sistema!");

        let nome = prompt("Insira seu nome");
        let nota1 = prompt("Insira a primeira nota");
        let nota2 = prompt("Insira a segunda nota");
        let nota3 = prompt("Insira a terceira nota");

        let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

        if (media >= 6) {
            alert("Nome do aluno: " + nome + "\n" + "\nSuas notas foram:\n" + nota1 + "\n" + nota2 + "\n" + nota3 + "\n" + "Sua média final é: " + media + "\n" + "\nVocê passou de ano! Parabéns");
        } else {
            alert("Nome do aluno: " + nome + "\nSuas notas foram:\n" + nota1 + "\n" + nota2 + "\n" + nota3 + "\n" + "Sua média final é: " + media + "\n" + "\nVocê reprovou");
        }

        alert("Finalizando programa");
    }

    
    botaoCalcular.addEventListener("click", calcularNota);
});
