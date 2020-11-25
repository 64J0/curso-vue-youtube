const actions = {
  addTask(context, payload) {
    context.commit("addTask", payload);
  },
  editTask(context, payload) {
    context.commit("editTask", payload);
  },
  completeTask(context, payload) {
    context.commit("completeTask", payload);
  },
  destroyTask(context, payload) {
    context.commit("destroyTask", payload);
  },
};

export default actions;
