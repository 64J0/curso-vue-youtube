<template>
  <div :class="{ cliente: true, 'cliente-premium': cliente.premium }">
    <h4>Nome: {{ cliente.nome }}</h4>
    <hr />
    <p>E-mail: {{ cliente.email }}</p>
    <p>Idade: {{ cliente.idade }}</p>
    <hr />
    <span>Nome: </span>
    <input type="text" v-model="cliente.nome" />
    <span>Idade: </span>
    <input type="text" v-model="cliente.idade" />
    <hr />
    <button @click="setPremium">Mudar Premium</button> <br />
    <button @click="emitirEventoDelete">Deletar Usuário</button>
  </div>
</template>

<script>
export default {
  props: {
    cliente: Object,
  },
  data() {
    return {
      cor: "#11ff44",
    };
  },
  methods: {
    setPremium() {
      this.cliente.premium = !this.cliente.premium;
    },
    emitirEventoDelete() {
      this.$emit("deleteCliente", { id: this.cliente.id });
    },
  },
};
</script>

<style scoped>
.cliente {
  margin: 20px auto;
  padding: 15px;
  border-radius: 8px;
  max-width: 500px;
  max-height: 500px;
  background-color: #1f4;
}

.cliente-premium {
  background-color: black;
  color: gold;
}
</style>