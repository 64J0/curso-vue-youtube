<template>
  <div :class="{ cliente: true, 'cliente-premium': cliente.premium }">
    <h4>Nome: {{ cliente.nome }}</h4>
    <hr />
    <p>Descricao: {{ cliente.descricao }}</p>
    <hr />
    <p>Idade: {{ cliente.idade }}</p>
    <hr />
    <h4>Edição:</h4>
    <span>Nome: </span>
    <input type="text" v-model="cliente.nome" />
    <span>Idade: </span>
    <input type="text" v-model="cliente.idade" />
  </div>
</template>

<script>
export default {
  props: {
    // descricao: String,
    // idade: Number,
    // premium: Boolean,
    cliente: Object,
  },
  data() {
    return {
      nome: "Vinícius Gajo",
      numero: "123",
    };
  },
};
</script>

<style scoped>
.cliente {
  margin: 20px auto;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  max-height: 500px;
  background-color: #1f4;
}

.cliente-premium {
  background-color: black;
  color: gold;
}
</style>