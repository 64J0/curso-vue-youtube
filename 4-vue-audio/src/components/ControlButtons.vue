<template>
  <div id="control-buttons">
    <button id="play" @click="emitPlayAudio()">Play</button>
    <button id="pause" @click="emitPauseAudio()">Pause</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitPlayAudio() {
      this.$emit("audioPlay");
    },
    emitPauseAudio() {
      this.$emit("audioPause");
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  width: 150px;
  margin: 0.5rem 3rem;
  padding: 0.5rem;
  border: 2px solid #03a9f4;
  border-radius: 0.25rem;
  outline: none;
}

#control-buttons {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

#play {
  background-color: #03a9f4;
  color: #fff;
}

#pause {
  background-color: #fff;
  color: #03a9f4;
}
</style>