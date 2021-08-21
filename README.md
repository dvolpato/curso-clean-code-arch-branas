# curso-clean-code-arch-branas

## Etapas
- [Parte 1](Part1.md)
- [Parte 2](Part1.md)
- [Parte 3](Part1.md)
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