import { mount } from "@vue/test-utils";

import ProgressBar from "../../src/components/ProgressBar.vue";

const wrapper = mount(ProgressBar, {
  propsData: {
    duration: 10,
    currentTime: 1,
    elementSize: 100,
    windowSize: 1000
  }
});

describe("ProgressBar.vue", () => {
  it("should have the same propsData as defined", () => {
    expect(wrapper.props()).toEqual({
      duration: 10,
      currentTime: 1,
      elementSize: 100,
      windowSize: 1000
    });
  });
});