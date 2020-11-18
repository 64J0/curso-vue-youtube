<template>
  <form>
    <h3>Cadastro de cliente</h3>
    <small v-if="error">Erro encontrado, tente novamente!</small>
    <br />
    <span>Nome: </span>
    <input type="text" placeholder="João José" v-model="nomeField" />
    <br />
    <span>E-mail: </span>
    <input type="text" placeholder="joao@email.com" v-model="emailField" />
    <br />
    <span>Idade: </span>
    <input type="number" v-model="idadeField" />
    <hr />
    <button type="button" @click="cadastrarUsuario">Cadastrar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nomeField: "",
      emailField: "",
      idadeField: 0,
      error: false,
    };
  },
  methods: {
    cadastrarUsuario() {
      // TODO: Regex ainda não estão 100%
      const regexNome = /[A-Za-zíãç\s*]+/g; // aaa...
      const regexEmail = /^\w{3,}@\w{3,}.com$/g; // aaa...@aaa....com
      const regexIdade = /^(\d{1,2}|[1][1][0-9])$/; // range: 0 - 119

      const regexResult =
        regexNome.test(this.nomeField.trim()) &&
        regexEmail.test(this.emailField.trim()) &&
        regexIdade.test(this.idadeField);

      if (!regexResult) {
        // console.log("nome " + regexNome.test(this.nomeField));
        // console.log("email " + regexEmail.test(this.emailField));
        // console.log("idade " + regexIdade.test(this.idadeField));
        // console.log(regexResult);
        this.error = true;
        return null;
      }

      this.error = false;

      const cliente = {
        id: Date.now(),
        nome: this.nomeField,
        email: this.emailField,
        idade: this.idadeField,
        premium: false,
      };

      this.emitirEventoAdd(cliente);

      this.nomeField = "";
      this.emailField = "";
      this.idadeField = 0;
    },
    emitirEventoAdd(cliente) {
      this.$emit("addCliente", { cliente });
    },
  },
};
</script>

<style scoped>
form {
  margin: 15px auto;
  padding: 8px;
  max-width: 600px;
  border: 1px solid #1f4;
  border-radius: 8px;
}

input {
  width: 80%;
  margin: 5px;
}

small {
  border: red;
  color: red;
}
</style>