import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/pages/index";
import Register from "@/pages/register";
import Edit from "@/pages/edit";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/edit/:id",
      name: "Edit",
      component: Edit
    }
  ]
});
