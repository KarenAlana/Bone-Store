let carrinho = JSON.parse(localStorage.getItem("localCarrinho")) || []


const salvarCarrinho =  () =>{
    localStorage.setItem("localCarrinho", JSON.stringify(carrinho))
}

const enviarParaCarrinho = (event) => {
  const itemId = Number(event.target.getAttribute("data-id"));
  const item = listaProdutos.find((item) => item.id === itemId);
  const itemCarrinho = carrinho.find((item) => item.id === itemId);

  if (itemCarrinho) {
    itemCarrinho.quantidade++;
  } else {
    carrinho.push({ ...item });
  }
//   console.log(carrinho);

  renderizarCarrinho();
  total();
salvarCarrinho()
};

const renderizarCarrinho = () => {
  const containerCarrinho = document.querySelector(".carrinhoLista");
  containerCarrinho.innerHTML = carrinho.map(
    (item) => `
    <div class="carrinhoLista">     
        <div class="produtoCart">
          <img class="imgProduto" src=${item.img} alt="" />
          <div id="carrinhoProduto">
            <div class="nomeProduto">${item.produto}</div>
            <div class="item-carrinho">
              <p id="valorCart">R$ ${item.valor.toFixed(2)}</p>
             <div class="controles-carrinho">
                              <button onClick="atualizarQuantidade(event)" class="maisCarrinho" data-id="${
                                item.id
                              }">+</button>
                              ${item.quantidade}
                              <button  onClick="atualizarQuantidade(event)" class="menosCarrinho" data-id="${
                                item.id
                              }">-</button>
              </div>
            </div>
          </div>
        </div>     
    </div>
    
    `
  ).join("")
};
renderizarCarrinho()
const atualizarQuantidade = (event) => {
  const itemId = Number(event.target.getAttribute("data-id"));
  const itemCarrinho = carrinho.find((item) => item.id === itemId);
  if (event.target.classList.contains("maisCarrinho")) {
    itemCarrinho.quantidade++;
  } else {
    itemCarrinho.quantidade--;
    if (itemCarrinho.quantidade === 0) {
      carrinho = carrinho.filter((item) => item.id !== itemId);
    }
  }
  console.log(carrinho);
  renderizarCarrinho();
  total();
   salvarCarrinho();
};

const total = () => {
  const total = carrinho.reduce(
    (acc, item) => acc + item.valor * item.quantidade, 0
  );

  console.log(total);
  const totalContainer = document.querySelector(".total");

  totalContainer.innerHTML = `Total : R$ ${total.toFixed(2)}`;
};

total();

const limpar = () => {
  carrinho = [];
  renderizarCarrinho();
};
