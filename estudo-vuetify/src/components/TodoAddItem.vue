<template>
  <v-container>
    <v-text-field
      type="text"
      placeholder="Type a new task to increment the list"
      v-model="newTaskMessage"
    ></v-text-field>
    <v-layout justify-end>
      <v-btn class="p-4" dark color="teal" @click="addTaskToStore"
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
    addTaskToStore() {
      if (!this.newTaskMessage) return null;

      this.$store.dispatch({
        type: "addTask",
        payload: {
          id: Date.now().toString(),
          message: this.newTaskMessage,
        },
      });

      this.newTaskMessage = "";
      return null;
    },
  },
};
</script>
