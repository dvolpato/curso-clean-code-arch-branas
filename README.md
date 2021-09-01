# curso-clean-code-arch-branas

## Etapas
- [Parte 1](Part1.md)
- [Parte 2](Part2.md)
- [Parte 3](Part3.md)
- [Parte 4](Part4.md)
- [Parte 5](Part5.md)
- [Parte 6](Part6.md)
## Design
### Conforme Clean Architecture

**Entities**
- Cpf
- Coupon
- Item
- Order
- OrderItem

**Use Cases**
- PlaceOrder

### Conforme Domain-Driven Design

**Value Objects**
- Cpf

**Entities**
- Coupon
- Item
- Order

**Aggregates**
- OrderItem and Order
- Item

**Domain Service**
- FreightCalculator

**Application Service**
- PlaceOrder