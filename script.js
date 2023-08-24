
/*
construindo a código de API
*/
fetch('https://fakestoreapi.com/products?limit=6')
    .then(function (retornoAPI) {               // chamando a API
        console.log('respostaAPI', retornoAPI) // visualizar como esta vindo a resposta da API

        retornoAPI.json()  // Tratando o retorno da API para visualizar os valores que eu preciso
            .then(function (retornoEmJson) {
                console.log('retornoJson', retornoEmJson) // Visualizando os valores retornado pela API


                // exemplo abaixo é inserindo o valor um a um
                // document.querySelector('#titulo').innerText = retornoEmJson[0].title
                // document.querySelector('#descricao').innerText = retornoEmJson[0].description

                // agora abaixo, irei pegar o valor por meio de loop, trazendo vários valores de uma vez só

                // for (let i = 0; i < retornoEmJson.length; i++){
                //  for (let i in retornoEmJson) exemplo abaixo é de forma reduzida o exemplo acima é outra maneira

                let cards = '';  /* -> criando variavel vazia, pq nela será inserido as divs de cards  */

                for (let i in retornoEmJson) {
                    // após o loop, será inserido os cards dentro da variável cards, e mantém a sequência e exibindo os cards 
                    cards += `  
                    <div>
                    <div class="row d-flex align-content-center justify-content-center">
                        <div class="col-6">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top01" src="${retornoEmJson[i].image}" alt="Processador Gamer"
                                    title="">  
                                <div class="card-body">
                                    <h2 class="card-title">${retornoEmJson[i].title}</h2>
                                    <p class="card-text">${retornoEmJson[i].description}</p>
                                    <a href="#" class="btn btn-primary">Visitar</a>
                                </div>
                            </div>
                        </div>
                    `
                }

                //aqui será exibido os cards, através da referncia citada via id = cards
                document.querySelector('#cards').innerHTML = cards;

            })


    })

