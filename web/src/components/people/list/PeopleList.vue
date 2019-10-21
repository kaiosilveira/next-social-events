<template>
  <div>
    <h1>Pessoas</h1>
    <div>
      <router-link to="/people/form">Adicionar</router-link>
    </div>
    <div v-for="person in people" :key="person.id">
      <div class="person-box">
        <p>#{{person.id}}: {{person.name}}</p>
        <div>
          <button @click="deletePerson(person.id)">Remover</button>
          <button @click="editPerson(person.id)">Editar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [],
      searchText: ""
    };
  },
  created: function() {
    this.people = JSON.parse(localStorage.getItem("people"));
  },
  methods: {
    deletePerson: function(id) {
      this.people = this.people.filter(person => person.id !== id);
      localStorage.setItem("people", JSON.stringify(this.people));
    },
    editPerson: function(id) {
      this.$router.push(`/people/form/${id}`);
    }
  }
};
</script>

<style lang="scss">
.person-box {
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 2px 4px 4px #eee;
  margin: 1em 0;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>