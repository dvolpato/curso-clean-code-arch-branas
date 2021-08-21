# curso-clean-code-arch-branas

## Design

### According to Clean Architecture

**Entities**
- Cpf
- Coupon
- Item
- Order
- OrderItem

**Use Cases**
- PlaceOrder

### According to Domain-Driven Design

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