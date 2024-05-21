# Projeto Frontend Capture the Flag

Bem-vindo ao Projeto Frontend Capture the Flag!

Recentemente, chegou ao meu conhecimento que o Frontend Capture the Flag existe, e achei que seria uma maneira muito boa de ajudar os estudantes a entenderem como o conhecimento básico e os fundamentos podem ser importantes.

Este projeto é baseado em um desafio real de capture the flag visto em uma aplicação de emprego, então, esperamos que praticar neste desafio possa realmente te ajudar em uma futura oportunidade. 😄

## Internacionalização

Se necessário, aqui está a lista de outros idiomas suportados nesta documentação até agora (sinta-se à vontade para enviar um PR com outros idiomas):

- [EN-US: American English](README.md)

## Descrição do Projeto

Neste desafio de Capture the Flag (CTF), você precisará completar várias tarefas para capturar uma bandeira e apresentá-la em uma aplicação boilerplate React.

## Começando

### Pré-requisitos

- Conhecimento básico de HTML, CSS e JavaScript
- Conhecimento básico de ReactJS

### Instruções

**POR FAVOR, NÃO OLHE OS ARQUIVOS DO PROJETO**. Dentro da pasta `/blackbox` estão as informações que você não deveria ter em um desafio real, então olhar para elas pode arruinar sua experiência neste desafio casual :P (lembre-se, em um capture the flag real, você não teria acesso aos servidores onde o desafio é executado).

Todas as informações necessárias serão fornecidas durante o desafio à medida que você avança. Quando estiver pronto com a configuração, basta executar `npm run challenge:start` ou `yarn challenge:start` e boa sorte!

### Configuração (como começar)

1. Instale as dependências:
   Certifique-se de que você tem NodeJS e NPM instalados, então execute npm i ou yarn na raiz do projeto.

2. Verifique as variáveis de ambiente:
   Certifique-se de ter as variáveis corretas no arquivo .env (o padrão deve servir para a maioria dos usos).

3. Inicie o desafio:
   Para começar, execute `npm run challenge:start` ou `yarn challenge:start`.

4. Boa sorte e divirta-se! 😄

#### Hospedagem

Se você quiser hospedar o desafio para um workshop, apresentação ou algo dessa natureza, use o `.env`.

- `SERVER_PORT` deve ser onde você está executando o projeto localmente (por exemplo, http://localhost:4000).
- `SERVER_URL` é onde você coloca a URL final gerada por qualquer serviço de túnel, como cloudflare, ngrok, ou algo dessa natureza.

Aqui está um exemplo no cloudflare:
`cloudflared tunnel --url http://localhost:4000`.

## Contribuindo

Contribuições são bem-vindas! Por favor, faça um fork do repositório e crie um pull request com suas mudanças.

## Licença

Este projeto é licenciado sob a Licença MIT.

## Contato

Para quaisquer perguntas ou feedback, por favor, abra uma issue no GitHub.

---

Obrigado por participar do nosso desafio Frontend Capture the Flag! Boa sorte e divirta-se!
