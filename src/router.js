import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ApartmentList from './pages/ApartmentList.vue';
import DetailsApartment from './pages/DetailsApartment.vue';
import ContactOwner from './pages/ContactOwner.vue';

const routes = [
    { path: '/', name: 'home', component: AppHome },
    { path: '/about', name: 'about', component: AppAbout },
    { path: '/apartments', name: 'apartments', component: ApartmentList },
    { path: '/apartments/:slug', name: 'details-apartment', component: DetailsApartment },
    { path: '/contact-owner/:apartmentId', name: 'contact-owner', component: ContactOwner }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export { router };