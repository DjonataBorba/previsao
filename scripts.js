

const key = "1fc26fcfc47ab491570311e1c50c4dd7"

function ColocarDadosNaTela(dados){
    console.log(dados)
 document.querySelector(".cidade").innerHTML ="Tempo em " + dados.name
 document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "C°"
 document.querySelector(".previsao").innerHTML = dados.weather[0].description
 document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
 document.querySelector(".img-previsao").src = ``
}

  async function buscarCidade(cidade){
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    ColocarDadosNaTela(dados)
  }

function cliqueinobotao(){
        const cidade = document.querySelector(".input-cidade").value

        buscarCidade(cidade)
    }