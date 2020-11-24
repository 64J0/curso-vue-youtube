import Vue from "vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

import TodoAddItem from "../src/components/TodoAddItem.vue";

import store from "../src/store";

Vue.use(Vuetify);
let wrapper;

describe("TodoAddItem Component", () => {
  beforeAll(() => {
    wrapper = mount(TodoAddItem, { store });
  });

  it("should do nothing when the user clicks in the Add Button but the input component is empty", async () => {
    const spy = jest.spyOn(wrapper.vm, "addTaskToStore");

    const btn = wrapper.findComponent({ ref: "add-task-btn" });
    await btn.trigger("click");
    // expect(spy).toHaveBeenCalled();
    expect(store.state.todoArray.length).toBe(5);
  });

  it("should update the store when a new item is added", async () => {
    const spy = jest.spyOn(wrapper.vm, "addTaskToStore");

    const input = wrapper.find("input");
    await input.setValue("Nova tarefa sendo cadastrada");
    expect(input.element.value).toBe("Nova tarefa sendo cadastrada");

    const btn = wrapper.findComponent({ ref: "add-task-btn" });
    await btn.trigger("click");
    expect(spy).toHaveBeenCalled();
    expect(input.element.value).toBe("");

    const lastItem = store.state.todoArray.length - 1;
    expect(store.state.todoArray[lastItem].message).toBe("Nova tarefa sendo cadastrada");
    expect(store.state.todoArray.length).toBe(6);
  });
});