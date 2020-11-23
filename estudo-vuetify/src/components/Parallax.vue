<template>
  <v-parallax height="920" :src="image">
    <h1>{{ mensagem }}</h1>
    <div class="reload-btn">
      <v-btn large color="primary">
        <p>Reload</p>
        <v-btn flat icon color="green">
          <v-icon>cached</v-icon>
        </v-btn>
      </v-btn>
    </div>
  </v-parallax>
</template>

<script>
export default {
  props: {
    mensagem: String,
  },
  name: "Parallax",
  data() {
    return {
      image: null,
    };
  },
  created() {
    this.image = "https://source.unsplash.com/random/1600x900";
  },
};
</script>

<style scoped>
p {
  border: 1px solid red;
  color: black;
}
</style>
