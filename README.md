# Cadastro de Carros

Sistema web de cadastro e consulta de veículos desenvolvido como atividade avaliativa final da disciplina de Front End.

## Tecnologias Utilizadas

- React (Vite)
- React Router DOM
- Styled Components
- LocalStorage
- Fetch API (Tabela FIPE)
- JavaScript ES6+
- HTML5 semântico

## Funcionalidades

- Cadastro de veículos com marca, modelo, ano, cor e placa
- Seleção de marca e modelo integrada com a API da Tabela FIPE
- Validação de formulário com mensagens de erro
- Listagem de veículos cadastrados em cards
- Página de detalhes de cada veículo
- Exclusão de veículos
- Dados persistidos no LocalStorage

# NavBar.jsx
Primeiro, são importadas as bibliotecas necessárias. O Link é usado para trocar de página sem precisar recarregar o site, enquanto o styled-components permite escrever o CSS diretamente dentro do arquivo JavaScript.Em seguida, é criado o componente Nav, que define a aparência da barra de navegação. Ela possui um fundo escuro, um espaçamento interno para deixar os elementos organizados e uma borda laranja na parte inferior. Além disso, foi configurada para se adaptar a telas menores, deixando os itens um abaixo do outro quando o site é acessado pelo celular.
O componente Logo é responsável por exibir o título "Cadastro de Carros" no menu. O texto aparece em laranja e com um tamanho maior para chamar mais atenção.Já o componente Links organiza os links de navegação. Os links ficam alinhados lado a lado, com cor clara para facilitar a leitura. Quando o usuário passa o mouse sobre eles, a cor muda para laranja, criando um efeito visual simples e agradável.
Por fim, a função Navbar junta todos esses elementos e exibe o menu completo. Ela mostra o título do sistema e dois links: um para a página inicial e outro para a página de cadastro de carros. Dessa forma, o usuário consegue navegar facilmente entre as funcionalidades do sistema.

# Home.jsx
A página Home é responsável por exibir todos os veículos cadastrados no sistema de forma organizada e visualmente agradável. Ao carregar a página, os dados são recuperados do LocalStorage, garantindo que os veículos permaneçam salvos mesmo após fechar ou atualizar o navegador.

Os veículos são apresentados em cards, contendo informações resumidas como marca, modelo, ano, cor e placa. Cada card possui ações que permitem ao usuário visualizar mais detalhes do veículo ou removê-lo do cadastro.

Para a estilização da página, foram utilizados Styled Components, possibilitando a criação de componentes reutilizáveis e um layout responsivo. Os cards se ajustam automaticamente ao tamanho da tela, proporcionando uma boa experiência tanto em computadores quanto em dispositivos móveis.

Além disso, a página exibe uma mensagem informativa quando não há veículos cadastrados, orientando o usuário a realizar seu primeiro cadastro. Dessa forma, a Home funciona como o painel principal do sistema, centralizando a consulta e o gerenciamento dos veículos registrados.

# Cadastro.jsx

# Detalhes.jsx e GlobalStyle.js

## Como Rodar

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`

## Autor

Pierre Bittencourt — [@Pierre-219](https://github.com/Pierre-219)
