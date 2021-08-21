# Projeto - Parte 3

## Testes

1. Deve gerar o código do pedido
2. Deve obter as informações do pedido

Considere:

- O código do pedido é formado por `AAAAPPPPPPPP` onde `AAAA` representa o ano e o `PPPPPPPP` representa um sequencial do pedido
- Implementar um repositório em memória para cada aggregate (Order, Item e Coupon)
- As informações que devem ser exibidas são o código, o CPF de quem fez o pedido, o CEP de entrega e também os itens juntamente com o preço e a quantidade, além do valor do valor do desconto, frete e o total

**Importante**
- Implemente os testes de unidade que faltam para cada uma das entities
- Implemente os DTOs para cada um dos use cases 