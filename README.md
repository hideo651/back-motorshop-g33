<div style="display:flex;justify-content:center"><img src="./g33.png" /></div>
<h1 style="font-size:48px;color:mediumblue">Projeto Full Stack - Motorshop G33</h1>
<p style="font-size:18px;padding:0px 25px 10px">Projeto Full-stack de gestão de anúncios de veículos. Desenvolvimento Front-End em typescript React-TS Vite e Back-End em typescript com Node em Express e TypeORM com banco de dados PostgreSQL, consumo de API <a href="https://kenzie-kars.herokuapp.com/api" taget="_blank"> Kenzie-Kars</a> e hospedagem de upload de imagens pelo Cloudinary. </p>

#

<h2 style="font-size:32px;color:mediumblue">Como instalar o projeto:</h2>

1. Vá ao webiste do <a href="http://nodejs.org" target="_blank">Node.js</a>, faça download da aplicação e instale o servidor para rodar ambos front e back ends.

2. Vá ao webiste do <a href="http://postgresql.org" target="_blank">PostgreSQL</a>, faça download da aplicação e instale o servidor para rodar o banco de dados usado no backend. Anote as informações definidas durante a instalação, como senha e porta de execução do postgre serão necessários na configuração do sistema.

3. Vá ao website do <a href="http://gmail.com" target="_blank">Google GMail</a>, crie uma conta de email para enviar emails de recuperação de senhas para os usuários e use na configuração do <code>.ENV</code>.

4. Vá ao website da <a href="" target="_bloank">Cloudinary</a>, crie uma conta de acesso. Ao completar vá ao Dashboard e copie a API Environment variable para ser usado na configuração do <code>.ENV</code>

5. Com ambos instalados, execute o SQL Shell (psql) para criar o banco de dados: <code>CREATE DATABASE motorshop_g33</code>

6. Renomeie o arquivo <code>.env.example</code> da pasta <b>/backend</b> para <code>.env</code> e edite com as informações definidas por você na configuração do PostgreSQL<pre>
   PGHOST=localhost
   PGPORT=5432
   PGUSER=postgres
   PGPASSWORD=suasenha
   PGDATABASE=motorshop_g33
   SECRET_KEY=TroqueEssaSecrect_key
   SMTP_USER=user@gmail.com
   SMTP_PASS=senhadacontagmail
   CLOUDINARY_URL=cloudinary://11111111111111:XXXx1XxxxX111xxXXX11Xx11xxxxxx@xxxxxxxx

</pre>

7. Após ter a base de dados criada, execute o <b>Node.js command prompter</b>. Vá até as pastas de <b>/frontend</b> e <b>/backend</b> e execute <b>em ambas</b> o comando: <code>npm install</code>

8. Ainda no <b>Node.js command prompter</b>, na pasta <b>/backend</b>, execute o comando para persistirem as migrações da API no banco de dados: <code>npm run typeorm migrations:run -- -d .\src\data-source.ts</code>

9. Por fim, em terminais separados, execute <code>npm start</code> em <b>/backend</b> e <code>npm run dev</code> em <b>/frontend</b><pre>{
   "web_url":"http://localhost:5173",
   "api_url":"http://localhost:3000"
   }</pre>

<h2 style="font-size:32px;color:mediumblue">Back-End - Motorshop G33 API:</h2>

# /users

<h4><b>POST:</b> Rota disponível sem autenticação ou permissão, usada para cadastro de usuários, onde isStaff é um booleano que identifica um vendedor (true) de um comprador (false).</h4>
Request:
<pre>
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
</pre>
Response: <b>201 Created</b>
<pre>
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
</pre>

<h4><b>GET:</b> Rota disponível somente para usuário autenticado com conta de administrador, usada para listagem de todos os usuários cadastrados.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
[{
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
    "isAdm": false,
    "isActive": true,
    "createdAt": "2023-04-26T14:01:31.908Z",
    "updatedAt": "2023-04-26T14:01:31.908Z"
},
{
    "id": "dca1bc25-2d8f-4589-99af-10d3d7810a3f",
    "name": "System Operator",
    "email": "sysop@mh.app.br",
    "cpf": "123.456.789-10",
    "phone": "5531995941235",
    "birthday": "1980-06-06T03:00:00.000Z",
    "description": "Smooth Operator",
    "cep": "12345-678",
    "state": "Minas Gerais",
    "city": "Belo Horizonte",
    "street": "Av. Afonso Pena",
    "number": "10420",
    "complement": null,
    "isStaff": true,
    "isAdm": true,
    "isActive": true,
    "createdAt": "2023-04-26T14:01:17.910Z",
    "updatedAt": "2023-04-26T14:01:17.910Z"
}]
</pre>

# /users/profile

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar as informações do próprio usuário.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
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
</pre>

# /users/:user_id

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar as informações de um usuário pelo id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
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
</pre>

<h4><b>PATCH:</b> Rota disponível somente para usuário autenticado com permissão de administrador ou dono dos dados, usada para atualizar as informações de um usuário pelo id.</h4>
<pre>
Request:
{
	"description":"Veículos de alto padrão de marcas internacionais como Honda, Citroen e Hyundai. Excelentes condições para garantir um veículo de luxo e requinte que em breve possa ser seu."
}</pre>
Response: <b>200 OK</b>
<pre>
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
</pre>

<h4><b>DELETE:</b> Rota disponível para usuário autenticado com permissão de administrador ou dono dos dados, usada para deletar uma conta de usuário e seus anúncios, fotos e comentários pelo id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>204 No Content</b>
<pre>
{}
</pre>

# /login

<h4><b>POST:</b> Rota disponível sem autenticação ou permissão, usada para autenticação de usuários.Request:</h4>
<pre>
{
	"email": "marcelo@mh.app.br",
	"password": "654321"
}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImlhdCI6MTY3OTcxNjA4MSwiZXhwIjoxNjc5ODAyNDgxLCJzdWIiOiI3YzVhMTg1NC1lMjc4LTRmMTUtYTU1Yi0wM2NhMjgwMTIyYTgifQ.omTR6v2uvR6caKTPkfg4_HfCnhISNq_9bfMa-lXeCyY"
}
</pre>

# /announcement

<h4><b>POST</b>: Rota disponível somente para usuário autenticado com permissão de vendedor, usada para criar anúncios de veículos.</h4>
Request:
<pre>
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
</pre>
Response: <b>201 Created</b>
<pre>
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
</pre>

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para listar anúncios cadastrados. Pode receber parâmetros para paginação e limite: (ex: ?page=1&limit=5 )</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
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
</pre>

# /announcement/:annoucement_id

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar um anúncio por id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
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
</pre>

<h4><b>PATCH:</b> Rota disponível somente para usuário autenticado como administrador ou vendedor dono do anúncio, usada para atualizar informações ou ativar/desativar um anúncio pelo id.</h4>
Request:
<pre>
{
	"isActive": false
}
</pre>
Response: <b>200 OK</b>
<pre>
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
</pre>

<h4><b>DELETE:</b> Rota disponível somente para usuário autenticado como administrador ou dono do anúncio, usada para apagar um anúncio e suas fotos pelo id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>204 No content</b>
<pre>
{}
</pre>

# /comment

<h4><b>POST</b>: Rota disponível somente para usuário autenticado, usada para enviar mensagens, seja para um canal ou diretamente a um usuário.</h4>
Request:
<pre>
{
	"comment": "O carro me parece impecável! Podemos negociar?"
}
</pre>
Response: <b>201 Created</b>
<pre>
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
</pre>
