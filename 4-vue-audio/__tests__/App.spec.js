import { mount } from "@vue/test-utils";

import App from "../src/App.vue";
import ControlButton from "../src/components/ControlButton.vue";
import DisplayAudioWaves from "../src/components/DisplayAudioWaves.vue";
import ProgressBar from "../src/components/ProgressBar.vue";

let wrapper,
  spyPlay;

describe("App.vue", () => {
  beforeAll(() => {
    jest
      .spyOn(window.HTMLMediaElement.prototype, "load")
      .mockImplementation(() => {
        return console.log("Load command has been called")
      });

    wrapper = mount(App, {
      ControlButton,
      DisplayAudioWaves,
      ProgressBar
    });

    console.log(wrapper.vm.audioEl)

    spyPlay = jest
      .spyOn(window.HTMLMediaElement.prototype, "play")
      .mockImplementation(() => {
        return console.log("Play command has been called")
      });
  });

  beforeEach(() => {
    wrapper.vm.mustPlay = true;
  });

  it("should be a Vue instance", () => {
    expect(wrapper.vm._isVue).toBeTruthy();
  });

  it("should play the audio when a function is called", () => {
    wrapper.vm.playAudio();
    expect(spyPlay).toHaveBeenCalledTimes(1);
  });

  it("should pause the audio when a function is called", () => {
    const spy = jest
      .spyOn(window.HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {
        return console.log("Pause command has been called")
      });

    wrapper.vm.pauseAudio();
    expect(spy).toHaveBeenCalled();
  });

  it("should skip the audio when a function is called", () => {
    expect(wrapper.vm.mustPlay).toBe(true);
    wrapper.vm.skipAudio({ percent: 0.5 });
    expect(wrapper.vm.mustPlay).toBe(false);
    expect(wrapper.vm.audioEl.currentTime).toBe(5);
    expect(spyPlay).toHaveBeenCalledTimes(2);
  });

  it("should toggle the mustPlay prop", () => {
    expect(wrapper.vm.mustPlay).toBe(true);
    wrapper.vm.toggleMustPlay();
    expect(wrapper.vm.mustPlay).toBe(false);
    wrapper.vm.toggleMustPlay();
    expect(wrapper.vm.mustPlay).toBe(true);
  });
});