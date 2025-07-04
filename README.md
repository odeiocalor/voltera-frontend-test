# Teste para vaga de Desenvolvedor Front-End

Este projeto consiste em uma aplicação web que consulta a API gratuita [agify.io](https://agify.io) e retorna a estimativa de idade para um nome informado pelo usuário. O objetivo é demonstrar habilidades com SvelteKit, manipulação de query string, debounce, e estilização customizada.

Link da página para teste: https://voltera-frontend-test-flax.vercel.app/

## Tecnologias utilizadas

- SvelteKit
- HTML5
- CSS3 (puro, sem frameworks)
- JavaScript

## Observações

- O SvelteKit foi utilizado para roteamento e carregamento reativo de dados com a função `load`, proporcionando navegação fluida e estrutura moderna ao projeto.
- Todo o CSS foi escrito manualmente, sem uso de frameworks como Tailwind, Bootstrap ou preprocessadores. As cores principais seguem uma paleta personalizada definida em variáveis CSS.
- A fonte Inter foi importada via Google Fonts para um visual mais moderno.
- O input de nome utiliza debounce para evitar chamadas excessivas à API.
- A URL é atualizada dinamicamente com o nome pesquisado, permitindo compartilhamento direto do resultado.
- O resultado é exibido apenas quando há um nome válido na URL.
- O projeto não utiliza bibliotecas externas além das dependências padrão do SvelteKit.

## Instruções para rodar o projeto localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador.

---
