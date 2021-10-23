# Garç-ON

<h3> Aplicação backend com NodeJS, para requisição de comida, sendo cadastrado usuario, cliente,
cardapio com os lanches e pedido. Visando aplicar a API na matéria de Front-end com React.</h3>
<h3>Processo:
>realizar cadastro usuário, tratar permissões> realizar cadastro dos clientes>Realizar pedido com itens cadastrados do cardápio>Efetivar compra!</h3>
<br>

```JSON
http://localhost:9000/cardapio

{
    "nome": "hamburguer bacon",
    "descricao": "duplo bacon",
    "valor": "20"
}

http://localhost:9000/cliente

{
    "nome": "Milene",
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

http://localhost:9000/usuario

{
    "usuario": "Milene",
    "senha": "12345",
    "permissoes": ""
}