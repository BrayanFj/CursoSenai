alert("Bem vindo ao sistema!")


let nome = prompt("insira seu nome")
let nota1 = (prompt("insira a primeira nota"))
let nota2 =(prompt("insira a segunda nota"))  
let nota3 = (prompt("Insira a terceira nota"))

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

if  (media >= 6)
{
    alert("nome do aluno:" + nome + "\n" + "\nSuas notas foram:\n" + nota1 +  "\n" + nota2 + "\n" + nota3 + "\n" + "sua a media final é: " + media + "\n" + "\nvoce passou de ano!! parabens")
  
} else{
    alert("nome do aluno:" + nome + "\nSuas notas foram:\n" + nota1 +  "\n" + nota2 + "\n" + nota3 + "\n" + "sua a media final é: " + media  + "\n" + "\nvoce reprovou")

}

alert("Finalizando programa")