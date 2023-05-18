<div style="display:flex;justify-content:center"><img src="./g33.png" /></div>
<h1 style="font-size:48px;">Projeto Full Stack - Motorshop G33</h1>
<p style="font-size:18px;padding:0px 25px 10px">Projeto Full-stack de gestão de anúncios de veículos. Desenvolvimento Front-End em typescript React-TS Vite e Back-End em typescript com Node em Express e TypeORM com banco de dados PostgreSQL, consumo de API <a href="https://kenzie-kars.herokuapp.com/api" taget="_blank"> Kenzie-Kars</a> e hospedagem de upload de imagens pelo Cloudinary. </p>

<br/>

## ✅ Links da aplicação

- URL de teste: http://localhost:3000
- URL de produção: https://motorshopg33v2.onrender.com/

<br/>

## 🦾 **Tecnologias utilizadas**

- **TypeScript**
- **NodeJS**
- **Express**
- **Express-async-errors**
- **PostgreSQL**
- **Bcrypt**
- **Json Web Token**
- **Class-transformer**
- **Dotenv**
- **TypeORM**
- **Multer**
- **Cloudinary**
- **Nodemailer**
- **Mailgen**

#

<h2 style="font-size:32px;">Como instalar o projeto:</h2>

1.  Vá ao webiste do <a href="http://nodejs.org" target="_blank">Node.js</a>, faça download da aplicação e instale o servidor para rodar ambos front e back ends.

2.  Vá ao webiste do <a href="http://postgresql.org" target="_blank">PostgreSQL</a>, faça download da aplicação e instale o servidor para rodar o banco de dados usado no backend. Anote as informações definidas durante a instalação, como senha e porta de execução do postgre serão necessários na configuração do sistema.

3.  Vá ao website do <a href="https://myaccount.google.com/" target="_blank">Google Conta</a>, no campo de busca, escreva "Senhas de app", selecione o app "email" e o dispositivo "computador" e clique em "gerar", com a senha gerada e o seu emial do Google, configure o seu<code>.ENV</code>.

4.  Vá ao website da <a href="" target="_bloank">Cloudinary</a>, crie uma conta de acesso. Ao completar vá ao Dashboard e copie a API Environment variable para ser usado na configuração do <code>.ENV</code>

5.  Com ambos instalados, execute o SQL Shell (psql) para criar o banco de dados: <code>CREATE DATABASE motorshop_g33</code>

6.  Renomeie o arquivo <code>.env.example</code> da pasta <b>/backend</b> para <code>.env</code> e edite com as informações definidas por você na configuração do PostgreSQL

    ```javascript
        DATABASE_URL = postgres://<user>:<senha_do_user>@localhost:<porta>/<nome_da_database>

        SECRET_KEY = TroqueEssaSecrect_key
        SMTP_USER = user@gmail.com
        SMTP_PASS = senha_app_google_gerada
        CLOUDINARY_URL = cloudinary://11111111111111:XXXx1XxxxX111xxXXX11Xx11xxxxxx@xxxxxxxx
    ```

7.  Após ter a base de dados criada, execute o <b>Node.js command prompter</b>. Vá até as pastas de <b>/frontend</b> e <b>/backend</b> e execute <b>em ambas</b> o comando: <code>yarn install</code>

8.  Ainda no <b>Node.js command prompter</b>, na pasta <b>/backend</b>, execute o comando para persistirem as migrações da API no banco de dados: <code>yarn run typeorm migrations:run -- -d .\src\data-source.ts</code>

9.  Entre na pasta "utils", no arquivo "sendEmail.utils", na variavel "email" altere o link para `http://localhost:5173/execute-password-recovery/${newToken}` para testar a aplicação em ambiente de desenvolvimento ou passe o localhost onde o front-end está sendo utilizado.

10. Por fim, em terminais separados, execute <code>yarn dev</code> em <b>/backend</b> e <code>yarn dev</code> em <b>/frontend</b>

<h2 style="font-size:32px">Back-End - Motorshop G33 API:</h2>

## ➡️ **Rotas da aplicação**

### Rotas do usuário

<br>
<br>

# /users

<h4><b>POST:</b> Rota disponível sem autenticação ou permissão, usada para cadastro de usuários, onde isStaff é um booleano que identifica um vendedor (true) de um comprador (false).</h4>
Request:

