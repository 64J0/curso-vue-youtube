import { mount } from "@vue/test-utils";

import App from "../src/App.vue";

const wrapper = mount(App);

describe("App.vue", () => {
  it("should be a Vue instance", () => {
    expect(wrapper.vm._isVue).toBeTruthy();
  });
});