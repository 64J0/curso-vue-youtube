<template>
  <div id="displayInfo" :style="{ width: elementSize + 'px' }">
    <p>Playing: {{ songName }}</p>
    <canvas width="100%"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    songName: String,
    elementSize: Number,
    stream: MediaStream,
  },
  data() {
    return {
      audioCtx: null,
      analyser: null,
      source: null,
    };
  },
  created() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.analyser = this.audioCtx.createAnalyser();
    this.source = this.audioCtx.createMediaStreamSource(this.stream);
    this.source.connect(this.analyser);
    console.log(`Aqui: ${this.audioCtx}`);
  },
};
</script>

<style>
#displayInfo {
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #03a9f4;
  border-radius: 1rem;
  box-shadow: 0px 4px #ccc;
  height: 300px;
}

canvas {
  width: 1px solid #ccc;
}
</style>