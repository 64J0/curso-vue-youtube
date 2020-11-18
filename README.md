# Códigos do curso de Vue JS - Guia do Programador

Neste repositório podem ser encontrados os códigos criados ao longo do Curso de Vue JS, do canal Victor Lima - Guia do Programador, no YouTube compartilhado de maneira gratuita.

Nestas aulas foi apresentado o funcionamento do Vue através de exemplos práticos. 

Lidamos com:

* Gestão de estados (*data*);
* Emissão de eventos customizados; 
* Componentização, que favorece a reutilização de códigos; 
* Passagem de *props* para componentes específicos;
* Filtros customizados, que transformam apenas a apresentação das informações;
* *Computed properties*, que é um recurso para realmente transformar dados, podendo criar novas propriedades;

**Dica:**

Como criar um projeto com o boilerplate padrão do Vue js (semelhante ao obtido executando o create-react-app):

```bash
# cria o boilerplate do projeto
npx @vue/cli create <nome_do_projeto>
```

## Aplicações

### Primeira aplicação

A primeira aplicação foi criada para mostrar os conceitos mais básicos do Vue. Nela nós não nos preocupamos com detalhes estéticos, focando apenas em apresentar a estrutura do código e possibilidades da ferramenta.

A imagem abaixo ilustra a aplicação, que consiste num sistema de gestão de clientes, onde são salvados o { nome, email, idade }, posteriormente acrescentando os valores de id e uma variável booleana para indicar se o usuário é *premium* ou não.

O resultado pode ser visto na imagem abaixo.

<span style="display: block; text-align: center;">
  <img src="assets/screenshot-guiaclientes.png" alt="Demonstração da aplicação 1" />
</span>

### Segunda aplicação

Já na segunda aplicação iremos criar uma Pokedex consumindo os dados de uma API pública que fornece os dados de todos os Pokemons. Para fazer as requisições é utilizado o *axios* e para facilitar a estilização da página estamos utilizando o framework conhecido como *bulma*.

O resultado deste projeto pode ser visto na imagem abaixo.

<span style="display: block; text-align: center;">
  <img src="assets/screenshot-pokedex.png" alt="Demonstração da aplicação 2" />
</span>

## Referências:

[1] - [Playlist com as aulas do curso no YouTube](https://www.youtube.com/watch?v=npA_f0ztIt0&list=PLJ_KhUnlXUPteacVhunyK5M8SKIadeED0)

---
Vinícius Gajo Marques Oliveira, 2020.