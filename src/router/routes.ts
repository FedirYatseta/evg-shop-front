import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import ProductViewVue from "@/views/ProductView.vue";
import CategoryView from '@/views/CategoryView.vue'
import PublicView from '@/views/PublicView.vue'
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
        path: "/product/:id",
        component: ProductViewVue,
    },
    {
        path: "/category",
        component: CategoryView,
    },
    {
        path: "/public",
        component: PublicView,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
    strict: true
});

export default router;
