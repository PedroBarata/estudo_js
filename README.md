# Estudos javascript

Projeto para testes de estudo em JavaScript.

## Getting Started

Existem arquivos ```.js``` que são arquivos com alguns exemplos de testes para entender o funcionamento.

### Prerequisites

Precisa apenas do ```node``` e do ```npm```.

### Installing

Com o node e o npm instalados, basta usar:

```
npm start <nome_do_arquivo.js>
```
Pois o projeto conta com o nodemon para subir um servidor local em js. Assim, ao salvar o arquivo para algum teste, ele executa novamente o arquivo (hot reload).

### Arquivos

#### this.js

Arquivo de estudo do funcionamento da palavra reservada ```this```.

Usabilidades:
* Dentro de uma arrow function:  
   * o ```this``` 'não existe' dentro do Arrow Function, ou seja ele pega o 'this' do escopo acima dele (caso esteja dentro de um objeto, como esse, solto no arquivo ```.js```, pega o escopo global) - Chamado de escopo léxico.

* Dentro de uma função comum:  
   * o ```this``` é sobrescrito para o escopo onde a função de encontra - Escopo dinâmico.
   
## Built With

* [npm](https://www.npmjs.com/) - Gerenciador de pacotes (npm)
* [node](https://nodejs.org) - Node 
* [nodemon](https://nodemon.io/) - Nodemon