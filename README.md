
# ProjetoLPARQ

## Overview
Este é um repositório para o projeto das disciplinas ECM 516 - Arquitetura de Sistemas Computacionais e ECM 252 - Linguagens de Programação II.

O tema geral para o projeto é: **soluções computacionais para problemas causados
por guerras.**

## Integrantes

| Nome        | RA           | 
| ------------- |:-------------:| 
| Bruno Vilardi Bueno | 19.00331-5 | 
| Fernando Oliveira de Souza      | 19.00617-9 | 
| Gustavo Zamboni do Carmo | 19.01266-7 | 

## Video mostrando o funcionamento
 [![IMAGE ALT TEXT](http://img.youtube.com/vi/0kq_iBCmOO4/0.jpg)](http://www.youtube.com/watch?v=0kq_iBCmOO4 "Video Title")

## Proposta

A proposta do projeto é desenvolver um app para ajudar refugiados encontrar casas que possam os abrigar.

## Ferramentas

- Versionamento de código: [GitHub](https://github.com/)
- Linguagem de Programação: [JavaScript](https://www.javascript.com/)
- Engine do back end: [Node.js](https://nodejs.org/)
- Framework para desenvolvimento das APIs: [Express.js](https://expressjs.com/)
- Gerenciamento e documentação das APIs: [Postman](https://www.postman.com/)
- Testes de integração: [Jest](https://jestjs.io/) + [Github Actions](https://github.com/features/actions)
- Desenvolvimento do UI: [Angular](https://angular.io/)

## Arquitetura

A arquitetura do app é composta por 1 microsserviço ([nodeJS](https://nodejs.org/)) e 1 front end [Angular](https://angular.io/).
- Microsserviço de gerenciamento de usuarios: **`/back-end/mss_gerenciamento_usuarios`**
  - Documentação: [link](https://documenter.getpostman.com/view/16858667/Uyr5of2L)
  - Diretório: [shortcut](https://github.com/PropysMaua/ProjetoLPARQ/tree/main/back-end/mss_gerenciamento_usuarios)
- Front-end: **`/lparq-front`**


## Back End

### Arquitetura
A arquitetura do back-end é baseada na seguinte interpretação de Clean Architecture:

![img.png](docFiles/BackEnd-Arch.png)


## Como rodar o projeto

### Buildar o projeto

    docker-compose build

### Rodar o projeto

    docker-compose up

### Alternativa: usar o script para execução (Windows)

    run-docker.bat

### Usando Kubernetes: (minikube + kubectl devem estar instalados)

    run-kubernetes.cmd

### Visualizando o service no kubernetes 

    minikube service hello-world-service --url

![img.png](img.png)



