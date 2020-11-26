import { mount } from "@vue/test-utils";

import calculateBornYear from "../../src/utils/calculateBornYear";
import Cliente from "../../src/components/Cliente.vue";

const cliente = {
  nome: "Teste Alves",
  email: "teste@alves.com",
  idade: 23,
  premium: false
};

const wrapper = mount(Cliente, {
  propsData: {
    cliente
  }
});

describe("Cliente.vue", () => {
  it("should display the name of the user", () => {
    const userName = wrapper.findComponent({ ref: "cliente.nome" });
    expect(userName.text()).toBe("Nome: Teste Alves");
  });

  it("should display the email of the user", () => {
    expect(wrapper.vm.$props.cliente.email).toBe("teste@alves.com");

    const userEmail = wrapper.findComponent({ ref: "cliente.email" });
    const uppercaseEmail = "teste@alves.com".toUpperCase();
    expect(userEmail.text()).toBe(`E-mail: ${uppercaseEmail}`);
  });

  it("should display the age of the user", () => {
    const userAge = wrapper.findComponent({ ref: "cliente.idade" });
    expect(userAge.text()).toBe("Idade: 23 anos");
  });

  it("should display the born year of the user", () => {
    const bornYearUser = wrapper.findComponent({ ref: "cliente.nascimento" });
    const bornYear = new Date().getFullYear() - cliente.idade;
    expect(bornYearUser.text()).toBe(`Ano de nascimento: ${bornYear}`);
  });

  it("should change the name of the user when the correct input is modified", async () => {
    const inputName = wrapper.findComponent({ ref: "model.cliente.nome" });
    await inputName.setValue("Abacate Silva");
    expect(wrapper.vm.$props.cliente.nome).toBe("Abacate Silva");
  });

  it("should change the age of the user when the correct input is modified", async () => {
    const bornYearUser = wrapper.findComponent({ ref: "cliente.nascimento" });
    const inputAge = wrapper.findComponent({ ref: "model.cliente.idade" });
    await inputAge.setValue(28);

    const bornYear = calculateBornYear({ idade: 28 });
    // expect(bornYearUser.text()).toBe(`Ano de nascimento: ${bornYear}`);
    expect(wrapper.vm.$props.cliente.idade).toBe("28");
  });

  it("should change the premium property when the user clicks in a button", async () => {
    const btn_premium = wrapper.findComponent({ ref: "btn.premium" });
    await btn_premium.trigger("click");

    expect(wrapper.vm.$props.cliente.premium).toBe(true);
    await btn_premium.trigger("click");

    expect(wrapper.vm.$props.cliente.premium).toBe(false);
  });

  it("should delete a user register when the user clicks in a button", async () => {
    const spy = jest.spyOn(wrapper.vm, "emitirEventoDelete");
    const btn_deletar = wrapper.findComponent({ ref: "btn.deletar" });
    await btn_deletar.trigger("click");
    expect(spy).toHaveBeenCalled();
  });
});