```javascript
   {
    "name": "Marcelo Henrique",
    "email": "marcelo@mh.app.br",
    "password": "654321",
    "cpf": "789.123.789-10",
    "birthday": "1980/06/06",
    "description":"Usuário vendedor",
    "phone":"5531995941235",
    "cep":"12345-678",
    "state": "Minas Gerais",
    "city":"Belo Horizonte",
    "street":"Av. Afonso Pena",
    "number":"024",
    "complement":"Ap 1101",
    "isStaff":true,
    "isAdm": false
    }
```

Response: <b>201 Created</b>

```javascript

   {
    "id": "937a84da-1e6c-49a2-bc83-d4b91cea589c",
    "name": "Marcelo Henrique",
    "email": "marcelo@mh.app.br",
    "cpf": "789.123.789-10",
    "phone": "5531995941235",
    "birthday": "1980-06-06T03:00:00.000Z",
    "description": "Usuário vendedor",
    "cep": "12345-678",
    "state": "Minas Gerais",
    "city": "Belo Horizonte",
    "street": "Av. Afonso Pena",
    "number": "024",
    "complement":"Ap 1101",
    "isStaff": true,
    "isAdm": false,
    "isActive": true,
    "createdAt": "2023-04-26T14:01:31.908Z",
    "updatedAt": "2023-04-26T14:01:31.908Z"
    }
```

#

<h4><b>GET:</b> Rota disponível somente para usuário autenticado com conta de administrador, usada para listagem de todos os usuários cadastrados.</h4>

Response: <b>200 OK</b>

```javascript
[
  {
    id: "937a84da-1e6c-49a2-bc83-d4b91cea589c",
    name: "Marcelo Henrique",
    email: "marcelo@mh.app.br",
    cpf: "789.123.789-10",
    phone: "5531995941235",
    birthday: "1980-06-06T03:00:00.000Z",
    description: "Usuário vendedor",
    cep: "12345-678",
    state: "Minas Gerais",
    city: "Belo Horizonte",
    street: "Av. Afonso Pena",
    number: "024",
    complement: "Ap 1101",
    isStaff: true,
    isAdm: false,
    isActive: true,
    createdAt: "2023-04-26T14:01:31.908Z",
    updatedAt: "2023-04-26T14:01:31.908Z",
  },
  {
    id: "dca1bc25-2d8f-4589-99af-10d3d7810a3f",
    name: "System Operator",
    email: "sysop@mh.app.br",
    cpf: "123.456.789-10",
    phone: "5531995941235",
    birthday: "1980-06-06T03:00:00.000Z",
    description: "Smooth Operator",
    cep: "12345-678",
    state: "Minas Gerais",
    city: "Belo Horizonte",
    street: "Av. Afonso Pena",
    number: "10420",
    complement: null,
    isStaff: true,
    isAdm: true,
    isActive: true,
    createdAt: "2023-04-26T14:01:17.910Z",
    updatedAt: "2023-04-26T14:01:17.910Z",
  },
];
```

# /users/profile

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar as informações do próprio usuário logado.</h4>

Response: <b>200 OK</b>

```javascript
{
	"id": "937a84da-1e6c-49a2-bc83-d4b91cea589c",
	"name": "Marcelo Henrique",
	"email": "marcelo@mh.app.br",
	"cpf": "789.123.789-10",
	"phone": "5531995941235",
	"birthday": "1980-06-06T03:00:00.000Z",
	"description": "Usuário vendedor",
	"cep": "12345-678",
	"state": "Minas Gerais",
	"city": "Belo Horizonte",
	"street": "Av. Afonso Pena",
	"number": "024",
	"complement": "Ap 1101",
	"isStaff": true,
	"createdAt": "2023-04-24T19:08:54.759Z",
	"updatedAt": "2023-04-24T19:08:54.759Z",
        "announcement": [{
            "id": "fb160ddb-a539-4290-940d-c2cc4c3c2df2",
            "brand": "Chevrolet",
            "model": "COBALT LTZ 1.8 8V Econo.Flex 4p Aut.",
            "year": 2020,
            "fuel": "1",
            "milage": 50000,
            "color": "Silver",
            "fipe": "55000.00",
            "price": "62000.00",
            "description": "This 2020 Chevrolet Cobalt LTZ is in excellent condition and has been well-maintained. It comes with all the latest features and a powerful engine.",
            "isActive": true,
            "createdAt": "2023-04-24T19:41:00.374Z",
            "updatedAt": "2023-04-24T19:41:00.374Z",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaVIZ4aPgH5CvnRne58bUVccvVYFpAPYYdQ&usqp=CAU"
    }]
}

```

