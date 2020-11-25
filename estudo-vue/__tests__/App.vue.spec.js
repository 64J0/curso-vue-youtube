import Vue from "vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

import TodoTitle from "../src/components/TodoTitle.vue";
import TodoAddItem from "../src/components/TodoAddItem.vue";
import TodoItem from "../src/components/TodoItem.vue";
import TodoFooter from "../src/components/TodoFooter.vue";

import App from "../src/App.vue";

import store from "../src/store";

Vue.use(Vuetify);
let wrapper;

describe("App", () => {
  it("should has computed object", () => {
    expect(typeof App.computed).toBe("object");
  });
});

describe("Mounted App", () => {
  beforeAll(() => {
    wrapper = mount(App, { store });
  });

  it("should be a Vue instance", () => {
    expect(wrapper.vm._isVue).toBeTruthy();
  });

  it("should contain TodoTitle component instance", () => {
    const todoTitle = wrapper.findComponent(TodoTitle);
    expect(todoTitle.exists()).toBe(true);
  });

  it("should contain TodoAddItem component instance", () => {
    const todoAddItem = wrapper.findComponent(TodoAddItem);
    expect(todoAddItem.exists()).toBe(true);
  });

  it("should contain TodoItem component instance", () => {
    const todoItem = wrapper.findComponent(TodoItem);
    expect(todoItem.exists()).toBe(true);
  });

  it("should contain TodoFooter component instance", () => {
    const todoFooter = wrapper.findComponent(TodoFooter);
    expect(todoFooter.exists()).toBe(true);
  });

  it("should have 5 items in the todoArray computed properties", () => {
    expect(wrapper.vm.todoArray.length).toBe(5);
  });

  it("should have 0 items in the completedArray computed properties", () => {
    expect(wrapper.vm.completedArray.length).toBe(0);
  });

  it("should have 0 items in the destroyedArray computed properties", () => {
    expect(wrapper.vm.destroyedArray.length).toBe(0);
  });
});
