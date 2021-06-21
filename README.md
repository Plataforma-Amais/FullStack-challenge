#### <a name="top"></a> Esse repo é um fork do desafio técnico para seleção de pessoa desenvolvedora fullstack na Plataforma A+.
##### Veja a [Plataforma A+ no LinkedIn](https://www.linkedin.com/company/plataformaamais)  
  
# Fullstack Challenge  ![!project status](https://img.shields.io/badge/status-development-f4a201?logo=visual-studio-code)
![!react](https://img.shields.io/badge/react-purple?logo=react)
![!react-router](https://img.shields.io/badge/react%2frouter-purple?logo=react-router)
![!mongo](https://img.shields.io/badge/mongoDB-black?logo=mongodb)
![!jwt](https://img.shields.io/badge/jwtokens-black?logo=json-web-tokens)
![!swagger](https://img.shields.io/badge/swagger-black?logo=swagger)
![!express](https://img.shields.io/badge/express-black?logo=express)    

- [Funcionalidades](#requisites)
- [Instructions](#instructions)



## Funcionalidades <a name="requisites"></a>

O desafio foi desenvolver uma aplicação WEB ou APP, para controlar Alunos e Professores em suas Turmas, referentes às séries do Ensino Fundamental, em uma Escola Pública.
Baseado na descrição dos requisitos, decidi pelos seguintes perfis de usuário:
- Admin: cria, edita e apaga escolas, além de vincular usuários diretores a UMA escola cadastrada
- Diretores: criam, editam e apagam turmas na escola, podendo vincular pessoas usuárias professoras a cada turma
- Docentes:
  - podem ser vinculados a um número ilimitado de turmas em diversas escolas
  - podem adicionar e remover estudantes nessas turmas
  - podem adicionar e ver comentários nas turmas às quais estão vinculados
  - podem adicionar e ver comentários a cada estudante em suas turmas
  
  

- *Back-end:* Optei pela arquitetura MSC e usei [**MongoDB**](https://docs.mongodb.com/) para persistência de dados.  
Usei Node.js e [**Express**](https://expressjs.com/), [**JWT**](https://jwt.io/) para login e sessão, além de aproveitar um middleware simplificado de log e *error handling* feito por um colega de turma e usado em um de nossos projetos em grupo, nos permitindo melhorar o código.  
**Documentação a ser feita** usando o [**Swagger**](https://swagger.io) (ficará disponível em `localhost:3001/documentation`).

- *Front-end:* Usei [**React**](https://reactjs.org/) com *React Context API* e [*React Router*](https://reactrouter.com/).  
No design utilizei CSS puro e uma paleta de cores sugerida pelo [*NordTheme*](https://www.nordtheme.com/).

##### [back to top](#top)

## Instruções <a name="instructions"></a>

**Clone** o repo ou faça o **download** do zip (e depois extraindo em alguma pasta local, naturalmente).

Acessar a pasta do projeto via terminal e rodar `npm install`. (você precisará do *Node.js* instalado em sua máquina).

Para iniciar a API **back-end**: entre na pasta *back-end* e execute `npm start`.   
> (**bonus a fazer**: a documentação da API está em `localhost:3001/documentation`)

Para iniciar o **front-end**: acesse a pasta *front-end* e execute `npm start`.  

Para rodar **back-end tests (a implementar)** (com relatório de cobertura): acesse a pasta *back-end* e execute `npm run test-coverage`.  

#### Importante: mongoDB precisa estar instalado e com o serviço ativo em sua máquina para o back-end funcionar.

##### [back to top](#top)
