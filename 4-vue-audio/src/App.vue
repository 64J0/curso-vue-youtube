<template>
  <div id="app">
    <DisplayInfo
      :elementSize="elementSize"
      :songName="songName"
      :stream="stream"
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
import DisplayInfo from "./components/DisplayInfo.vue";

export default {
  name: "App",
  data() {
    return {
      audioSrc:
        "https://www.bensound.com/bensound-music/bensound-happyrock.mp3",
      audioObj: {},
      duration: 3,
      windowSize: 100,
      elementSize: 100,
      currentTime: 0.1,
      mustPlay: true,
      songName: "Bensound Happyrock",
      stream: null,
    };
  },
  methods: {
    playAudio() {
      return this.audioObj.play();
    },
    pauseAudio() {
      return this.audioObj.pause();
    },
    skipAudio({ percent }) {
      this.mustPlay = false;
      this.audioObj.currentTime = percent * this.duration;
      return this.playAudio();
    },
    toggleMustPlay() {
      return (this.mustPlay = !this.mustPlay);
    },
  },
  mounted() {
    this.audioObj = new Audio(this.audioSrc);
    this.stream = this.audioObj.captureStream();

    this.elementSize = this.$el.clientWidth - 90;
    this.windowSize = window.innerWidth;

    window.addEventListener("resize", () => {
      this.elementSize = this.$el.clientWidth - 90;
      this.windowSize = window.innerWidth;
    });

    this.audioObj.addEventListener("loadedmetadata", (meta) => {
      console.log(meta);
      this.duration = this.audioObj.duration;
    });

    this.audioObj.addEventListener("timeupdate", () => {
      this.currentTime = this.audioObj.currentTime;
    });
  },
  components: {
    ProgressBar,
    ControlButton,
    DisplayInfo,
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
