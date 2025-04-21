# 📋 Projeto de Testes Automatizados com Cypress - Adopet

Este repositório contém testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para o site [Adopet Frontend](https://adopet-frontend-cypress.vercel.app/).

## ✨ Objetivo
Automatizar os testes de **cadastro de usuário** e **login** no sistema, garantindo a qualidade e o bom funcionamento dessas funcionalidades.

## 🛠️ Tecnologias Utilizadas
- **Cypress** para automação de testes end-to-end
- **Mochawesome** para geração de relatórios de testes
- Gravação de vídeo dos testes automatizada pelo Cypress
- Configuração de integração com o **Cypress Dashboard** (nuvem) para gerenciamento dos testes

## 🧪 Testes Implementados
- Cadastro de novo usuário
- Login de usuário existente
- Validação de mensagens de sucesso e erro
- Testes utilizando `commands.js` para otimizar e reutilizar comandos customizados

## 🔒 Proteção de Dados Sensíveis

- Utilização de fixtures para armazenar dados de teste (como usuários e senhas) de forma organizada.
- Criação do arquivo cypress.env.json para proteger informações sensíveis, como tokens de autenticação e credenciais, mantendo o ambiente de testes seguro.

## 🧹 Boas Práticas para Testes

Aplicação de técnicas para evitar flaky tests (testes instáveis), como:

- Uso correto de comandos cy.get(), cy.contains() e cy.intercept() para aguardar elementos e requisições.
- Garantir que os elementos estejam visíveis e prontos antes de interagir.
- Evitar uso excessivo de cy.wait() fixo, preferindo esperar por eventos reais.

## 📹 Gravação dos Testes
Durante a execução dos testes, o Cypress foi configurado para:
- **Gravar a tela** do navegador
- **Salvar os vídeos** no diretório padrão
- **Gerar relatórios** utilizando o Mochawesome
