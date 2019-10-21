<template>
  <form @submit="onSubmit">
    <h1>Adicionar Pessoa {{$route.params.id}}</h1>
    <input type="text" placeholder="Nome" v-model="name" />
    <button type="submit">Salvar</button>
  </form>
</template>

<script>
export default {
  title: "Pessoas - Formulário",
  name: "PeopleForm",
  data() {
    return {
      name: "",
      mode: "create",
      id: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    if (this.id) {
      const people = JSON.parse(localStorage.getItem("people"));
      const person = people.find(person => person.id === this.id);
      this.name = person.name;
      this.mode = "edit";
    } else {
      console.log("criando");
    }
  },
  methods: {
    onSubmit: function(e) {
      if (!this.name) {
        alert("O campo nome é de preenchimento obrigatório!");
        e.preventDefault();
        return;
      }

      if (this.mode === "create") {
        this.save(this.name);
      } else {
        this.edit(this.id, { id: this.id, name: this.name });
      }
      this.name = "";
      this.$router.push("/people/list");
    },
    save: function(name) {
      const id = parseInt(Math.random() * 99999).toString();
      const person = { id: id, name: this.name };
      const people = JSON.parse(localStorage.getItem("people"));
      people.push(person);
      localStorage.setItem("people", JSON.stringify(people));
    },
    edit: function(id, person) {
      const people = JSON.parse(localStorage.getItem("people"));
      const updated = people.map(p => (p.id === person.id ? person : p));
      localStorage.setItem("people", JSON.stringify(updated));
    }
  }
};
</script>

<style lang="scss">
</style>