#

# /users/:user_id

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar as informações de um usuário pelo id.</h4>

Response: <b>200 OK</b>

```javascript
{
	"id": "ed50d743-13a3-47d7-b7d1-36bb174a6399",
	"name": "Sidnei Barreto",
	"email": "sydbarret@mh.app.br",
	"cpf": "189.223.789-22",
	"phone": "5531995941235",
	"birthday": "1999-04-04T03:00:00.000Z",
	"description": "Usuário vendedor",
	"cep": "12345-678",
	"state": "Minas Gerais",
	"city": "Belo Horizonte",
	"street": "Av. Antonio Carlos",
	"number": "124",
	"complement": null,
	"isStaff": true,
	"createdAt": "2023-04-18T17:07:21.770Z",
	"updatedAt": "2023-04-18T17:07:21.770Z",
        "announcement": [{
            "id": "444501e0-664c-4f34-85f8-16a591783568",
            "brand": "Honda",
            "model": "WR-V LX 1.5 Flexone 16V 5p Aut.",
            "year": 2022,
            "fuel": "Flex",
            "milage": 5000,
            "color": "Red",
            "fipe": "110293.00",
            "price": "99000.00",
            "description": "Perfect car for city driving",
            "isActive": true,
            "createdAt": "2023-04-18T17:34:58.765Z",
            "updatedAt": "2023-04-18T17:34:58.765Z",
            "avatar": "https://www.rastreadores.org/wp-content/uploads/2019/06/rastreadores-wr-v-honda.jpg"
        }]
}
```

<h4><b>PATCH:</b> Rota disponível somente para usuário autenticado com permissão de administrador ou dono dos dados, usada para atualizar as informações de um usuário pelo id.</h4>

Request:

```javascript
{
	"description":"Veículos de alto padrão de marcas internacionais como Honda, Citroen e Hyundai. Excelentes condições para garantir um veículo de luxo e requinte que em breve possa ser seu."
}
```

Response: <b>200 OK</b>

```javascript
{
    "id": "ed50d743-13a3-47d7-b7d1-36bb174a6399",
    "name": "Sidnei Barreto",
    "email": "sydbarret@mh.app.br",
    "cpf": "189.223.789-22",
    "phone": "5531995941235",
    "birthday": "1999-04-04T03:00:00.000Z",
    "description": "Veículos de alto padrão de marcas internacionais como Honda, Citroen e Hyundai. Excelentes condições para garantir um veículo de luxo e requinte que em breve possa ser seu.",
    "cep": "12345-678",
    "state": "Minas Gerais",
    "city": "Belo Horizonte",
    "street": "Av. Antonio Carlos",
    "number": "124",
    "complement": null,
    "isStaff": true,
    "isAdm": false,
    "isActive": true,
    "createdAt": "2023-04-26T14:01:35.926Z",
    "updatedAt": "2023-04-27T00:23:59.653Z"
}
```

<h4><b>DELETE:</b> Rota disponível para usuário autenticado com permissão de administrador ou dono dos dados, usada para deletar uma conta de usuário e seus anúncios, fotos e comentários pelo id.</h4>
Response: <b>204 No Content</b>

<br>

# users/resetPassword

### 1) Enviar o email com o reset token - POST /users/resetPassword

<br>

<h4><b>POST:</b> Rota para o envio do link do reset da senha por email, ao passar o email de um usuário cadastro, uma mensagem contendo o link da rota para alterar a senha é enviada ao email, o token está dentro da URL.</h4>

Request:

```javascript
    {
        "email": "sydbarret@mh.app.br"
    }
```

Response <b>200 OK </b>

```javascript
    {
        "message": "token send"
    }
```

<br>

### 2) Reset da senha - PATCH /users/resetPassword/:resetToken

<br>

