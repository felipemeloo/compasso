# Compasso

Projeto desenvolvido baseado no desafio técnico da Compasso

## Instalação

Clone ou baixe o repositório

Ao baixar, instale as dependências do projeto na pasta raiz executando o comando abaixo:

```
npm install
```

Caso não tenha o [node](https://nodejs.org/en/) instalado, necessário baixar e instalar.

Após instalar as dependências do projeto, basta executar com o seguinte comando:

```
npm start
```

## Usabilidade

Abaixo, seguem api´s desenvolvidas para contemplar as necessidades do projeto.

```

Endpoints do controller cidade:
GET - localhost:3000/v1/cities/findCityByState/{state}
GET - localhost:3000/v1/cities/{city}
POST - localhost:3000/v1/cities/create -> Exemplo Request Body: 
{
    "name": "Gama",
    "state": "DF"
}

Endpoints do controller cliente:
POST - localhost:3000/v1/clients/create -> Exemplo Request Body: 
{
    "fullName": "Mario Silva",
    "gender": "Masculino",
    "birthDate": "1997-09-10",
    "age": "29",
    "cityWhereLive": "Gama"
}
GET - localhost:3000/v1/clients/findByNameClient/{name}
GET - localhost:3000/v1/clients/{idClient}
PUT - localhost:3000/v1/clients/{idClient} -> Exemplo Request Body: 
   {
       "fullName": "Mario Silva"
   }
DELETE - localhost:3000/v1/clients/{idClient}
```
