<template>
  <div id="app" @change="getWindowSize()">
    {{ getCurrentTime }}
    {{ getWindowSize }}
    <div id="progress-bar">
      <div id="progress"></div>
    </div>
    <ProgressTrack :currentTime="audioObj.currentTime" />
    <button @click="playAudio()">Play</button>
    <button @click="pauseAudio()">Pause</button>
  </div>
</template>

<script>
import ProgressTrack from "./components/ProgressTrack.vue";

export default {
  name: "App",
  data() {
    return {
      audioFile: {
        src: "http://soundbible.com/mp3/creepy-background-daniel_simon.mp3",
      },
      audioObj: {},
      duration: 1,
      getWindowSize: window.innerWidth,
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
  created() {
    this.audioObj = new Audio(this.audioFile.src);
    this.duration = this.audioObj.duration;
  },
  components: {
    ProgressTrack,
  },
};
</script>

<style>
#progress-bar {
  margin: 1rem;
  height: 20px;
  background-color: rgba(128, 0, 128, 0.3);
}

#progress {
  height: 20px;
  width: 500px;
  background-color: rgba(128, 0, 128, 0.8);
}
</style>
