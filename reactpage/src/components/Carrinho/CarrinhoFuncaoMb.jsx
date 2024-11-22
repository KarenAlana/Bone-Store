import React, { useEffect, useState } from "react";
import {
  atualizarProduto,
  fetchProdutos,
  removerTodosProdutos,
  salvarProduto,
} from "../../service/apiService";
const CarrinhoContext = React.createContext();
const CarrinhoFuncaoMb = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    fetchProdutos().then((data) => setCarrinho(data));
  }, []);

  const enviarParaCarrinho = (produto) => {
    const itemCarrinho = carrinho.find((item) => item.id === produto.id);
    if (itemCarrinho) {
      const novaQuantidade = itemCarrinho.quantidade + 1;
      atualizarQuantidade(itemCarrinho.id, novaQuantidade);
    } else {
      const novoItem = { ...produto, quantidade: 1 };
      //   setCarrinho((prevCarrinho) => [...prevCarrinho, novoItem]);
      salvarProduto(novoItem)
        .then(() => {
          setCarrinho((prevCarrinho) => [...prevCarrinho, novoItem]);
        })
        .catch((error) => console.log(error));
    }
  };

  const atualizarQuantidadee = (id, quantidade) => {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.map((item) =>
        item.id === id ? { ...item, quantidade } : item
      )
    );
    if (quantidade === 0) {
      setCarrinho((prevCarrinho) =>
        prevCarrinho.filter((item) => item.id !== id)
      );
    }
  };

  const atualizarQuantidade = (id, quantidade) => {
    const produtoAtualizado = carrinho.find((item) => item.id === id);

    if (produtoAtualizado) {
      const produtoComQuantidadeAtualizada = {
        ...produtoAtualizado,
        quantidade,
      };
      atualizarProduto(id, produtoComQuantidadeAtualizada)
        .then(() => {
          setCarrinho((carrinhoAtual) =>
            carrinhoAtual.map((item) =>
              item.id === id ? { ...item, quantidade } : item
            )
          );
        })
        .catch((erro) => {
          console.error("Erro ao atualizar produto:", erro);
        });
    }
    if (quantidade === 0) {
      setCarrinho((prevCarrinho) =>
        prevCarrinho.filter((item) => item.id !== id)
      );
    }
  };

  const limpar = () => {
    setCarrinho([]) || removerTodosProdutos();
  };

  const total = () => {
    return carrinho.reduce(
      (acc, item) => acc + item.valor * item.quantidade,
      0
    );
  };

  return (
    <>
      <CarrinhoContext.Provider
        value={{
          carrinho,
          enviarParaCarrinho,
          total,
          limpar,
          atualizarQuantidade,
        }}
      >
        {children}
      </CarrinhoContext.Provider>
    </>
  );
};

export { CarrinhoFuncaoMb, CarrinhoContext };
