import Vue from "vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";

import TodoTitle from "../../src/components/TodoTitle.vue";

Vue.use(Vuetify);
let wrapper;

describe("TodoItem Component", () => {
  beforeAll(() => {
    wrapper = mount(TodoTitle);
  });

  it("should have the string 'TO-DO APP' in the title", async () => {
    const app_title = wrapper.findComponent({ ref: "app-title" });

    expect(app_title.text()).toBe("TO-DO APP");
  });
});