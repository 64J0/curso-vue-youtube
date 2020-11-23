<template>
  <div id="app">
    <Parallax mensagem="Mensagem 1" />
    <Parallax mensagem="Mensagem 2" />
    <Parallax mensagem="Mensagem 3" />
  </div>
</template>

<script>
import Parallax from "./components/Parallax.vue";

export default {
  name: "App",
  components: {
    Parallax,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  display: flex;
  font-family: monospace;
  font-size: 14px;
}

#app {
  width: 100%;
  align-self: center;
  text-align: center;
}

img {
  width: 100vh;
  height: 100vh;
}

h1 {
  font-size: 7rem;
}
</style>
