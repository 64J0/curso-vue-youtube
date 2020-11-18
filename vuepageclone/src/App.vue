<template>
  <div id="app">
    <div id="green-box"></div>
    <Header />
    <CallToAction />
  </div>
</template>

<script>
import Header from "./components/Header";
import CallToAction from "./components/CallToAction";

export default {
  name: "App",
  components: {
    Header,
    CallToAction,
  },
};
</script>

<style>
*,
input {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input {
  border: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#green-box {
  position: relative;
  top: 0;
  height: 40px;
  background-color: #42b983;
}
</style>
