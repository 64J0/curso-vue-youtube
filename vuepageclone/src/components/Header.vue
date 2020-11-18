<template>
  <header>
    <div id="logo">
      <img src="https://vuejs.org/images/logo.png" alt="Vuejs logo" />
      <span>Vue.js</span>
    </div>

    <div id="search-box">
      <input type="text" />
    </div>

    <ul id="top-menu">
      <li>Learn</li>
      <li>Ecosystem</li>
      <li>Team</li>
      <li>Resources</li>
      <li>Support Vue</li>
      <li>Translations</li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#logo {
  margin-left: 8px;
  font-size: 2rem;
}

#logo img {
  height: 40px;
  display: none;
}

#search-box input {
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  outline: none;
  background: #fff url(https://vuejs.org/images/search.png) 10px 4px no-repeat;
  background-size: 20px;
  border: 1px solid #e3e3e3;
  border-radius: 15px;
  vertical-align: center !important;
  padding: 0 15px 0 30px;
}

#search-box:focus-within input {
  border-color: #42b983;
}

#top-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

#top-menu li {
  margin: 0 8px;
}
</style>