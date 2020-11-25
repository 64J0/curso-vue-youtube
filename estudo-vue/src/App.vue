<template>
  <v-app>
    <v-layout align-center justify-center>
      <v-flex xs11 sm9 md7 lg5 xl3>
        <v-card class="mb-3 elevation-10">
          <TodoTitle />
          <TodoAddItem />
          <v-list>
            <TodoItem
              v-for="todo in todoArray"
              :key="todo.id"
              :id="todo.id"
              :message="todo.message"
            />
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>

    <TodoFooter />
  </v-app>
</template>

<script>
import TodoTitle from "./components/TodoTitle.vue";
import TodoAddItem from "./components/TodoAddItem.vue";
import TodoItem from "./components/TodoItem.vue";
import TodoFooter from "./components/TodoFooter.vue";

import store from "./store";

export default {
  name: "App",
  store,
  components: {
    TodoItem,
    TodoAddItem,
    TodoTitle,
    TodoFooter,
  },
  computed: {
    todoArray() {
      return this.$store.getters.getTodoArray;
    },
    completedArray() {
      return this.$store.getters.getCompletedArray;
    },
    destroyedArray() {
      return this.$store.getters.getDestroyedArray;
    },
  },
};
</script>
