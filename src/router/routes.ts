import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import ProductViewVue from "@/views/ProductView.vue";
import CategoryView from '@/views/CategoryView.vue'
import PublicView from '@/views/PublicView.vue'
import PreviewCard from '@/views/PreviewCard.vue'
import OrderView from '@/views/OrderView.vue'


const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/preview/:id",
        component: PreviewCard,
    },
    {
        path: "/order/:id",
        component: OrderView,
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
    // strict: true,
    scrollBehavior(to, from, savedPosition) {
        const isProductRoute = to.path.startsWith('/product/');
        const isPreviewRoute = to.path.startsWith('/preview/');
        const isOrderRoute = to.path.startsWith('/order/');

        if (isProductRoute || isPreviewRoute || isOrderRoute) {
            return { top: 0 };
        }
        else if (savedPosition) {
            console.log('Position', savedPosition)
            return savedPosition;
        } else if (to.hash) {
            return { el: to.hash, behavior: 'smooth' };
        } else {
            return { left: 0, top: 0 };
        }
    }
});

export default router;
