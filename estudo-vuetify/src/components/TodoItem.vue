<template>
  <v-list-tile>
    <v-flex>
      <v-text-field
        type="text"
        color="teal"
        solo
        v-model="messageItem"
        @keyup="editTaskInStore"
        prepend-icon="arrow_right_alt"
      >
        <template slot="append">
          <v-icon
            class="pr-3"
            @mouseup="completeTaskInStore"
            style="cursor: pointer"
          >
            done
          </v-icon>
          <v-icon @mouseup="destroyTaskInStore" style="cursor: pointer">
            clear
          </v-icon>
        </template>
      </v-text-field>
    </v-flex>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    id: String,
    message: String,
  },
  data() {
    return {
      messageItem: this.message,
    };
  },
  methods: {
    editTaskInStore() {
      return this.$store.dispatch({
        type: "editTask",
        payload: {
          id: this.id,
          message: this.messageItem,
        },
      });
    },
    completeTaskInStore() {
      return this.$store.dispatch({
        type: "completeTask",
        payload: {
          id: this.id,
        },
      });
    },
    destroyTaskInStore() {
      return this.$store.dispatch({
        type: "destroyTask",
        payload: {
          id: this.id,
        },
      });
    },
  },
};
</script>
