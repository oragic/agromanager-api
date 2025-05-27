# AgroManager

> Uma API desenvolvida em NestJS para gestão de produtores rurais, suas fazendas e culturas. Criada como um projeto de exemplo com foco em boas práticas de arquitetura, modularidade.

---

## Objetivo

O **AgroManager** é uma API que permite cadastrar produtores rurais, suas fazendas e culturas plantadas. Este projeto foi criado com foco em:

- Boas práticas de codificação como clean code e aplicação de patterns
- Facilidade para testes e extensão futura
- Aplicação de boas práticas em arquitetura
---

## Arquitetura

Este projeto adota os princípios de **Domain-Driven Design (DDD)**, **Clean Architecture** e  **Hexagonal Architecture** , separando claramente as responsabilidades em camadas. A estrutura se divide em:

- **Domain/Core**: onde está o coração da lógica de negócios (entidades, casos de uso, interfaces)
- **Infrastructure**: onde está a implementação concreta (ORMs, banco de dados)
- **Interface/Http**: onde estão os controladores HTTP (camada de entrada)
- **Adapters**: onde ocorrem as implementações dos contratos definidos no Core
- **Adapters**: onde os contratos a serem implementados estão

Essa separação facilita testes, manutenção e futura escalabilidade da aplicação.

---

## Estrutura de Pastas
```bash
src/
├── Internal/
│ ├── Core/
│ │ ├── domain/ # Tipagens e entidades de negócio
│ │ └── service/ # Regras de negócio (casos de uso)
│ │ └── port/ # Contratos a serem implementado pelo adapters
│ ├── Adapters/
│ │ └── repository/ # Implementações de repositórios
├── Infrastructure/
│ └── entities/ # Entidades do TypeORM
├── Interface/
│ └── Http/
│ └── controllers/ # Endpoints (controllers do NestJS)
├── app.module.ts # Módulo principal da aplicação
└── main.ts # Ponto de entrada
```

## Requisitos Atendidos
| Requisito                                          | Como foi atendido?                                      |
|----------------------------------------------------|---------------------------------------------------------|
| Cadastrar produtores                               | Controller + Service + Repository com DDD               |
| Associar fazendas ao produtor                      | Fazendas estão incluídas na criação do produtor         |
| Informar culturas por fazenda                      | Cada fazenda pode conter uma ou mais culturas plantadas |
| Persistência em banco relacional                   | PostgreSQL usando TypeORM                               |
| Modularização e separação por domínio              | Organização em camadas (Core, Infra, Interface)         |
| Deploy em nuvem com banco gratuito                 | Feito com Render (free tier para API e banco)           |


## Como rodar localmente

### 1. Clonar o projeto

```bash
git clone https://github.com/seu-usuario/agromanager.git
cd agromanager
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo .env na raiz com os dados do PostgreSQL (exemplo do Render):
```code
DB_HOST=your-host
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
```

### 3. Configurar variáveis de ambiente

```bash
npm run start:dev
```

## Deploy na nuvem
O projeto está pronto para deploy na Render (https://render.com):

