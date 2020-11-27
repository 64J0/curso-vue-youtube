<template>
  <div id="app">
    <h2>VUE PLAYER</h2>
    {{ windowSize }}
    <ProgressBar
      :currentTime="audioObj.currentTime"
      :windowSize="windowSize"
      :duration="duration"
    />
    <ControlButtons @audioPlay="playAudio()" @audioPause="pauseAudio()" />
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import ControlButtons from "./components/ControlButtons.vue";

export default {
  name: "App",
  data() {
    return {
      audioSrc: "http://soundbible.com/mp3/creepy-background-daniel_simon.mp3",
      audioObj: {},
      duration: 3,
      windowSize: 100,
    };
  },
  computed: {
    getCurrentTime() {
      return this.audioObj.currentTime;
    },
  },
  methods: {
    playAudio() {
      return this.audioObj.play();
    },
    pauseAudio() {
      return this.audioObj.pause();
    },
  },
  mounted() {
    this.audioObj = new Audio(this.audioSrc);
    this.duration = this.audioObj.duration;
    this.windowSize = this.$el.clientWidth;
    window.addEventListener("resize", () => {
      this.windowSize = this.$el.clientWidth;
    });
    this.audioObj.addEventListener("playing", () => {
      console.log("Playing...");
      console.log(this.audioObj.currentTime);
    });
  },
  components: {
    ProgressBar,
    ControlButtons,
  },
};
</script>

<style>
* {
  font-family: monospace;
}

body {
  margin: 0;
  padding: 0;
  outline: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
}

#app {
  margin: 0 auto;
  height: 400px;
  width: 75%;
  max-width: 600px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: 2px solid#03a9f4;
  border-radius: 1rem;
}
</style>
