import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ApartmentList from './pages/ApartmentList.vue';
import DetailsApartment from './pages/DetailsApartment.vue';

const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/apartments',
            name: 'apartments',
            component: ApartmentList
        },
        {
            path: '/apartments/:slug',
            name: 'details-apartment',
            component: DetailsApartment
        }
    ]
});

export { router };