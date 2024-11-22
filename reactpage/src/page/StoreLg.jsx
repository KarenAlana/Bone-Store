import { useContext } from "react";
import {
  CarrinhoContext,
  CarrinhoFuncao,
} from "../components/Carrinho/CarrinhoFuncao.jsx";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ImageHome from "../components/ImageHome/ImageHome";
import Item from "../components/Item/Item.jsx";
import Carrinho from "../components/Carrinho/Carrinho.jsx";
import { listaProdutos } from "../lista.js";

const StoreLg = () => {
  const { carrinho, enviarParaCarrinho, total, limpar, atualizarQuantidade } =
    useContext(CarrinhoContext, CarrinhoContext);
  return (
    <>
      <Nav />
      <Header />
      <div className="containerPrincipal">
        <div className="containerLista">
          <Item
            listaProdutos={listaProdutos}
            enviarParaCarrinho={enviarParaCarrinho}
          />
        </div>
        <aside>
          <Carrinho
            carrinho={carrinho}
            total={total}
            limpar={limpar}
            atualizarQuantidade={atualizarQuantidade}
          />
          <ImageHome />
        </aside>
      </div>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <CarrinhoFuncao>
      <StoreLg />
    </CarrinhoFuncao>
  );
};

export default App;
