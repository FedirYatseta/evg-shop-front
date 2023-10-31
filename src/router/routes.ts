import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import ProductViewVue from "@/views/ProductView.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/product",
        component: ProductViewVue,
    },
    {
        path: "/about",
        component: About,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
    strict: true
});

export default router;
