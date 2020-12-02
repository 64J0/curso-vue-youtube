<template>
  <div id="displayInfo" :style="{ width: elementSize + 'px' }">
    {{ audioEl }}
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
      this.analyser.fftSize = 2048;
      this.analyser.connect(this.audioCtx.destination);
    },
    mainLoop() {
      const frqBits = this.analyser.frequencyBinCount
      const step = (this.canvWidth / 2.0) / frqBits
      const data = new Uint8Array(frqBits)
      let x = 0

      this._setCanvas()
      this.analyser.getByteFrequencyData(data)

      this.canvasCtx.lineWidth = this.lineWidth
      this.canvasCtx.strokeStyle = Array.isArray(this.lineColor)
        ? this.fillGradient(this.lineColor)
        : this.lineColor
      this.canvasCtx.beginPath()

      data.reverse()
      this.canvasCtx.moveTo(x, this.canvHeight / 2)
      x = this._drawLine(data, x, step)
      data.reverse()
      x = this._drawLine(data, x, step)
      this.canvasCtx.lineTo(this.canvWidth, this.canvHeight / 2)
      this.canvasCtx.stroke()

      this.animId = requestAnimationFrame(this.mainLoop)
    },
    _setCanvas: function () {
      const w = 300;
      const h = 150;
      const canvColor = "#75a0b2";
      const gradient = this.canvasCtx.createLinearGradient(w / 2, 0, w / 2, h)
      let offset = 0
      this.canvasCtx.clearRect(0, 0, w, h)

      if (!canvColor) return

      if (Array.isArray(canvColor)) {
        canvColor.forEach(color => {
          gradient.addColorStop(offset, color)
          offset += (1 / canvColor.length)
        })
        this.canvasCtx.fillStyle = gradient
      } else {
        this.canvasCtx.fillStyle = canvColor
      }
      this.canvasCtx.fillRect(0, 0, w, h)
    },
    _drawLine: function (data, x, step) {
      const h = 150
      let y = 0
      data.forEach((v, i) => {
        // (h / 2) - v / 255 * (h / 2)
        y = h * (255 - v) / 510
        if (i % 2) y = h - y
        this.canvasCtx.lineTo(x, y)
        x += step
      })
      return x
    },
    fillGradient: function (colorsArray) {
      const w = 300
      const h = 150
      const gradient = this.canvasCtx.createLinearGradient(w / 2, 0, w / 2, h)
      let offset = 0
      colorsArray.forEach(color => {
        gradient.addColorStop(offset, color)
        offset += (1 / colorsArray.length)
      })
      return gradient
    }
  },
  mounted() {
    this.canvas = window.document.querySelector("canvas");
    this.canvasCtx = this.canvas.getContext("2d");

    this.audioEl.addEventListener("play", () => {
      if (!this.audioCtx) this.setAnalyser();
      this.mainLoop()
      if (this.audioCtx) { // not defined for waveform
        this.audioCtx.resume()
      }
    });
  },
  beforeDestroy () {
    if (this.audioCtx) {
      this.audioCtx.suspend()
    }
    cancelAnimationFrame(this.animId)
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