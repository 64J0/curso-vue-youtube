<template>
  <v-container>
    <v-layout column>
      <v-text-field
        type="text"
        placeholder="Type a new task to increment the list"
        v-model="newTaskMessage"
        ref="add-task-input"
      ></v-text-field>
      <v-layout justify-end>
        <v-btn
          class="p-3"
          dark
          color="teal"
          @click="addTaskToStore()"
          ref="add-task-btn"
          >ADD <v-icon right dark>playlist_add</v-icon></v-btn
        >
      </v-layout>
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
