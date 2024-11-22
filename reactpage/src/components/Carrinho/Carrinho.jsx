
const Carrinho = ({carrinho, total,limpar,atualizarQuantidade}) => {
  return (
    <>
      <div className="carrinhoContainer">
        <div className="limparCarrinho" onClick={limpar}>
          Limpar Carrinho
        </div>
        {carrinho.map((item) => (
          <div key={item.id} className="carrinhoLista">
            <div className="produtoCart">
              <img className="imgProduto" src={item.img} alt="" />
              <div id="carrinhoProduto">
                <div className="nomeProduto">{item.produto}</div>
                <div className="item-carrinho">
                  <p id="valorCart">R$ {item.valor.toFixed(2)}</p>
                  <div className="controles-carrinho">
                    <button
                      onClick={() =>
                        atualizarQuantidade(item.id, item.quantidade + 1)
                      }
                      className="maisCarrinho"
                    >
                      +
                    </button>
                    {item.quantidade}
                    <button
                      onClick={() =>
                        atualizarQuantidade(item.id, item.quantidade - 1)
                      }
                      className="menosCarrinho"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="total">Total: {total().toFixed(2)}</div>
      </div>
    </>
  );
};

export default Carrinho;
