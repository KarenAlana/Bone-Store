import axios from "axios";

import { BASE_URL } from "../config.js";

export const fetchProdutos = () =>
  axios.get(`${BASE_URL}/produtos`).then((response) => response.data);

export const salvarProduto = (produto) =>
  axios
    .post(`${BASE_URL}/produtos`, produto, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);

export const atualizarProdudoo = (id, quantidade) =>
  axios
    .put(`${BASE_URL}/produtos/${id}`, quantidade, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);

export const atualizarProduto = (_id, produto) => {
  return axios
    .put(`${BASE_URL}/produtos/${produto._id}`, produto, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const removerTodosProdutos = () => axios.delete(`${BASE_URL}/produtos`);
