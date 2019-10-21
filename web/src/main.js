import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PeopleForm from './components/people/form/PeopleForm.vue'
import PeopleList from './components/people/list/PeopleList.vue'

const EventList = { template: '<div>EventList works!</div>' }
const EventForm = { template: '<div>EventForm works!</div>' }

const routes = [
  { path: '/people/form', component: PeopleForm },
  { path: '/people/form/:id', component: PeopleForm },
  { path: '/people/list', component: PeopleList },
  { path: '/events/form', component: EventForm },
  { path: '/events/list', component: EventList }
]

const peopleStr = localStorage.getItem('people')
if (!peopleStr) {
  localStorage.setItem('people', JSON.stringify([]))
}

const router = new VueRouter({ routes })

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
