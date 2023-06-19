
import {createRouter, createWebHistory} from 'vue-router';

import Home from "@/views/Home.vue";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/uganda', name: 'Uganda', component: ()=>import('@/views/Uganda.vue')},
    {path: '/kenya', name: 'Kenya', component: ()=>import('@/views/Kenya.vue')},
    {path: '/rwanda', name: 'Rwanda', component: ()=>import('@/views/Rwanda.vue')},
    {path: '/Tanzania', name: 'Tanzania', component: ()=>import('@/views/Tanzania.vue')},
    {path: '/destination/:id', name: 'destination.show', component: ()=>import('@/views/DestinationShow.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'location-active-link'
})

export default router