<template>
  <div>
    <input type="text" v-model="nome" />
    <h2>Nome do cliente: {{ nome }}</h2>
    <h3>Idade do cliente: {{ idade }}</h3>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "Vinícius Gajo",
      numero: "123",
      email: "vinicius@gajo.com.br",
      idade: 23,
    };
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>