import { mount } from "@vue/test-utils";

import App from "../src/App.vue";
import Cliente from "../src/components/Cliente.vue";
import Formulario from "../src/components/Formulario.vue";

const wrapper = mount(App, {
  Cliente,
  Formulario
});

describe(("App.vue"), () => {
  it("should be a Vue instance", () => {
    expect(wrapper.vm._isVue).toBeTruthy();
  });

  it("should delete a client", () => {
    expect(wrapper.vm.$data.clientes.length).toBe(2);
    expect(wrapper.vm.$data.clientes[0].id).toBe(1);

    wrapper.vm.handleDeleteCliente({ id: 1 });

    expect(wrapper.vm.$data.clientes.length).toBe(1);
    expect(wrapper.vm.$data.clientes[0].id).toBe(2);
  });

  it("should add a client", () => {
    expect(wrapper.vm.$data.clientes.length).toBe(1);
    expect(wrapper.vm.$data.clientes[0].id).toBe(2);

    const newClient = {
      cliente: {
        id: 3,
        nome: "Usuário teste 3",
        email: "email_3@teste.com",
        idade: 33,
        premium: true,
      }
    };
    wrapper.vm.handleAddCliente(newClient);

    expect(wrapper.vm.$data.clientes.length).toBe(2);
    expect(wrapper.vm.$data.clientes[0].id).toBe(2);
  });
});