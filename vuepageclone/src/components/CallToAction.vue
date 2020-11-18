<template>
  <div id="call-to-action">
    <div id="main-left">
      <img src="https://vuejs.org/images/logo.png" alt="Vue logo" />
    </div>
    <div id="main-right">
      <h1 id="title">The Progressive JavaScript Framework</h1>
      <div id="button-area">
        <button type="button" id="btn-principal">WHY VUE.JS?</button>
        <button type="button" id="btn-secondary">GET STARTED</button>
        <button type="button" id="btn-github">GITHUB</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#call-to-action {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  box-sizing: border-box;
  padding: 40px;
  margin: 0 auto;
  text-align: left;
  max-width: 900px;
}

#main-left img {
  width: 215px;
  height: 215px;
}

#main-right {
  margin: 1% 0 0 3rem;
}

#main-right #title {
  margin-top: 1%;
  font-size: 3.2rem;
  font-weight: 100;
  letter-spacing: 0.1rem;
}

button[type="button"] {
  margin-right: 0.5rem;
  min-width: 8rem;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 2rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  cursor: pointer;
}

#btn-principal {
  border: 2px solid #42b983;
  background-color: #42b983;
  color: #fff;
}

#btn-secondary {
  border: 2px solid #42b983;
  color: #42b983;
  background-color: #fff;
}
</style>