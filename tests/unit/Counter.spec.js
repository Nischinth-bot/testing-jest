import { mount } from "@vue/test-utils";
import Counter from "../../src/components/Counter.vue";

describe("Counter", () => {
  it("Clicking increment once renders 1", async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find("#add");
    await button.trigger("click");
    expect(wrapper.html()).toContain("Counter = 1");
  });

  it("Clicking increment twice renders 2", async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find("#add");
    await button.trigger("click");
    await button.trigger("click");
    expect(wrapper.html()).toContain("Counter = 2");
  });

  it("Clicking increment thrice renders 3", async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find("#add");
    await button.trigger("click");
    await button.trigger("click");
    await button.trigger("click");
    expect(wrapper.text()).toContain("Counter = 3");
  });
});


describe("Counter", () => {
  it("Clicking decrement once renders -1", async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find("#sub");
    await button.trigger("click");
    expect(wrapper.html()).toContain("Counter = -1");
  });

  it("Clicking decrement twice renders 2", async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find("#sub");
    await button.trigger("click");
    await button.trigger("click");
    expect(wrapper.html()).toContain("Counter = -2");
  });

  it("Clicking increment thrice renders -3", async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find("#sub");
    await button.trigger("click");
    await button.trigger("click");
    await button.trigger("click");
    expect(wrapper.text()).toContain("Counter = -3");
  });
});
