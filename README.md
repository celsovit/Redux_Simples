# Conhecendo Redux

Embora a simplicidade deste projeto não justifique inicialmente o uso de Redux, dado que todo o controle de estado pode ser facilmente obtido com o uso de `useState`, nosso objetivo é utilizá-lo para demonstrar como implementar e entender o uso do [Redux](https://react-redux.js.org/) para o controle de estado em uma aplicação React.

## Resultado no navegador

![Tela da aplicação no navegador](./images/tela_app.png)

### Criação do projeto

No terminal de comandos execute os passos abaixo:

```bash

# inicia um novo projeto
$ npx create-react-app redux-simples

# entra no diretório do projeto
cd redux-simples

# instala dependências Redux
npm install redux@^4.0.5 react-redux@^7.2.0

```

### Primeira Implementação

Nesta primeira etapa, no desenvolvimento sem Redux, utilizamos o estado local _(useState)_ do componente App para compartilhar valores entre os componentes filhos, como [Media](./src/components/without_redux/Media.jsx), [Soma](./src/components/without_redux/Soma.jsx), [Sorteio](./src/components/without_redux/Sorteio.jsx) e [Intervalo](./src/components/without_redux/Intervalo.jsx). Isso foi alcançado através de [comunicação direta](https://douglasabnovato.medium.com/comunica%C3%A7%C3%A3o-entre-componentes-em-reactjs-27a89c38f33a), onde os valores e as funções de mudança de estado foram passados como props para os componentes filho, como o Intervalo. Essa abordagem permitiu que os estados fossem atualizados indiretamente a partir de componentes de Input na interface do navegador.

> Os arquivos [App.js](./src/without_redux/App.js) e [App.css](./src/without_redux/App.css) deste estágio estão na página `without_redux`.


### Segunda Implementação

