import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '../views/HomePage/HomePage.vue';
import FormPage from '../views/FormPage/FormPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Início",
    component: HomePage
  },
  {
    path:"/cadastro",
    name:"Cadastro",
    component: FormPage
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;