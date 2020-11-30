<template>
  <div 
    @mousedown="(e) => getProgressBarPosition(e)" 
    id="progress-bar" 
    :style="{ width: elementSize + 'px' }"
  >
    <div 
      id="progress" 
      :style="{ width: getProgressWidth + 'px' }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    duration: Number,
    currentTime: Number,
    elementSize: Number,
    windowSize: Number,
  },
  computed: {
    getProgressWidth() {
      const percent = this.currentTime / this.duration;
      return percent * this.elementSize;
    },
  },
  methods: {
    getProgressBarPosition(e) {
      const initialPositionX = (this.windowSize - this.elementSize) * 0.5;
      const percent = (e.pageX - initialPositionX) / this.elementSize;
      this.$emit("customSkip", { percent });
    }
  }
};
</script>

<style scoped>
#progress-bar {
  margin: 1rem;
  height: 14px;
  background-color: #81d4fa;
  cursor: pointer;
}

#progress {
  height: 14px;
  background-color: #01579b;
  border-right: 6px solid red;
}
</style>
