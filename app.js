// Função para criar um cartão com a categoria, pergunta e resposta
function criarCartao(categoria, pergunta, resposta) {
    // Obtendo o container onde os cartões serão inseridos
    let container = document.getElementById("container");

    // Criando o elemento do cartão
    let cartao = document.createElement("article");
    cartao.className = "cartao";  // Adicionando a classe ao cartão

    // Criando o conteúdo do cartão com HTML dinâmico
    cartao.innerHTML = `
        <div class="cartao_conteudo">
            <h3>${categoria}</h3>  <!-- Título do cartão -->
            <div class="cartao_conteudo_pergunta">
                <p>${pergunta}</p>  <!-- Pergunta -->
            </div>
            <div class="cartao_conteudo_resposta">
                <p>${resposta}</p>  <!-- Resposta -->
            </div>
        </div>
    `;

    // Adicionando o cartão ao container
    container.appendChild(cartao);
}

// Criando três cartões com dados de exemplo
criarCartao("Programação", "O que é o Javascript?", "O JavaScript é uma linguagem de programação");
criarCartao("Geografia", "Qual a capital da França?", "A capital da França é Paris");
criarCartao("Matemática", "O que é uma equação?", "Uma equação é uma igualdade matemática com uma ou mais incógnitas.");
