<template>
  <div id="app">
    <div v-for="cliente in clientes" :key="cliente.id">
      <Cliente :cliente="cliente"></Cliente>
    </div>
  </div>
</template>

<script>
import Cliente from "./components/Cliente";

export default {
  name: "App",
  data() {
    return {
      clientes: [
        {
          id: 1,
          nome: "Vinícius Gajo",
          descricao: "Um dois três",
          idade: 23,
          premium: true,
        },
        {
          id: 2,
          nome: "Vinícius Marques",
          descricao: "Quatro cinco seis",
          idade: 32,
          premium: false,
        },
        {
          id: 3,
          nome: "Vinícius Oliveira",
          descricao: "Sete oito nove",
          idade: 2233,
          premium: false,
        },
      ],
    };
  },
  components: {
    Cliente,
  },
};
</script>

<style>
</style>
