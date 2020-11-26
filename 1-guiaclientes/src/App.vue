<template>
  <div id="app">
    <Formulario @addCliente="handleAddCliente($event)" />
    <div v-for="cliente in orderClientes" :key="cliente.id">
      <Cliente
        :cliente="cliente"
        @deleteCliente="handleDeleteCliente($event)"
      ></Cliente>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Cliente from "./components/Cliente";
import Formulario from "./components/Formulario";

export default {
  name: "App",
  data() {
    return {
      clientes: [
        {
          id: 1,
          nome: "Vinícius Gajo",
          email: "email_1@teste.com",
          idade: 23,
          premium: true,
        },
        {
          id: 2,
          nome: "Barack Obama",
          email: "email_2@teste.com",
          idade: 32,
          premium: false,
        },
      ],
    };
  },
  components: {
    Cliente,
    Formulario,
  },
  methods: {
    handleDeleteCliente({ id }) {
      this.clientes = this.clientes.filter((cliente) => {
        return cliente.id !== id ? true : false;
      });
    },
    handleAddCliente({ cliente }) {
      this.clientes.push(cliente);
    },
  },
  computed: {
    orderClientes() {
      return _.orderBy(this.clientes, ["nome"], ["asc"]);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  text-align: center;
}

input {
  padding: 4px;
  text-align: left;
}

button {
  width: 50%;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.4s ease-in;
  background-color: rgba(33, 55, 220, 0.7);
}

button:hover {
  transition: background-color 0.4s ease-out;
  background-color: rgba(33, 55, 220, 0.5);
}
</style>
