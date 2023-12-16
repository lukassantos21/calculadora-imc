const btn = document.querySelector("#enviar")

btn.addEventListener("click", (event) => {
        event.preventDefault();

        const name = document.querySelector("#nome");
        const peso = document.querySelector("#peso");
        const altura = document.querySelector('#altura');
        const visor = document.querySelector("#visor");
        const msgError = document.querySelector(".error")


        const valueName = name.value;
        const valuePeso = peso.value;
        const valueAltura = altura.value;

        if(valueName === "" || valuePeso === "" || valueAltura === ""){
            const style = msgError.style.padding = "1rem 1rem";
            const msgForm = msgError.textContent;            
            msgError.textContent = "Preencha todos os campos do formulário por favor!";
            
            const window = visor.textContent;
            visor.textContent = ""


            return
        }

        const alturaFinal = altura.value / 100;
        const pesoFinal = Number(peso.value);

        const result = pesoFinal / (alturaFinal * alturaFinal);
        const resultado = result.toFixed(2);

        let classificacao = "";

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
            classificacao = 'Obesidade grau III';
        }

        const visorPadding = visor.style.padding = "1rem 4%s";
        const window = visor.textContent;
        visor.textContent = `Olá ${valueName}, o resultado do seu imc é: ${resultado}, Classificação: ${classificacao}`;

        name.value = "";
        altura.value = "";
        peso.value = "";

    })
