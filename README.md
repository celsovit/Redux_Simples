# Conhecendo Redux

Embora a simplicidade deste projeto não justifique inicialmente o uso de Redux, dado que todo o controle de estado pode ser facilmente obtido com o uso de `useState`, nosso objetivo é utilizá-lo para demonstrar como implementar e entender o uso do [Redux](https://react-redux.js.org/) para o controle de estado em uma aplicação React.

## Um pouco sobre Redux

#### Fonte: [www.treinaweb.com.br > Marylene Guedes > O que é Redux](https://www.treinaweb.com.br/blog/o-que-e-redux#:~:text=Reducers%3A%20Cada%20dado%20da%20store,foi%20enviada%20para%20o%20store.)

Basicamente o Redux tira a responsabilidade de cada um dos componentes de armazenar os estados, deixando tudo isso centralizado, sendo utilizado ao mesmo tempo por todos os componentes de forma compartilhada. Ele também roda em diferentes ambientes como servidor, cliente e nativo.

Fazendo uso do Redux todos esses estados ficam armazenados em uma árvore de objetos através do store. Para que isso aconteça, o Redux utiliza 3 recursos:

- __Store__ 
    - Você pode pensar em store como um container ou um grande centro de informações, que tem disponibilidade para receber e entregar o que o seu componente requisita. A store armazena de forma centralizada todos os estados da aplicação. Vale ressaltar que a store é imutável.

- __Actions__ 
    - São ações disparadas da aplicação para o store. Elas são criadas através das action creators. As actions são a única forma de acionar uma mudança de estados no store.

- __Reducers__
    -  Cada dado da store deve ter o seu próprio reducer. Ele é encarregado de lidar com todas as ações e especificam como o estado da aplicação irá mudar de acordo com a action que foi enviada para o store.


## A aplicação no navegador

#### Aplicação desenvolvida durante o curso [React + Redux :: Leonardo Leitão](https://www.udemy.com/course/react-redux-pt)

![Tela da aplicação no navegador](./images/tela_app.png)

## Criação do projeto

No terminal de comandos execute os passos abaixo:

```bash

# inicia um novo projeto
$ npx create-react-app redux-simples

# entra no diretório do projeto
cd redux-simples

# instala dependências Redux
npm install redux@^4.0.5 react-redux@^7.2.0

```

## Primeira Implementação

Nesta primeira etapa, no desenvolvimento sem Redux, utilizamos o estado local _(useState)_ do componente App para compartilhar valores entre os componentes filhos, como [Media](./src/components/without_redux/Media.jsx), [Soma](./src/components/without_redux/Soma.jsx), [Sorteio](./src/components/without_redux/Sorteio.jsx) e [Intervalo](./src/components/without_redux/Intervalo.jsx). Isso foi alcançado através de [comunicação direta](https://douglasabnovato.medium.com/comunica%C3%A7%C3%A3o-entre-componentes-em-reactjs-27a89c38f33a), onde os valores e as funções de mudança de estado foram passados como props para os componentes filho, como o Intervalo. Essa abordagem permitiu que os estados fossem atualizados indiretamente a partir de componentes de Input na interface do navegador.

> Os arquivos [App.js](./src/without_redux/App.js), [App.css](./src/without_redux/App.css), [index.js](./src/without_redux/index.js) e [index.css](./src/without_redux/index.css) deste estágio estão na página `without_redux`.


## Segunda Implementação

Nesta etapa estamos substituindo o controle baseado em estado local _(useState)_ no componente [App](./src/without_redux/App.js) pela [Redux Store](https://redux.js.org/tutorials/fundamentals/part-4-store), um armazenamento centralizado disponibilizado pelo Redux.

Vejamos a seguir, o que muda:

#### Arquivo Index.js

No [index.js](./src/index.js) vamos recuperar a Redux Store e compartilha-la com a árvore de componentes através do componente [Provider](https://react-redux.js.org/api/provider) do React-Redux.

#### Arquivo storeConfig.js

O arquivo [storeConfig.js](./src/store/storeConfig.js) é responsável por configurar os diferentes reducers e retornar a Redux Store criada.

### Acesso aos estados da Store

Para que componentes como [Media](./src/components/without_redux/Media.jsx), [Soma](./src/components/without_redux/Soma.jsx), [Sorteio](./src/components/without_redux/Sorteio.jsx) e [Intervalo](./src/components/without_redux/Intervalo.jsx) possam ter acesso às variáveis de estado, estes precisam exportar a função [connect](https://react-redux.js.org/api/connect) que recebe como parâmetro uma função que mapeia o estado _(state)_ para uma _props_. Com isso a função do componente poderá receber o estado como um parâmetro _props_, como exemplificado abaixo:

```javascript
import React from 'react'
import { connect } from 'react-redux'

function MeuComponente(props) {
    const { variavelEstado1, variavelEstadoN } = props

    return <div>Componente</div>
}

function mapStateToProps(state) {
    const result = { 
        variavelEstado1: state.variavelEstado1,
        variavelEstado2: state.variavelEstadoN,
    }

    return result
}

export default connect(mapStateToProps)(MeuComponente)
```

A função connect é um [Decorator](https://blog.lsantos.dev/javascript-decorators/) _(design pattern)_ e usa a função _mapStateToProps_ para preparar o objeto _props_ que será passado para a função que define o componente React.

### Atualização de estado na Store

Da mesma forma que existe uma função _(mapStateToProps)_ que mapeia o estado _(state)_ para propriedades _(props)_ do componente, é necessário também uma função _(mapDispatchToProps)_ que passa funções que são chamadas para atualizar os estados da Store, ou seja, a função que define o componente recebe em _props_ tanto os estados quanto as funções capazes de alterar tais estados.

Veja a seguir uma atualização do código exibido anteriormente, agora podendo também atualizar as variáveis de estado:

```javascript
// imports

function MeuComponente(props) {
    const { variavelEstado1, variavelEstadoN } = props

    return (
        <div>
            <input type="number" 
                   value={ variavelEstado1 }
                   onChange={ e => props.alteracao1(+e.target.value) }
            />
        </div>
    )
}

function mapStateToProps(state) {
    // mesmo conteúdo anterior
}

function mapDispatchToProps(dispatch) {
    const result = {
        alteracao1(novoNumero) {
            dispatch( alterarVariavelEstado1(novoNumero) )
        },
        alteracaoN(novoNumero) {
            dispatch( alterarVariavelEstadoN(novoNumero) )
        }
    }
}
```

Neste projeto o componente [Intervalo](./src/components/without_redux/Intervalo.jsx) possui dois elementos Input que precisam alterar as variáveis de estado _min_ e _max_. 

## Dica VSCode
Ao utilizar a extensão `Material Icon Theme` _(Philipp Kief)_, junto ao nome da extensão tem uma engrenagem que ao ser clicada dá acesso a um menu que oferece a opção `Configurações de Extensão`. 

Entre as configurações possíveis, a opção `Material-icon-theme > Folders > Associations` permite personalizar os ícones que são exibidos para os diferentes arquivos e pastas do projeto.

Para este projeto fiz a seguinte configuração:
```json
    ...
    "material-icon-theme.folders.associations": {
        "widgets": "components",
        "front-angular": "font",
        "front-react": "React-Components",
        "front-vue": "vue",
        "store": "Redux-store",
        "actions": "redux-actions",
        "reducers": "redux-reducer",
    },
    ...
```
