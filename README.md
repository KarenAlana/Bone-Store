# Tutorial Completo: Construindo um Carrinho de Compras do Zero 🛒

Este repositório contém o código-fonte do tutorial onde você aprenderá a criar a lógica de um carrinho de compras do zero!  

## 🎥 Sobre o Tutorial
## Se você tiver dúvidas ou sugestões, comente no vídeo: https://youtu.be/h6BbOYguGRI
Neste vídeo, você vai acompanhar um **passo a passo completo**, começando com JavaScript puro e evoluindo para React, salvando dados no LocalStorage e conectando a um banco de dados MongoDB com um backend em Java.  

---

### 🚀 O que você vai aprender:  
1. Criar a lógica básica de um carrinho de compras usando **JavaScript puro**.  
2. Migrar essa lógica para **React**, aproveitando componentes e hooks.  
3. Salvar e recuperar dados localmente com **LocalStorage**.  
4. Conectar o projeto a um backend em **Java** e integrar com **MongoDB**.  

Esse tutorial é perfeito para quem deseja evoluir de projetos simples para aplicações completas, **unindo front-end e back-end** de forma prática e eficiente.  

---

### 📂 Estrutura do Repositório:  
- **/js**: Implementação básica em JavaScript puro.  
- **/react**: Versão do carrinho implementada em React.  
- **/server**: Backend desenvolvido em Java com integração ao MongoDB.  

---

### 📦 Pré-requisitos:
- **Node.js** e **npm/yarn** instalados para rodar o front-end React.  
- **Java JDK 21** ou superior para o backend.  
- **MongoDB** configurado (local ou em nuvem).  

---

### 🌟 Como rodar o projeto:

#### Etapa 1: Configurar o Front-end
1. Navegue até a pasta `react`.  
2. Instale as dependências com:  
     npm install
     npm start
3. Rota local3000/lg- Para acessar a pode ser salva no **LocalStorage**, use a URL `http://localhost:3000/lg` no navegador.
4. Rota local3000/mb- Para acessar a pode ser salva no **MongoDb Atlas**, use a URL `http://localhost:3000/mb` no navegador.


Etapa 2: Baixar e configurar o Back-end
1. Acesse o Spring Initializr
2. Configure o projeto com as seguintes opções:  
   - **Project:** Maven  
   - **Language:** Java  
   - **Spring Boot Version:** 3.1.0 ou superior  
   - **Dependencies:**  
     - Spring Boot DevTools  
     - Spring Web  
     - Spring Data MongoDB  

3. Clique em "Generate" para baixar o projeto gerado e extraia o arquivo ZIP.
4. Importe o projeto extraído para sua IDE favorita (IntelliJ IDEA, Eclipse ou VS Code).
5. Navegue até o arquivo `src/main/resources/application.properties` e configure a URI do MongoDB:
   ```properties
   spring.data.mongodb.uri=mongodb://seuUsuario:suaSenha@localhost:27017/suaDatabase

