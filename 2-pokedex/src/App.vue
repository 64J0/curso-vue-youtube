<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="title">Pokemon + Vuejs</h1>
      <input
        type="text"
        class="input is-rounded"
        placeholder="Buscar pokemon pelo nome"
        v-model="busca"
        @blur="findPokemon"
      />
      <div v-for="(poke, index) in filteredPokemons" :key="poke.name">
        <Pokemon :num="index" :name="poke.name" :url="poke.url" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Pokemon from "./components/Pokemon";

export default {
  name: "App",
  data() {
    return {
      pokemons: [],
      filteredPokemons: [],
      busca: "",
    };
  },
  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => {
        console.log("Got all pokemon data!!!");
        this.pokemons = response.data.results;
        this.filteredPokemons = this.pokemons;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  components: {
    Pokemon,
  },
  methods: {
    findPokemon() {
      if (!this.busca.trim() || typeof this.busca !== "string") {
        return (this.filteredPokemons = this.pokemons);
      } else {
        return (this.filteredPokemons = this.pokemons.filter(
          (pokemon) => pokemon.name === this.busca.toLowerCase()
        ));
      }
    },
  },
};
</script>

<style>
#app {
  margin: 10px auto;
  text-align: center;
}
</style>
