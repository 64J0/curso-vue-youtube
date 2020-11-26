<template>
  <div :class="{ cliente: true, 'cliente-premium': cliente.premium }">
    <h4 ref="cliente.nome">Nome: {{ cliente.nome }}</h4>
    <hr />
    <p ref="cliente.email">E-mail: {{ cliente.email | processarEmail }}</p>
    <p ref="cliente.idade">Idade: {{ cliente.idade }} anos</p>
    <p ref="cliente.nascimento">Ano de nascimento: {{ bornYear }}</p>
    <hr />
    <span>Nome: </span>
    <input type="text" v-model="cliente.nome" ref="model.cliente.nome" />
    <span>Idade: </span>
    <input type="text" v-model="cliente.idade" ref="model.cliente.idade" />
    <hr />
    <button @click="setPremium()" ref="btn.premium">Mudar Premium</button>
    <br />
    <button @click="emitirEventoDelete()" ref="btn.deletar">
      Deletar Usuário
    </button>
  </div>
</template>

<script>
import calculateBornYear from "../utils/calculateBornYear";

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
  filters: {
    processarEmail(value) {
      return String(value).toUpperCase();
    },
  },
  computed: {
    bornYear() {
      return calculateBornYear({ idade: this.cliente.idade });
    },
  },
};
</script>

<style scoped>
.cliente {
  margin: 20px auto;
  padding: 15px;
  border-radius: 8px;
  max-width: 600px;
  max-height: 500px;
  background-color: #1f4;
}

.cliente-premium {
  background-color: black;
  color: gold;
}

button,
input {
  margin: 4px;
}
</style>