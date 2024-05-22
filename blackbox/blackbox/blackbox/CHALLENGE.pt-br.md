# Capture the flag de Frontend

## O desafio

### Parte 1 (HTML/CSS)

1. Abra este [link]({{SERVER_URL}}/challenge)
2. Encontre uma URL oculta dentro do HTML

- Cada caractere da URL é dado por esta árvore DOM, nesta ordem específica. Você precisa encontrar (na ordem) todas as ocorrências e juntá-las para obter o link.
- O asterisco **(\*)** é um curinga que representa zero ou mais caracteres que podem estar presentes na string. Esses caracteres são irrelevantes para o resultado e devem ser ignorados.
- Pode haver zero ou mais nós DOM entre cada tag válida. Esses nós são irrelevantes para o resultado.
- Pode haver distrações nas informações da descrição deste desafio.
- Qualquer atributo adicional que não interfira com o padrão descrito pode ser ignorado com segurança.

---

Padrão da árvore DOM para cada caractere válido da URL

```html
<code data-class="42*">
  <div data-tag="*36">
    <span data-id="*31*">
      <i class="char" value="VALID_CHARACTER"></i>
    </span>
  </div>
</code>
```

(_Para validar esta etapa, você deve conseguir abrir a URL e obter uma palavra em inglês. Isso significa que você capturou a bandeira!_ 🥳)

---

### Parte 2 (ReactJS)

1. Crie uma aplicação React no CodeSandbox
2. Faça uma requisição HTTP para a URL obtida na etapa 2 para carregar a bandeira em um componente React
   - Não use bibliotecas externas. Use APIs do navegador
   - Renderize um texto "Carregando..." enquanto a requisição está em andamento
3. Renderize a bandeira que você carregou na etapa 4 com as seguintes condições:
   - Simule um efeito de máquina de escrever com um atraso de meio segundo entre cada caractere. _Comece mostrando nada e depois exiba os caracteres um por um até que a string completa seja exibida._
   - Nenhum estilo é necessário
   - Renderize a bandeira como uma lista, onde cada caractere é um item da lista
   - A animação deve disparar após você carregar a bandeira
   - A animação deve rodar apenas uma vez
   - Use apenas APIs do React. Não use CSS ou bibliotecas externas

Bônus: Adicione como um comentário o script que você usou para obter a URL na etapa 2

## Submissão

Abra uma issue no [repositório](https://github.com/WellsSA/reactjs-capture-the-flag) com o título: "Solução CTF".
Cole a bandeira que você capturou na etapa 2 e o link para seu CodeSandbox na aplicação do trabalho com o seguinte formato:

`FLAG - LINK`
