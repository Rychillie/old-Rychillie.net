---
postID: "0000002"
title: "Usando SCSS/SASS no NextJS"
description: "Para aqueles que preferem uma liberdade de estilização no website, SCSS ou SASS é uma das melhores alternativas no meio dos seletores SCSS."
thumbnail_bg: "#b0b0cf"
layout: post
postDay: "04"
postMonth: "Out"
image: /assets/images/book-on-notebook.png
headerImage: true
tag:
  - Nextjs
  - SCSS
  - SASS
  - CSS
star: false
category: blog
---

SASS ou SCSS é uma das melhores alternativas no meio dos seletores SCSS. Nele você consegue ter um controle maior do seu código CSS, e também pode usar o CSS-in-JS para criar estilos dinâmicos, muito utilizado em Frameworks como Boostrap. Por isso e muito mais ele foi minha escolha para estilização no meu blog. E por isso venho compartilhar o meu processo para instalação e utilização do SCSS/SASS em projetos NextJS.

```bash
// Você pode usar via NPM
npm install sass && npm install node-sass

// Ou via Yarn
yarn add sass && yarn add node-sass
```

Agora vamos adicionar um Plugin do NextJS para uma melhor performace, então começamos instalando o pacote do Sass e NextJS.

```bash
// Você pode usar via NPM
npm install @zeit/next-sass

// Ou via Yarn
yarn add @zeit/next-sass
```

Logo após vamos a configuração do Plugin do NextJS, editando o arquivo _"next.config.js"_ na raiz do seu projeto, caso o seu projeto não tenha um crie na raiz do seu projeto.

```js
const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  /* Leia mais sobre aqui: https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
  cssModules: true,
});

module.exports = {
  /* Adicione sua pasta de arquivos SCSS */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
```

Este artigo tem como inspiração um artigo criado por Rajdeep Singh no Medium, [acesse aqui](https://medium.com/officialrajdeepsingh/how-to-add-sass-scss-in-next-js-77a2b34f1ff3) o post original em inglês.
