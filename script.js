const btn = document.querySelector("#enviar")

btn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.querySelector("#nome")
    const peso = document.querySelector("#peso")
    const altura = document.querySelector('#altura')
    const visor = document.querySelector("#visor")


    const valueName = name.value
    const valuePeso = peso.value
    const valueAltura = altura.value

    const alturaFinal = altura.value / 100
    const pesoFinal = Number(peso.value)

    const result = pesoFinal / (alturaFinal * alturaFinal)
    const resultado = result.toFixed(2)
  
    let classificacao = ""

    if (result < 16) {
        classificacao = 'Baixo peso muito grave';

    } else if (result >= 16 && result <= 16.99) {
        classificacao = 'Baixo peso, grave';

    } else if (result >= 17 && result <= 18.49) {
        classificacao = 'Baixo peso';

    } else if (result >= 18.50 && result <= 24.99) {
        classificacao = 'Peso normal';

    } else if (result >= 25 && result <= 29.99) {
        classificacao = 'Sobrepeso';

    } else if (result >= 30 && result <= 34.99) {
        classificacao = 'Obesidade grau I';

    } else if (result >= 35 && result <= 39.99) {
        classificacao = 'Obesidade grau II';

    } else {
        classificacao = 'Obesidade grau III'
    }

    
    const window = visor.textContent
    visor.textContent = `Olá ${valueName}, o resultado do seu imc é: ${resultado}. Classificação: ${classificacao}`

    name.value = ""
    altura.value = ""
    peso.value = ""
})
