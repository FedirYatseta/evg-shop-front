import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/HelloWorld.vue";
import About from "./components/TheWelcome.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;