<h4><b>PATCH</b> Rota para o reset da senha, para realizar o patch da senha, o usuário deve estar autenticado (token) e passar o "reset token" enviado por email, na URL da requisição e a nova senha no body.
É necessário substituir todos os "&" que estão dentro do "reset token" por ".", a requisição PATCH irá falhar se o "reset token" conter "&".

Request:

```javascript
{
	"password": "batata1234"
}
```

Response <b>200 OK </b>

```javascript
{
	"message": "Password change with sucess"
}
```

# /login

<h4><b>POST:</b> Rota disponível sem autenticação ou permissão, usada para autenticação de usuários.Request:</h4>

```javascript

{
	"email": "marcelo@mh.app.br",
	"password": "654321"
}

```

Response: <b>200 OK</b>

```javascript

{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImlhdCI6MTY3OTcxNjA4MSwiZXhwIjoxNjc5ODAyNDgxLCJzdWIiOiI3YzVhMTg1NC1lMjc4LTRmMTUtYTU1Yi0wM2NhMjgwMTIyYTgifQ.omTR6v2uvR6caKTPkfg4_HfCnhISNq_9bfMa-lXeCyY"
}


```

# /announcement

<h4><b>POST</b>: Rota disponível somente para usuário autenticado com permissão de vendedor, usada para criar anúncios de veículos.</h4>
Request:

```javascript

{
    "brand": "Ford",
    "model": "Mustang GT Premium 5.0 V8",
    "year": 2018,
    "fuel": "1",
    "milage": 10000,
    "color": "Red",
    "fipe": 125000,
    "price": 180000,
    "description": "Immaculate condition, one owner, no accidents",
    "avatar": "https://i.pinimg.com/originals/51/ff/c0/51ffc02ed1890b091c83e565d4141ec8.jpg",
    "photos": [
    "https://cdn.motor1.com/images/mgl/1OOBp/s1/2018-ford-mustang-first-drive.jpg",
    "https://i.pinimg.com/originals/35/61/5f/35615f58e8cddd68b97fd142fa0d2d0c.png"
    ]
}

```

Response: <b>201 Created</b>

```javascript

{
    "updatedAt": "2023-04-26T14:04:46.276Z",
    "avatar": "https://i.pinimg.com/originals/51/ff/c0/51ffc02ed1890b091c83e565d4141ec8.jpg",
    "createdAt": "2023-04-26T14:04:46.276Z",
    "isActive": true,
    "description": "Immaculate condition, one owner, no accidents",
    "price": 180000,
    "fipe": 125000,
    "color": "Red",
    "milage": 10000,
    "fuel": "1",
    "year": 2018,
    "model": "Mustang GT Premium 5.0 V8",
    "brand": "Ford",
    "id": "c692036a-891f-4679-a683-7b2b81ecdc22"
}

```

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para listar anúncios cadastrados. Pode receber parâmetros para paginação e limite: (ex: ?page=1&limit=5 )</h4>
Response: <b>200 OK</b>

```javascript


"results": [{
    "id": "ec32914d-6919-4e44-a6d8-3aa4c2896aa1",
    "brand": "Fiat",
    "model": "Grand Siena 1.4 EVO Flex 8V 4p",
    "year": 2022,
    "fuel": "1",
    "milage": 80000,
    "color": "Blue",
    "fipe": "111789.00",
    "price": "25000.00",
    "description": "Good condition Fiat for sale, perfect for city driving",
    "isActive": true,
    "createdAt": "2023-04-26T14:04:24.422Z",
    "updatedAt": "2023-04-26T14:04:24.422Z",
    "avatar": "https://http2.mlstatic.com/D_NQ_NP_953896-MLB54341078062_032023-O.jpg",
    "user": {
        "id": "937a84da-1e6c-49a2-bc83-d4b91cea589c",
        "name": "Marcelo Henrique"
    }
},
{
    "id": "ada9e515-695c-47dc-a17a-d7e9f1150dd7",
    "brand": "Fiat",
    "model": "500e ICON (Elétrico)",
    "year": 2022,
    "fuel": "3",
    "milage": 500,
    "color": "White",
    "fipe": "134625.00",
    "price": "35000.00",
    "description": "Excellent condition Fiat 500 for sale, low mileage and well-maintained",
    "isActive": true,
    "createdAt": "2023-04-26T14:04:30.737Z",
    "updatedAt": "2023-04-26T14:04:30.737Z",
    "avatar": "https://img.olx.com.br/images/01/012284151289544.jpg",
    "user": {
        "id": "937a84da-1e6c-49a2-bc83-d4b91cea589c",
        "name": "Marcelo Henrique"
    }
}]
```

