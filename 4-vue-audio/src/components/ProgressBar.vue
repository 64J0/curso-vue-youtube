<template>
  <div id="progress-bar" :style="{ width: getProgressBarWidth + 'px' }">
    <div id="progress" :style="{ width: getProgressWidth + 'px' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    duration: Number,
    currentTime: Number,
    windowSize: Number,
  },
  computed: {
    getProgressBarWidth() {
      return this.windowSize - 90;
    },
    getProgressWidth() {
      // const percent = this.currentTime / this.duration;
      const percent = 0.5;
      return percent * this.getProgressBarWidth;
    },
  },
};
</script>

<style scoped>
#progress-bar {
  margin: 1rem;
  height: 20px;
  background-color: #81d4fa;
}

#progress {
  height: 20px;
  width: 200px;
  background-color: #01579b;
}
</style>
