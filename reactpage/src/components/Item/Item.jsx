const Item = ({ listaProdutos, enviarParaCarrinho }) => {
  return (
    <>
      {listaProdutos.map((item) => (
        <div key={item.id} className="item produto">
          <img src={item.img} alt="" />
          <h2>{item.produto}</h2>
          <p>R${item.valor},00</p>
          <button
            onClick={()=>enviarParaCarrinho(item)}
            className="adicionarCarrinho"
            data-id="{item.id}"
          >
            Adicionar
          </button>
        </div>
      ))}
    </>
  );
};

export default Item;
