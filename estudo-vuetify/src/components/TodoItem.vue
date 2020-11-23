<template>
  <v-list-tile>
    <v-flex>
      <v-text-field
        type="text"
        color="teal"
        solo
        v-model="messageItem"
        @keyup="emitEditTask"
        prepend-icon="arrow_right_alt"
      >
        <template slot="append">
          <v-icon
            class="pr-3"
            @mouseup="emitCompleteTask"
            style="cursor: pointer"
          >
            done
          </v-icon>
          <v-icon @mouseup="emitDestroyTask" style="cursor: pointer">
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
    emitEditTask() {
      return this.$emit("edit-task", {
        id: this.id,
        message: this.messageItem,
      });
    },
    emitCompleteTask() {
      return this.$emit("complete-task", {
        id: this.id,
      });
    },
    emitDestroyTask() {
      return this.$emit("destroy-task", {
        id: this.id,
      });
    },
  },
};
</script>
