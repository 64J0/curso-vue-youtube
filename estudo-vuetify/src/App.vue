<template>
  <v-app>
    <v-layout align-center justify-center>
      <v-flex xs11 sm9 md7 lg5 xl3>
        <v-card class="mb-5 elevation-10">
          <TodoTitle />
          <TodoAddItem @add-task="addTask" />
          <v-list v-for="todo in todoList" :key="todo.id">
            <TodoItem
              :id="todo.id"
              :message="todo.message"
              @edit-task="editTask"
              @complete-task="completeTask"
              @destroy-task="destroyTask"
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

export default {
  name: "App",
  components: {
    TodoItem,
    TodoAddItem,
    TodoTitle,
    TodoFooter,
  },
  data() {
    return {
      todoList: [
        { id: "1", message: "Study Vue.js" },
        { id: "2", message: "Study Vuetify" },
        { id: "3", message: "Study Vuex" },
        { id: "4", message: "Post in LinkedIn" },
      ],
      completedList: [],
      destroyedList: [],
    };
  },
  methods: {
    addTask({ message }) {
      const newTaskObject = {
        id: Date.now().toString(),
        message,
      };

      this.todoList.push(newTaskObject);
      return console.log("Task has been added");
    },
    editTask({ id, message }) {
      const newTodoList = this.todoList.map((task) => {
        if (task.id === id) {
          Object.assign(task, { message });
        }
        return task;
      });

      this.todoList = newTodoList;
      return null;
    },
    completeTask({ id }) {
      const filteredTodoList = this.todoList.filter((task) => {
        if (task.id === id) {
          this.completedList.push(task);
          return false;
        }

        return true;
      });

      this.todoList = filteredTodoList;
      return null;
    },
    destroyTask({ id }) {
      const filteredTodoList = this.todoList.filter((task) => {
        if (task.id === id) {
          this.destroyedList.push(task);
          return false;
        }
        return true;
      });

      this.todoList = filteredTodoList;
      return null;
    },
  },
};
</script>
