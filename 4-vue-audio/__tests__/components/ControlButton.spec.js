import { mount } from "@vue/test-utils";

import ControlButton from "../../src/components/ControlButton.vue";

const wrapper = mount(ControlButton, {
  propsData: {
    mustPlay: true
  }
});

describe("ControlButton.vue", () => {
  it("should have the mustPlay prop with 'true' value", () => {
    expect(wrapper.vm.$props.mustPlay).toBe(true);

    const btnControlAudio = wrapper.findComponent({ ref: "btnControlAudio" });
    expect(btnControlAudio.element.className).toBe("play");
  });

  it("should call the 'toggleMustPlay' event when the button is clicked", async () => {
    expect(wrapper.vm.$props.mustPlay).toBe(true);
    const spy = jest.spyOn(wrapper.vm, "controlAudio");

    const btnControlAudio = wrapper.findComponent({ ref: "btnControlAudio" });
    await btnControlAudio.trigger("click");

    expect(spy).toHaveBeenCalled();
    expect(wrapper.emitted().audioPlay).toEqual([[]]);
    expect(wrapper.emitted().toggleMustPlay).toEqual([[]]);
  });
});