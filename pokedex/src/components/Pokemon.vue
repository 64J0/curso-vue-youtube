<template>
  <div class="pokemon">
    <div class="card">
      <div class="card-image">
        <figure>
          <img
            style="width: 40%; height: 40%"
            :src="isFront ? pokemon.front : pokemon.back"
            :alt="name"
          />
        </figure>
      </div>

      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ num + 1 }}: {{ name | upper }}</p>
            <span
              class="subtitle is-6"
              v-for="(t, index) in pokemon.types"
              :key="index"
            >
              <small :class="t.type.name + ' pokemon-type'">
                {{ t.type.name }}
              </small>
            </span>
          </div>
        </div>
        <div class="content">
          <button
            class="button is-medium is-fullwidth is-primary"
            @click="handleChangeSprite"
          >
            Mudar sprite
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    axios
      .get(this.url)
      .then((response) => {
        this.pokemon = {
          types: response.data.types,
          front: response.data.sprites.front_default,
          back: response.data.sprites.back_default,
        };
      })
      .catch((err) => {
        console.error(err);
      });
  },
  props: {
    num: Number,
    name: String,
    url: String,
  },
  data() {
    return {
      isFront: true,
      pokemon: {
        types: [],
        front: "",
        back: "",
      },
    };
  },
  filters: {
    upper(value) {
      // verificacoes
      if (typeof value !== "string") return value;
      if (value.length && value.length < 1) return value;

      let newName = value.charAt(0).toUpperCase() + value.slice(1);
      return newName;
    },
  },
  methods: {
    handleChangeSprite() {
      return (this.isFront = !this.isFront);
    },
  },
};
</script>

<style>
img {
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}

div.pokemon {
  margin: 8px;
}
</style>