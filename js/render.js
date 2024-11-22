const renderizarProdutos = () =>{
    const listaContainer = document.querySelector(".containerLista");

    listaContainer.innerHTML = listaProdutos
      .map(
        (item) => `
   <div class="item produto">
                        <img src=${item.img} alt="">
                        <h2>${item.produto}</h2>
                        <p>R$${item.valor},00</p>
                        <button onClick="enviarParaCarrinho(event)" class="adicionarCarrinho" data-id="${item.id}">Adicionar</button>
 </div>
    
    `
      )
      .join("");
}

renderizarProdutos()