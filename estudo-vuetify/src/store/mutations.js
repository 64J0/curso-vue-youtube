const mutations = {
  addTask(state, { payload }) {
    state.todoArray.push(payload);
    console.log("Task has been added");
    return null;
  },
  editTask(state, { payload }) {
    const { id, message } = payload;

    const newTodoArray = state.todoArray.map((task) => {
      if (task.id === id) {
        Object.assign(task, { message });
      }
      return task;
    });

    state.todoArray = newTodoArray;
    return null;
  },
  completeTask(state, { payload }) {
    const { id } = payload;
    const filteredTodoArray = state.todoArray.filter((task) => {
      if (task.id === id) {
        state.completedArray.push(task);
        return false;
      }

      return true;
    });

    state.todoArray = filteredTodoArray;
    return null;
  },
  destroyTask(state, { payload }) {
    const { id } = payload;
    const filteredTodoArray = state.todoArray.filter((task) => {
      if (task.id === id) {
        state.destroyedArray.push(task);
        return false;
      }

      return true;
    });

    state.todoArray = filteredTodoArray;
    return null;
  },
};

export default mutations;