# /announcement/:annoucement_id

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar um anúncio por id.</h4>

Response: <b>200 OK</b>

```javascript
{
	"id": "fb160ddb-a539-4290-940d-c2cc4c3c2df2",
	"brand": "Chevrolet",
	"model": "COBALT LTZ 1.8 8V Econo.Flex 4p Aut.",
	"year": 2020,
	"fuel": "1",
	"milage": 50000,
	"color": "Silver",
	"fipe": "55000.00",
	"price": "62000.00",
	"description": "This 2020 Chevrolet Cobalt LTZ is in excellent condition and has been well-maintained. It comes with all the latest features and a powerful engine.",
	"isActive": true,
	"createdAt": "2023-04-24T19:41:00.374Z",
	"updatedAt": "2023-04-24T19:41:00.374Z",
	"avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaVIZ4aPgH5CvnRne58bUVccvVYFpAPYYdQ&usqp=CAU",
	"photos": [],
	"user": {
		"id": "937a84da-1e6c-49a2-bc83-d4b91cea589c",
		"name": "Marcelo Henrique",
		"description": "Usuário vendedor"
	}
    comment: [
    {
        "updatedAt": "2023-05-04T17:09:36.224Z",
        "createdAt": "2023-05-04T17:09:36.224Z",
        "id": "24185467-7c91-4359-8ba2-ae0e9a60229a",
        "comments": "O carro me parece impecável! Podemos negociar?",
        "user": {
            "name": "Jair Raia",
        }
    }]
}


```

<h4><b>PATCH:</b> Rota disponível somente para usuário autenticado como administrador ou vendedor dono do anúncio, usada para atualizar informações ou ativar/desativar um anúncio pelo id.</h4>
Request:

```javascript

{
	"isActive": false
}

```

Response: <b>200 OK</b>

```javascript

{
	"updatedAt": "2023-04-27T00:45:13.860Z",
	"avatar": "https://www.rastreadores.org/wp-content/uploads/2019/06/rastreadores-wr-v-honda.jpg",
	"createdAt": "2023-04-26T14:02:20.336Z",
	"isActive": false,
	"description": "Perfect car for city driving",
	"price": 99000,
	"fipe": 110293,
	"color": "Red",
	"milage": 5000,
	"fuel": "2",
	"year": 2022,
	"model": "WR-V LX 1.5 Flexone 16V 5p Aut.",
	"brand": "Honda",
	"id": "de344094-957e-44b1-9410-c98e779ae302",
	"photos": []
}

```

<br>

<h4><b>DELETE:</b> Rota disponível somente para usuário autenticado como administrador ou dono do anúncio, usada para apagar um anúncio e suas fotos pelo id.</h4>

Response: <b>204 No content</b>

<br>

# /comment

### 1) Enviar um post no anúncio - POST /comment/:AnnouncementId

<br>

<h4><b>POST</b>: Rota disponível somente para usuário autenticado, usada para enviar mensagens, seja para um canal ou diretamente a um usuário. O id do anúncio deve ser passado na URL da requisição</h4>
Request:

```javascript
{
	"comment": "O carro me parece impecável! Podemos negociar?"
}


```

Response: <b>201 Created</b>

```javascript

{
    "updatedAt": "2023-05-04T17:09:36.224Z",
    "createdAt": "2023-05-04T17:09:36.224Z",
    "id": "24185467-7c91-4359-8ba2-ae0e9a60229a",
    "comments": "O carro me parece impecável! Podemos negociar?",
    "user": {
        "id": "b38dfb68-721b-42f4-aa7f-6074c4e5ba15",
        "name": "Jair Raia",
        "email": "jairaia@msn.com",
        "isActive": true
    },
    "announcement": {
        "id": "fb160ddb-a539-4290-940d-c2cc4c3c2df2",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaVIZ4aPgH5CvnRne58bUVccvVYFpAPYYdQ&usqp=CAU",
        "isActive": true,
        "model": "COBALT LTZ 1.8 8V Econo.Flex 4p Aut.",
        "brand": "Chevrolet"
    }
}

```

<br>

