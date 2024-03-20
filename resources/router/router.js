import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Tr from "../src/i18n/translation.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [
        {
            path: "/:locale?",
            component: RouterView,
            beforeEnter: Tr.routeMiddleware,
            children: [
                {
                    path: '',
                    name: 'mainLayout',
                    component: () => import('../src/layout/MainLayout.vue')
                },
                {
                    path: 'projects',
                    name: 'projects',
                    component: () => import('../src/pages/Projects.vue')
                },
                {
                    path: 'about',
                    name: 'about',
                    component: () => import('../src/pages/AboutMe.vue')
                },
                {
                    path: 'contacts',
                    name: 'contacts',
                    component: () => import('../src/pages/Contacts.vue')
                },

            ]
        }
    ]
})

export default router


