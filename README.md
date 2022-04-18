
# ProjetoLPARQ

## Overview
Este é um repositório para o projeto das disciplinas ECM 516 - Arquitetura de Sistemas Computacionais e ECM 252 - Linguagens de Programação II.

O tema geral para o projeto é: **soluções computacionais para problemas causados
por guerras.**

## Proposta

A proposta do projeto é desenvolver um app para ajudar refugiados encontrar casas que possam os abrigar.

## Ferramentas

- Versionamento de código: [GitHub](https://github.com/)
- Linguagem de Programação: [JavaScript](https://www.javascript.com/)
- Engine do back end: [Node.js](https://nodejs.org/)
- Framework para desenvolvimento das APIs: [Express](https://expressjs.com/)
- Gerenciamento e documentação das APIs: [Postman](https://www.postman.com/)
- Testes de integração: [Jest](https://jestjs.io/) + [Github Actions](https://github.com/features/actions)
- Desenvolvimento do UI: [React](https://reactjs.org/)

## Arquitetura

A arquitetura do app é composta por 2 microsserviços ([nodeJS](https://nodejs.org/)), 1 barramento de eventos ([nodeJS](https://nodejs.org/)) e 1 front end ([React](https://reactjs.org/)).
- Microsserviço de gerenciamento de usuarios: **`/back-end/mss_gerenciamento_usuarios`**
  - Documentação: [link](https://documenter.getpostman.com/view/16858667/Uyr5of2L)
  - Diretório: [shortcut](https://github.com/PropysMaua/ProjetoLPARQ/tree/main/back-end/mss_gerenciamento_usuarios)
- Microsserviço de gerenciamento casas: TBD
- Barramento de eventos: TBD
- Front-end: TBD


## Back End

### Arquitetura
A arquitetura do back-end é baseada em MVC e Clean Architecture:

![img.png](docFiles/BackEnd-Arch.png)


