<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <div v-for="(poke, index) in pokemons" :key="index">
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
    };
  },
  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => {
        console.log("Got all pokemon data!!!");
        this.pokemons = response.data.results;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  components: {
    Pokemon,
  },
};
</script>

<style>
#app {
  margin: 10px auto;
  text-align: center;
}
</style>
