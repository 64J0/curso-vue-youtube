import { mount } from "@vue/test-utils";

import Formulario from "../../src/components/Formulario.vue";

describe("Formulario.vue", () => {
  it("should display an error message when the user tries to submit the form without any data", async () => {
    const wrapper = mount(Formulario);

    expect(wrapper.findComponent({ ref: "error.message" }).exists()).toBe(false);

    const btnCadastrar = wrapper.findComponent({ ref: "btn.cadastrar" });
    await btnCadastrar.trigger("click");

    expect(wrapper.findComponent({ ref: "error.message" }).exists()).toBe(true);
    expect(wrapper.findComponent({ ref: "error.message" }).text()).toBe("Erro encontrado, tente novamente!");
  });

  it("should display an error message when the user tries to submit the form with only name", async () => {
    const wrapper = mount(Formulario);

    expect(wrapper.findComponent({ ref: "error.message" }).exists()).toBe(false);

    const inputField = wrapper.findComponent({ ref: "nome.field" });
    await inputField.setValue("Abacate Silva");

    const btnCadastrar = wrapper.findComponent({ ref: "btn.cadastrar" });
    await btnCadastrar.trigger("click");

    expect(wrapper.vm.$data.nomeField).toBe("Abacate Silva");
    expect(wrapper.findComponent({ ref: "error.message" }).exists()).toBe(true);
    expect(wrapper.findComponent({ ref: "error.message" }).text()).toBe("Erro encontrado, tente novamente!");
  });

  // ... other form validation combinations ...

  it("should submit the form correctly when all data is informed", async () => {
    const wrapper = mount(Formulario);

    expect(wrapper.vm.$data.nomeField).toBe("");
    expect(wrapper.vm.$data.emailField).toBe("");
    expect(wrapper.vm.$data.idadeField).toBe(0);

    const spy = jest.spyOn(wrapper.vm, "cadastrarUsuario");
    const inputField = wrapper.findComponent({ ref: "nome.field" });
    const emailField = wrapper.findComponent({ ref: "email.field" });
    const ageField = wrapper.findComponent({ ref: "idade.field" });

    await inputField.setValue("Laranja Barros");
    await emailField.setValue("laranja@barros.com");
    await ageField.setValue(40);

    expect(wrapper.vm.$data.nomeField).toBe("Laranja Barros");
    expect(wrapper.vm.$data.emailField).toBe("laranja@barros.com");
    expect(wrapper.vm.$data.idadeField).toBe("40");

    const btn_cadastrar = wrapper.findComponent({ ref: "btn.cadastrar" });
    await btn_cadastrar.trigger("click");

    expect(spy).toHaveBeenCalled();
    expect(wrapper.emitted().addCliente).toBeTruthy();
    expect(wrapper.vm.$data.nomeField).toBe("");
    expect(wrapper.vm.$data.emailField).toBe("");
    expect(wrapper.vm.$data.idadeField).toBe(0);
  });
});