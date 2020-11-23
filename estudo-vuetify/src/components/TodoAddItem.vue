<template>
  <v-container>
    <v-text-field
      type="text"
      placeholder="Type a new task to increment the list"
      v-model="newTaskMessage"
    ></v-text-field>
    <v-layout justify-end>
      <v-btn class="p-4" dark color="teal" @click="emitAddTask"
        >ADD <v-icon right dark>playlist_add</v-icon></v-btn
      >
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      newTaskMessage: "",
    };
  },
  methods: {
    emitAddTask() {
      if (!this.newTaskMessage) return null;

      this.$emit("add-task", { message: this.newTaskMessage });
      this.newTaskMessage = "";
      return null;
    },
  },
};
</script>
