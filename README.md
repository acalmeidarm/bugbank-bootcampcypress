# bugbank-bootcampcypress


<p align="center">Esse projeto tem por objetivo realizar a automação de 3 cenários de testes da página Bugbank</p>

### 🌱 Cénarios de Teste

- [x] Realizar o registro de um cliente selecionando a opção de criar um conta com saldo e validar que o número da conta criada foi exibido com sucesso
- [x] Acessar o BugBak com o cliente criado e verificar que o acesso foi feito com sucesso
- [x] Obter um extrato da movimentação da conta

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- Cypress
- Javascript


### 🤝 Para executar o projeto:

    Para executar os testes em sua máquina, você pode baixar esse projeto usando o Github e seguir os passos abaixo:<br>

    Instalar as dependências configuradas do package.json, usando o comando: yarn install
    Executar uma spec específica no modo headless com o comando: 
    Executar testes no modo interface do cypress com o comando: yarn cypress open

### 🤝 Para executar testes com Allure:
    Apagar os testes que já foram executados com o comando: 
        yarn run allure:clear   
    Executar teste por linha de comando gerando allure results
        yarn cypress run --env allure=true
    Depois de gerar allure results, apresentar o servidor de testes
        yarn allure serve
