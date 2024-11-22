// import React, { useEffect, useState } from "react";
// const CarrinhoContext = React.createContext();
// const CarrinhoFuncao = ({ children }) => {
//   const [carrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem("localCarrinho")) || []);

//   useEffect(()=>{
//     localStorage.setItem("localCarrinho", JSON.stringify(carrinho));
//   },[carrinho])

//   const enviarParaCarrinho = (produto) => {
//     const itemCarrinho = carrinho.find((item) => item.id === produto.id);
//     if (itemCarrinho) {
//       const novaQuantidade = itemCarrinho.quantidade + 1;
//       atualizarQuantidade(itemCarrinho.id, novaQuantidade);
//     } else {
//       const novoItem = { ...produto, quantidade: 1 };
//       setCarrinho((prevCarrinho) => [...prevCarrinho, novoItem]);
//     }
//   };

//   const atualizarQuantidade = (id, quantidade) => {
//     setCarrinho((carrinhoAtual) =>
//       carrinhoAtual.map((item) =>
//         item.id === id ? { ...item, quantidade } : item
//       )
//     );
//     if (quantidade === 0) {
//       setCarrinho((prevCarrinho) =>
//         prevCarrinho.filter((item) => item.id !== id)
//       );
//     }
//   };

//   const limpar = () => {
//     setCarrinho([]);
//   };

//   const total = () => {
//     return carrinho.reduce(
//       (acc, item) => acc + item.valor * item.quantidade,
//       0
//     );
//   };

//   return (
//     <>
//       <CarrinhoContext.Provider
//         value={{
//           carrinho,
//           enviarParaCarrinho,
//           total,
//           limpar,
//           atualizarQuantidade,
//         }}
//       >
//         {children}
//       </CarrinhoContext.Provider>
//     </>
//   );
// };

// export { CarrinhoFuncao, CarrinhoContext };
