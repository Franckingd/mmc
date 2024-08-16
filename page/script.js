const N1 = document.getElementById("primeiro")
const N2 = document.getElementById("segundo")
const BtnCalcular = document.getElementById("btnCalcular")
const textResultado = document.getElementById("resultado")

function mmc(n1, n2){
    var resto, x, y
      x = n1
      y = n2
      while(resto != 0){
        resto = x % y
        x = y
        y = resto
      }
      return (n1 * n2) / x
}

BtnCalcular.addEventListener("click", function (){
    let resultadoMMC = 0
    let valorN1 = N1.value
    let valorN2 = N2.value
    if (valorN1 == 0 || valorN2 == 0){
        alert("campo vazio")
    }else{
        resultadoMMC = mmc(valorN1, valorN2)
        textResultado.textContent = "Resultado: " + resultadoMMC
    }
})

