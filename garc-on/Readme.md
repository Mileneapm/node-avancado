# GarçON

> Aplicação backend com NodeJS, para requisição de comida, sendo cadastrado cliente,
cardapio com os lanches e pedido.

```JSON
http://localhost:9000/cardapio

{
    "nome": "hamburguer bacon",
    "descricao": "bacon",
    "valor": "20"
}

http://localhost:9000/cliente

{
    "nome": "Giane",
    "cpf": "07524560287",
    "cep": "83880000",
    "complemento": "apto 04"
}

GET http://localhost:9000/pedido
POST http://localhost:9000/pedido/:6170611deaa39742874d1f7f

{
    "_idCliente": "61705adfecfb1464aef26155",
    "valor": "10",
    "nummesa": "1"
}