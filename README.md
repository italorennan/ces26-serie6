# CES-26: Serie de Exercicios 6 - React
Projeto para implementacao de uma calculadora em React.

### Tecnologias
Projeto desenvolvido com [React](https://pt-br.reactjs.org/), com a dependencias Redux.

### Execucao
Para executar no computador, deve ser rodado o script:

```bash
$ sudo npm start start
```

### Estrutura de arquivos principais
```js
- public
  |- index.css
  |- index.html
- src
  |- App.js
  |- Calculator.js
  |- index.css
  |- index.js
  |- reducer.js
```

### Pasta public
Define a estrutura geral da página visualizada, com o HTML e CSS correspondente.

### Arquivo src/App.js
Define os elementos de props a serem passados para a classe Calculator, linkando ao Redux.

### Arquivo src/Calculator.js
Implementa os botoes da calculadora, indicados pela classe Calculator. Essa classe e exportada e usada em index.js.

### Arquivo src/index.css
Define a estrutura CSS, com os estilos a serem aplicados nos componentes da pagina.

### Arquivo reducer.js
Determina as funcoes do reducer, que sao chamadas nos respectivos botoes da calculadora.

### Arquivo index.js
Estabelece a renderização do componente criado em App para a pagina visualizada.
