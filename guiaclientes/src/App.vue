<template>
  <div id="app">
    <!-- <div v-for="cliente in clientes" :key="cliente.id">
      <Cliente :cliente="cliente"></Cliente>
    </div> -->
    <Formulario />
  </div>
</template>

<script>
// import Cliente from "./components/Cliente";
import Formulario from "./components/Formulario";

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
    // Cliente,
    Formulario,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: monospace;
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
