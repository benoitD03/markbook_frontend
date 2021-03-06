import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login"
import Signup from "../views/Signup"
import Home from "../views/Home.vue";
import InProgressBooks from "../views/InProgressBooks";
import WishList from "../views/WishList";
import AllUsers from '../views/AllUsers';
import OneUser from '../views/OneUser';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/inprogressbooks",
    name: "InProgressBooks",
    component: InProgressBooks,
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: WishList,
  },
  {
    path: "/markbookeurs",
    name: "AllUsers",
    component: AllUsers,
  },
  {
    path: "/markbookeur",
    name: "OneUser",
    component: OneUser,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
