# 🚘 BHUT CAR API

API criada com MongoDB para a prova backend de Node.js da empresa BHUT. Esta Api possui 3 endpoints e faz consumo de 2 endpoints de uma Api externa.

## Servidor

1. Clone este repositório em sua máquina local.
1. Instale as dependências da aplicação executando o comando npm install no terminal.
1. Certifique-se de possuir o Docker desktop instalado em sua máquina e rode o comando docker-compose up, isso fará o RabbitMQ rodar em um container sem precisar instalá-lo.
1. Crie um arquivo .env na raiz do projeto.
1. Copie e cole o seguinte código no .env que acabou de criar:

```plaintext
PORT=8000
MONGODB_BASE_URL="mongodb+srv://mirianquispe1505:12345@cluster0.szorlnt.mongodb.net/car-bhut"
BHUT_API_BASE_URL="http://api-test.bhut.com.br:3000/api"
AMQP_BASE_URL="amqp://mirian:123456@localhost:5672"
QUEUE_NAME="CREATED_CAR"
```

No terminal, execute o comando npm run dev e pronto! A Api estará funcionando na seguinte url: http://localhost:8000.

## 🚀 Rotas da API

### Listagem de carros

**GET /listCars:** Rota de listagem de carros e que faz uma requisição GET neste endpoint: http://api-test.bhut.com.br:3000/api/cars

### Cadastro carro

**POST /createCar:** Rota para o cadastro de um carro e que faz requisição POST neste endpoint: http://api-test.bhut.com.br:3000/api/cars

- Campos obrigatórios:
  - title: Nome do carro.
  - brand: Marca do carro.
  - price: Preço do carro.
  - year: Ano do carro.

Quando um novo carro é criado, este irá criar um novo registro na tabela de Logs do MongoDB, com os seguintes campos:

- id: identificador único.
- date_hour: hora e data do registro.
- car_id: id do carro criado.

### Recebimento de WebHook

**POST /webHookClient:** Rota para o recebimento de webHook. Assim que um carro for criado, suas informações serão enviadas a uma fila que quando consumida, enviará um webHook com as informações do carro e a mensagem de: Novo carro cadastrado.

### Listagem de logs

**GET /logs:** Rota para a listagem dos logs registrados.

## 🛠️ Tecnologías utilizadas

- Javascript
- Node.js
- Express.js
- Morgan
- Body Parser
- Cors
- MongoDB
- Mongoose
- RabbitMQ
- Node Webhooks
- Axios
- Dotenv
- Docker
