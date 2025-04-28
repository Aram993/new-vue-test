import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import SecondPage from "./pages/SecondPage.vue";
import ThirdPage from "./pages/ThirdPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/main", component: MainPage, alias: "/"},
        {path: "/second", component: SecondPage},
        {path: "/third", component: ThirdPage},
    ],
    linkActiveClass: "active"
})