<template>
  <div id="control-buttons">
    <button
      :class="{ play: mustPlay, pause: !mustPlay }"
      @click="controlAudio()"
      ref="btnControlAudio"
    >
      {{ mustPlay ? "Play" : "Pause" }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    mustPlay: Boolean,
  },
  methods: {
    controlAudio() {
      this.mustPlay ? this.$emit("audioPlay") : this.$emit("audioPause");
      this.$emit("toggleMustPlay");
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
  border-radius: 0.25rem;
  outline: none;
  border: 2px solid #03a9f4;
}

#control-buttons {
  display: flex;
  justify-content: center;
  width: 100%;
}

.play {
  background-color: #03a9f4;
  color: #fff;
}

.pause {
  background-color: #fff;
  color: #03a9f4;
}
</style>