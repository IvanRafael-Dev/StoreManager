# Boas vindas projeto Store Manager!

Através dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`).

Foi utilizado o MongoDB para a gestão de dados. Além disso, a API é RESTful.

⚠️ **Notas Importantes** ⚠️:

- É possível que a pessoa usuária, independente de cadastramento ou login, possa adicionar, ler, deletar e atualizar produtos no seu estoque. O usuário deve poder também enviar vendas para o sistema. Essas vendas devem validar se o produto em questão existe. Deve, também, ser possível ler, deletar e atualizar vendas.

- Para **todos os endpoints**:

  - Caso o recurso não seja encontrado, a API retorna o status HTTP adequado com o body `{ message: '<recurso> não encontrado' }`.
  - Em caso de erro, a API retorna o status HTTP adequado com o body `{ err: { message: <mensagem de erro>, code: <código do erro> } }`.
  - Em caso de dados inválidos, a API retorna o status HTTP adequado, com o body `{ err: { message: 'Dados inválidos', code: <código do erro> } }`.
  - Todos os retornos seguem o mesmo formato.

- O projeto utiliza o **express-rescue** [express-rescue](https://www.npmjs.com/package/express-rescue), para o trabalho de tratamento de erros.
  - Todos os end-ponts utilizam o *Rescue*


# Sumário
  - `Através da API é possível:`

    - 1 - O cadastro de produtos
    - 2 - GET em /products para listar os produtos
    - 3 - PUT em /products para atualizar um produto
    - 4 - DELETE em /products para deletar um produto
    - 5 - POST em /sales para cadastrar vendas
    - 6 - GET em /sales para listar as vendas
    - 7 - PUT em /sales para atualizar uma venda
    - 8 - DELETE em /sales para deletar uma venda
    
---

# Aprendizados

Através deste projeto, foi possível:
- Entender o funcionamento da camada de Model;
- Delegar responsabilidades específicas para essa camada;
- Conectar sua aplicação com diferentes bancos de dados;
- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada parte do seu app;
- Melhorar manutenibilidade e reusabilidade do seu código;
- Entender e aplicar os padrões REST;
- Escrever assinaturas para APIs intuitivas e facilmente entendíveis.

---

# Instruções para Utilizar a API:

1. Clone o repositório
- `git clone https://github.com/IvanRafael-Dev/StoreManager.git`.

- Entre na pasta do repositório que você acabou de clonar:
  - `cd StoreManager`

2. Instale as dependências [**Caso existam**]

- `npm install`

3. Para rodar os testes 

- `npm run test:mocha`


# TESTES

Projeto com 100% de cobertura de testes, utilizando Mocha, Chai e Sinon.

