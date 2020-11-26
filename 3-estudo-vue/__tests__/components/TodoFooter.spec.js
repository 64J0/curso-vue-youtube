import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";

import TodoFooter from "../../src/components/TodoFooter.vue";

Vue.use(Vuetify);
let wrapper;

describe("TodoFooter Component", () => {
  beforeAll(() => {
    wrapper = shallowMount(TodoFooter);
  });

  it("should have the text 'Made with'", () => {
    const textEl = wrapper.findComponent({ ref: "footer-text-el" });
    expect(textEl.text()).toContain("Made with");
  });
});