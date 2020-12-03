<template>
  <div id="app">
    <DisplayAudioWaves
      :elementSize="elementSize"
      :songName="songName"
      :audioEl="audioEl"
    />
    <h2>VUE PLAYER</h2>
    <ProgressBar
      :currentTime="currentTime"
      :windowSize="windowSize"
      :elementSize="elementSize"
      :duration="duration"
      @customSkip="skipAudio"
    />
    <ControlButton
      :mustPlay="mustPlay"
      @audioPlay="playAudio()"
      @audioPause="pauseAudio()"
      @toggleMustPlay="toggleMustPlay()"
    />
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import ControlButton from "./components/ControlButton.vue";
import DisplayAudioWaves from "./components/DisplayAudioWaves.vue";

export default {
  name: "App",
  data() {
    return {
      audioSrc: "/music/bensound-happyrock.mp3",
      // "https://www.bensound.com/bensound-music/bensound-happyrock.mp3",
      audioEl: null,
      duration: 3,
      windowSize: 100,
      elementSize: 100,
      currentTime: 0.1,
      mustPlay: true,
      songName: "Bensound Happyrock",
    };
  },
  methods: {
    playAudio() {
      return this.audioEl.play();
    },
    pauseAudio() {
      return this.audioEl.pause();
    },
    skipAudio({ percent }) {
      this.mustPlay = false;
      this.audioEl.currentTime = percent * this.duration;
      return this.playAudio();
    },
    toggleMustPlay() {
      return (this.mustPlay = !this.mustPlay);
    },
  },
  created() {
    this.audioEl = document.createElement("audio");
    this.audioEl.crossOrigin = "anonymous";
    this.audioEl.setAttribute("src", this.audioSrc);
  },
  mounted() {
    this.$el.appendChild(this.audioEl);
    this.audioEl.load();

    this.elementSize = this.$el.clientWidth - 90;
    this.windowSize = window.innerWidth;

    window.addEventListener("resize", () => {
      this.elementSize = this.$el.clientWidth - 90;
      this.windowSize = window.innerWidth;
    });

    this.audioEl.addEventListener("loadedmetadata", () => {
      this.duration = this.audioEl.duration;
    });

    this.audioEl.addEventListener("timeupdate", () => {
      this.currentTime = this.audioEl.currentTime;
    });
  },
  components: {
    ProgressBar,
    ControlButton,
    DisplayAudioWaves,
  },
};
</script>

<style>
* {
  font-family: monospace;
  color: #03a9f4;
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
  height: 550px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: 2px solid #03a9f4;
  border-radius: 1rem;
}
</style>
