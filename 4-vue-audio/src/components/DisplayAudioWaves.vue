<template>
  <div id="displayInfo" :style="{ width: elementSize + 'px' }">
    <p>Playing: {{ songName }}</p>
    <canvas :width="WIDTH" :height="HEIGHT"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    songName: String,
    elementSize: Number,
    audioEl: HTMLAudioElement,
  },
  data() {
    return {
      audioCtx: null,
      analyser: null,
      WIDTH: 300,
      HEIGHT: 150,
      canvas: null,
      canvasCtx: null,
    };
  },
  methods: {
    setAnalyser() {
      this.audioCtx = new AudioContext();
      this.analyser = this.audioCtx.createAnalyser();
      const src = this.audioCtx.createMediaElementSource(this.audioEl);

      src.connect(this.analyser);
      this.analyser.fftSize = 64;
      this.analyser.connect(this.audioCtx.destination);
    },
    mainLoop() {
      const frqBits = this.analyser.frequencyBinCount;
      const step = (this.WIDTH / 2.0) / frqBits;
      const data = new Uint8Array(frqBits);
      let x = 0;

      this._setCanvas();
      this.analyser.getByteFrequencyData(data);

      this.canvasCtx.lineWidth = 2;
      this.canvasCtx.strokeStyle = "#9F9";
      this.canvasCtx.beginPath();

      data.reverse();
      this.canvasCtx.moveTo(x, 150 / 2);
      x = this._drawLine(data, x, step);
      data.reverse();
      x = this._drawLine(data, x, step);
      this.canvasCtx.lineTo(this.WIDTH, this.HEIGHT / 2);
      this.canvasCtx.stroke();

      this.animId = requestAnimationFrame(this.mainLoop);
    },
    _setCanvas: function () {
      const canvColor = "#03a9f4";
      this.canvasCtx.clearRect(0, 0, this.WIDTH, this.HEIGHT);

      if (!canvColor) return;

      this.canvasCtx.fillStyle = canvColor;

      this.canvasCtx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
    },
    _drawLine: function (data, x, step) {
      const h = 150;
      let y = 0;
      data.forEach((v, i) => {
        y = h * (255 - v) / 510;
        if (i % 2) y = h - y;
        this.canvasCtx.lineTo(x, y);
        x += step;
      })
      return x;
    },
  },
  mounted() {
    this.canvas = this.$el.querySelector("canvas");
    this.canvasCtx = this.canvas.getContext("2d");

    this.audioEl.addEventListener("play", () => {
      if (!this.audioCtx) this.setAnalyser();
      this.mainLoop();
      if (this.audioCtx) { // not defined for waveform
        this.audioCtx.resume();
      }
    });

    this.audioEl.addEventListener("pause", () => {
      if (this.audioCtx) {
        this.audioCtx.suspend();
      }
    });
  },
  beforeDestroy () {
    if (this.audioCtx) {
      this.audioCtx.suspend();
    }
    cancelAnimationFrame(this.animId);
  }
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
  border: 1px solid rgba(3, 169, 244, 0.3);
  margin-bottom: 4px;
}
</style>