### 2) Alterar o comentário - POST /comment/:CommentId

<h4><b>PATCH</b>: Rota disponível somente para usuário autenticado e dono do comentário, usada para alterar um comentário feito pelo usuário, o id do comentário deve ser passado na URL da requisição</h4>
Request:

```javascript
{
	"comment" : "Você parcela em quantas vezes ?"
}
```

Response: <b>200 OK</b>

```javascript

{
	"id": "03f82ed8-4b96-43cc-a223-0e73be1a59b2",
	"comments": "Você parcela em quantas vezes ?",
	"createdAt": "2023-05-18T12:59:43.151Z",
	"updatedAt": "2023-05-18T13:07:05.733Z",
	"user": {
		"id": "e3206a94-1560-4bb7-b641-42ca1123522a",
		"name": "Carlos Silva",
		"email": "carlos@mail.com",
		"cpf": "782.125.719-12",
		"phone": "5531995941235",
		"birthday": "1989-09-30T03:00:00.000Z",
		"description": "Comprador",
		"cep": "12345-678",
		"state": "São Paulo",
		"city": "Campinas",
		"street": "Av. Fittipaldi",
		"number": "420",
		"complement": null,
		"isStaff": true,
		"isAdm": false,
		"isActive": true,
		"createdAt": "2023-05-04T14:27:10.201Z",
		"updatedAt": "2023-05-16T14:17:41.949Z"
	}
}

```

<br>

### 3) Deletar o comentário - DELETE /comment/:CommentId

<h4><b>DELETE</b>: Rota disponível somente para usuário autenticado e dono do comentário, usada para deletar um comentário, o id do comentário deve ser passado na URL da requisição, se a requisição for bem sucedida, é retornando como resposta um status 204 sem conteúdo(no body) como resposta</h4>

<br/>

<h1 align="center">👥 Desenvolvedores responsáveis</h1>

<table align="center">
  <tr>
        <td align="center">
        <img src="https://avatars.githubusercontent.com/u/106833760?s=96&v=4" width="100px;" alt="Foto do Ayrton"/><br>          
        <sub>
          <b>Ayrton Hideo Hirata</b>  <br/>
          <b>Dev</b> <br/>
           <div align="center">
            <a href="https://github.com/hideo651" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
           </div>
            <div align="center">
                <a href="https://www.linkedin.com/in/ayrton-hideo-hirata-29aa4367/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
            </div>
        </sub>
    </td> 
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/86388680?v=4" width="100px;" alt="Foto do Douglas"/><br>        
        <sub>
          <b>Douglas dos Santos Borges</b> <br/>
          <b>Dev</b> <br/>
          <div align="center">
            <a href="https://github.com/DouglasB834" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
          </div>
           <div align="center">
            <a href="https://www.linkedin.com/in/douglassborges/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
           </div>
        </sub>
    </td>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/63411314?v=4" width="100px;" alt="Foto do Daniel"/><br>        
        <sub>
          <b>Daniel Lobato de Souza</b> <br/>
          <b>Dev</b> <br/>
           <div align="center">
            <a href="https://github.com/simplesmentedan" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
           </div>
            <div align="center">
              <a href="https://www.linkedin.com/in/simplesmentedan/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
             </div>
        </sub>
    </td>
     <td align="center">
        <img src="https://avatars.githubusercontent.com/u/106773009?v=4" width="100px;" alt="Foto do Felipe"/><br>        
        <sub>
            <b>Felipe Bulhões</b> <br/>
            <b>Dev</b> <br/>
             <div align="center">
            <a href="https://github.com/FelipeBulhoes" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
            </div>
            <div align="center">
                <a href="https://www.linkedin.com/in/felipebulhoes/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
            </div>
        </sub>
    </td>   
  </tr>
</table>
<table align="center">
  <tr>
  <td align="center">
        <img src="https://avatars.githubusercontent.com/u/96503481?v=4" width="100px;" alt="Foto do Marcelo"/><br>          
        <sub>
          <b>Marcelo Henrique Aguiar Marques</b>  <br/>
          <b>Dev</b> <br/>
           <div align="center">
            <a href="https://github.com/MHAMarques" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
            </div>
             <div align="center">
                <a href="https://www.linkedin.com/in/mhmarques/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
             </div>
        </sub>
    </td> 
  </tr>
</table>
