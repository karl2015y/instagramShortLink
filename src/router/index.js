import { createRouter, createWebHistory  } from 'vue-router'




const routes = [
    { path: '/', component: () => import('/src/view/create_link.vue') },
    { path: '/go/:id', component:  () => import('/src/view/goto.vue')  },
]


export const router = createRouter({
    history: createWebHistory (),
    routes, 
})