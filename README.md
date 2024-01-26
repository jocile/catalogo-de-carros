<div align="center" id="top">

# Catálogo de carros

---

![Github top language](https://img.shields.io/github/languages/top/jocile/catalogo-de-carros?color=56BEB8)
![Github language count](https://img.shields.io/github/languages/count/jocile/catalogo-de-carros?color=56BEB8)
![Repository size](https://img.shields.io/github/repo-size/jocile/catalogo-de-carros?color=56BEB8)
![License](https://img.shields.io/github/license/jocile/catalogo-de-carros?color=56BEB8)
![Github issues](https://img.shields.io/github/issues/jocile/catalogo-de-carros?color=56BEB8)
![Github forks](https://img.shields.io/github/forks/jocile/catalogo-de-carros?color=56BEB8)
![Github stars](https://img.shields.io/github/stars/jocile/catalogo-de-carros?color=56BEB8)

---

[Sobre](#dart-sobre) | [Características](#sparkles-caracteristicas) | [Tecnologias](#rocket-tecnologias) | [Requerimentos](#white_check_mark-requerimentos) | [Iniciando](#checkered_flag-iniciando) | [Referências](#books-referências)

</div>

## :dart: Sobre

Este projeto é desenvolvido com o objetivo de desenvolver um frontend de catálogo de carros, como desafio do Bootcamp de ReactJS [DevSuperior](https://devsuperior.com.br/).

## :sparkles: Caracteristicas

- Layout e navegação de produtos

## :rocket: Tecnologias

- ReactJS
  - Criação de projeto
  - Estrutura do projeto
  - Componentes
  - Importações
  - Uso de imagens
- Layout
  - HTML
  - CSS
    - Estilização manual
    - Flexbox
    - Bootstrap
    - Responsividade
  - Execução de projeto Figma
- Rotas
  - React Router DOM
  - Rotas e links

## :white_check_mark: Requerimentos

Antes de Iniciar :checkered_flag:, é necessário ter o ambiente [NodeJS 18](https://nodejs.org/en), [Git](https://git-scm.com) e [Yarn](https://classic.yarnpkg.com/en/docs/install) instalados.

### Preparando o ambiente para o App React

Alternativas para instalação do NodeJS:

1. Utilizar o [NVM](https://github.com/nvm-sh/nvm) - gerenciador de versões do NodeJS
   - [Instruções para instalar no Linux e Mac](https://github.com/nvm-sh/nvm#installing-and-updating);
   - [Instruções para instalar no Window](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file#nvm-for-windows).
2. [Utilizar o Container Docker](https://docs.docker.com/get-started/02_our_app/) do NodeJS 18.

No caso do uso do NVM seguir com os seguintes comandos no terminal:

- Instalar e usar a versão específica do NodeJS:

```bash
nvm install 18.18.1
nvm use 18
```

- Instalar e usar o Yarn

```bash
npm install -g yarn
```

### Começando um projeto com Create React App

Este projeto foi inicializado com [Criando um React App](https://github.com/facebook/create-react-app).

## :checkered_flag: Iniciando

Execute os comandos no terminal:

- Clone o projeto

```bash
git clone https://github.com/jocile/catalogo-de-carros.git
```

- No diretório do projeto, você pode executar

```bash
yarn
yarn start
```

> Isto irá Executar o aplicativo no modo de desenvolvimento.

- Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

> A página será recarregada se você fizer edições.\
> Você também verá quaisquer erros de lint no console.

### :heavy_check_mark: O comando `test``

- Para inicia o executor de testes no modo de observação interativo digite:

`yarn test`

> Veja a seção sobre [executando testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### :heavy_plus_sign: O comando `build``

- Para construir o aplicativo para produção na pasta `build` digite:

`yarn build`

> Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.\
> A construção é minificada e os nomes dos arquivos incluem os hashes.\
> Seu aplicativo está pronto para ser implantado!\
> Veja a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### :package: Comando `eject``

O comando eject é um comando que permite personalizar a configuração de um projeto criado com create-react-app.

`yarn eject`

**Nota: esta é uma operação única. Uma vez que você `eject`, você não pode voltar!**

Se você não está satisfeito com a ferramenta de construção e as escolhas de configuração, você pode usar `eject` a qualquer momento. Este comando removerá a única dependência de construção do seu projeto.

Ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por sua conta.

Você não precisa usar `eject`. O conjunto de recursos é adequado para pequenas e médias implantações, e você não deve se sentir obrigado a usar este recurso. No entanto, esta ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.

## :books: Referências

- :link: [Recursos para o Frontend](https://github.com/devsuperior/dscatalog-resources/blob/9b5846b1157b296c3012f16c817f70ad1929fa6f/frontend-web/README.md)
- :art: [Protótipos de tela para o Frontend no Figma](https://www.figma.com/file/H1SC2bo3Zaycm3mJxkkMC4/bds-desafio-layout)
- :wrench: [TreinaWeb - Instalando e gerenciando várias versões do NodeJS](https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm/)
- :whale: [Criando um Container de Desenvolvimento no Visual Studio Code](https://code.visualstudio.com/docs/devcontainers/create-dev-container)
- :books: Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).
- :books: Para aprender React, confira a [documentação do React](https://reactjs.org/).
- :art: [W3Schools Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- :art: [Flexbox](https://flexboxfroggy.com/)
- :art: [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox)
