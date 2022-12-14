function escopo() {
    const form = document.querySelector('.form')

    form.addEventListener('submit', enviarForm)

    function enviarForm(evento) {
        evento.preventDefault()

        const peso = document.querySelector('.peso')
        const altura = document.querySelector('.altura')
        const resultado = document.querySelector('.imc')

        resultado.innerHTML = ``

        if (peso.value <= 0 || altura.value <= 0) {
            console.log(`Erro: altura ou peso menores ou iguais a Zero`)
            resultado.innerHTML += `<p class="erro-imc">Erro: altura ou peso menores ou iguais a Zero</p>`
        } else {
            const imc = peso.value / (altura.value * altura.value)
            if (imc > 0 && imc < 18.5) {
                console.log(`IMC: ${imc.toFixed(2)}, MAGREZA`)
                resultado.innerHTML += `<p class="imc-ruim">IMC: ${imc.toFixed(2)}, MAGREZA</p>`
            } else if (imc >= 18.5 && imc <= 24.9) {
                console.log(`IMC: ${imc.toFixed(2)}, NORMAL`)
                resultado.innerHTML += `<p class="imc-bom">IMC: ${imc.toFixed(2)}, NORMAL</p>`
            } else if (imc >= 25 && imc <= 29.9) {
                console.log(`IMC: ${imc.toFixed(2)}, SOBREPESO`)
                resultado.innerHTML += `<p class="imc-ruim">IMC: ${imc.toFixed(2)}, SOBREPESO</p>`
            } else if (imc >= 30 && imc <= 39.9) {
                console.log(`IMC: ${imc.toFixed(2)}, OBESIDADE`)
                resultado.innerHTML += `<p class="imc-ruim">IMC: ${imc.toFixed(2)}, OBESIDADE</p>`
            } else if (imc >= 40) {
                console.log(`IMC: ${imc.toFixed(2)}, OBESIDADE GRAVE`)
                resultado.innerHTML += `<p class="imc-ruim">IMC: ${imc.toFixed(2)}, OBESIDADE GRAVE</p>`
            }else{
                console.log(`Erro: IMC menor ou igual a zero. Favor, rever altura e peso`)
                resultado.innerHTML += `<p class="erro-imc">Erro: IMC menor ou igual a zero. Favor, rever altura e peso</p>`
            }
        }

    }
}

escopo()