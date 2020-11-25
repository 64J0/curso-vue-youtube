import Vue from "vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

import TodoItem from "../../src/components/TodoItem.vue";

import store from "../../src/store";

Vue.use(Vuetify);
let wrapper;

describe("TodoItem Component", () => {
  beforeAll(() => {
    wrapper = mount(TodoItem, {
      store
    });
  });

  it("should move a task to completedArray when 'btn-done' is clicked", async () => {
    wrapper.setProps({ id: "1" });
    const spy = jest.spyOn(wrapper.vm, "completeTaskInStore");

    const btn_done = wrapper.findComponent({ ref: "btn-done" });
    await btn_done.trigger("mouseup");
    expect(spy).toHaveBeenCalled();
    expect(store.state.todoArray.length).toBe(4);
    expect(store.state.completedArray.length).toBe(1);
  });

  it("should move a task to destroyedArray when 'btn-clear' is clicked", async () => {
    wrapper.setProps({ id: "2" });
    const spy = jest.spyOn(wrapper.vm, "destroyTaskInStore");

    const btn_clear = wrapper.findComponent({ ref: "btn-clear" });
    await btn_clear.trigger("mouseup");
    expect(spy).toHaveBeenCalled();
    expect(store.state.todoArray.length).toBe(3);
    expect(store.state.destroyedArray.length).toBe(1);
  });

  it("should update a message in the store when the input value changes", async () => {
    wrapper.setProps({ id: "3" });
    const spy = jest.spyOn(wrapper.vm, "editTaskInStore");

    const input = wrapper.find("input");
    await input.setValue("Atualizando uma tarefa já cadastrada");
    expect(input.element.value).toBe("Atualizando uma tarefa já cadastrada");
    await input.trigger("keyup");

    expect(spy).toHaveBeenCalled();
    expect(store.state.todoArray.length).toBe(3);
    expect(store.state.todoArray[0].message).toBe("Atualizando uma tarefa já cadastrada");
  });
});