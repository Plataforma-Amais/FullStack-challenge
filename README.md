# fullstack-challenge-flavio-santos-oliveira

Desafio Técnico

Empresa: Plataforma A+

## Para executar aplicação

- Efetue o clone do repositório em sua máquina

`git clone https://github.com/flaviosoliver/fullStack-challenge-flavio-santos-oliveira.git`

- Entre na pasta onde foi criado o repositório

`cd fullstack-challenge-flavio-santos-oliveira`

- Execute a instalação de dependências e a inicialização da aplicação

`npm run install-start-full`

## Back-End

SGBD: MySQL

Ambiente de execução: Node.JS

Framework Node.JS: Express.JS

Arquitetura: ORM

Framework ORM: Sequelize

## Front-End

Interface: React.JS

### Autor

Flávio Santos Oliveira | email: flavsoliver@gmail.com

Brasil, JUNHO - 2021.

## Desafio

Desenvolver uma aplicação WEB ou APP, para controlar Alunos e Professores em suas Turmas, referentes às séries do Ensino Fundamental, em uma Escola Pública.

- A aplicação deve apresentar uma lista de Escolas Públicas:
  - Deve permitir adicionar, modificar e excluir Escolas.
  - Cada Escola deve possuir um Diretor responsável.
- As Turmas devem ser disponibilizadas ao acessar detalhes de uma Escola:
  - Deve permitir adicionar, modificar e excluir Turmas.
  - Cada Turma possui um Professor associado a ela.
    - Um Professor poderá estar associado a mais de uma Turma.
      - Deve permitir que o Diretor possa adicionar e excluir Professores em uma Turma.
  - Ao entrar nos detalhes da Turma, os alunos e professores relacionados devem ser exibidos.
    - Alunos devem ser adicionados ou excluídos das Turmas.
- Os Alunos possuem informações mínimas que devem estar contidas em seus cadastros, como:
  - Nome do Aluno
  - Nomes dos Responsáveis
  - Contatos
- Os Professores devem ser capazes de adicionar observações sobre a Turma e sobre determinado Aluno.
- A solução deve possibilitar buscar com base em alguma informação, de escolha livre, contida nas entidades.
