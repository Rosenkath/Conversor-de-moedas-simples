

let botao = document.getElementById("button");
let select = document.getElementById("select-moedas");

//realiza a conversão 
async function convertermoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(valores){
        return valores.json()
    })
    let dolar = moedas.USDBRL.high 
    let euro = moedas.EURBRL.high

    console.log(dolar)
    console.log(euro)




  let inputvaloremReal = Number(document.getElementById("input").value);
  let inputmoedas = document.getElementById("Input-moedas");
  let textoReal = document.getElementById("texto-Real");

  if (select.value === "$ - Dolar Americano") {
    let Valoremdolar = inputvaloremReal / dolar;

    inputmoedas.innerHTML = Valoremdolar.toLocaleString("en-us", {
      style: "currency",
      currency: "USD",
    });
  }

  if (select.value === "€ - Euro") {
    let valoremeuro = inputvaloremReal / euro;
    inputmoedas.innerHTML = valoremeuro.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    });
  }

  textoReal.innerHTML = inputvaloremReal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
//função responsável por trocar a bandeira e o nome das moedas
function trocademoeda() {
  let textomoedas = document.getElementById("texto-moedas");
  let bandeiras = document.getElementById("bandeira-moeda");

  if (select.value === "$ - Dolar Americano") {
    textomoedas.innerHTML = "Dolar Americano";
    bandeiras.src = "Imagens/EUA.png";
  }

  if (select.value === "€ - Euro") {
    textomoedas.innerHTML = "Euro";
    bandeiras.src = "Imagens/Euro.png";
  }
  convertermoedas()
}

botao.addEventListener("click", convertermoedas);
select.addEventListener("change", trocademoeda);
