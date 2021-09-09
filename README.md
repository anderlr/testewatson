# IBM Watson Text to Speech

Um pequeno projeto em React onde o usuário insere comentários na página
do aplicativo. Por sua vez eles ele são armazenados em um banco de dados MySQL por uma
API feita em NodeJS.

As requisições AJAX são feitas pela biblioteca Axios e já no backend o banco de dados
é acessado pelo framework Express para inserir os comentários.

## Como Executar

Requisitos:

<li>XAMPP(Windows ou Linux) ou programa similar como WampServer para banco de dados local</li>
<li>phpMyAdmin/ou MySQL Workbench para gerenciar o banco de dados mySQL</li>
<li>npm(Node Package Manager) deve estar instalado também</li>

### Primeiro passo: Banco de dados

1.1 Crie um banco chamado "comments", o nome deve ser exatamente esse

1.2 No phpMyAdmin (ou SQL Workbench) Execute TODOS os comandos SQL no arquivo: comments.sql

1.3 Você deve conferir se o banco de dados foi criado e já possui dois comentários de exemplo inseridos

Atenção aqui para o port, usuario, senha e host do banco que serão usados no passo 3. Recomendo
deixar as opções padrão como senha vazia e usuario root mas se usar algo diferente basta
se certificar de que as credenciais do banco batem com as variaveis de ambiente.

### Segundo passo: Instalando dependencias

2.1 Em um terminal acesse a pasta testewatson/testeWatsonFront e rode e comando

```
npm install
```

2.2 Em um terminal acesse a pasta testewatson/testeWatsonAPI e rode o comando

```
npm install
```

2.3 Agora temos as dependencias instaladas tanto o frontend quanto backend

### Terceiro passo: Variaveis de ambiente

3.1 Existem dois arquivos .env em cada parte do projeto(frontend e backend) que devem ser modificados

3.2 Na pasta testeWatsonFront/testewatson existe um .envFrontExemplo que deve ser renomeado para ".env"
Dentro do arquivo a variavel REACT_APP_API_PORT deve ter exatamente o valor da variavel API_PORT
no .env do backend(pasta /testeWatsonAPI). O valor padrão está como 5000.

3.3 Na pasta testewatson/testeWatsonAPI existe um .envBackExemplo que deve ser renomeado para ".env"
Dentro do arquivo temos sete variavel de ambiente que são utilizadas pela API, entao
é de suma importância que sejam verificadas.

<li>TEXT_TO_SPEECH_APIKEY > deve ter o valor da CHAVE DE API da IBM Watson Text to Speech API</li>
<li>TEXT_TO_SPEECH_URL > deve ter o valor da chave de URL da IBM Watson Text to Speech API</li>
<li>API_PORT = 5000 > este porte deve ser o mesmo que REACT_APP_API_PORT no outro arquivo .env do frontend</li>
<li>DB_PASSOWORD > se o banco de dados tiver senha deve ser colocada aqui</li>
<li>DB_USER > se o banco de dados utilizar outro usuario diferente de "root" deve ser especificado aqui</li>
<li>DB_HOST= "localhost" > se o banco de dados utilizar outro host diferente de "localhost" deve ser especificado aqui</li>
<li>DB_PORT > se o banco de dados utilizar um port diferente de 3306 deve ser especificado aqui</li>

### Quarto passo: Executando de Fato

4.1 Feitos os passos anteriores você deve abrir o banco de dados
pelo XAMPP por exemplo e se certificar de que esteja conectando.

(No caso do XAMPP é preciso inicializar tanto o MySQL quanto o Apache)

4.2 Na linha de comando acesse a pasta testewatson/testeWatsonFront e execute

```
npm start
```

4.3 Em uma outra linha de comando acesse a pasta testewatson/testeWatsonAPI e execute

```
npm start
```

4.4 Se todos os passos foram seguidos você deve agora poder acessar a aplicação em http://localhost:3000/
que é o padrão do React ^^

### AVISO

Ao solicitar o audio , pode ser que você um erro no console do navegador relacionado ao CORS como : "Request header field access-control-allow-origin is not allowed by Access-Control-Allow-Headers ...".
Para resolver isto basta tentar outro navegador ou uma extensão que ative o CORS exemplo:(Allow CORS: Access-Control-Allow-Origin para o Google Chrome)
