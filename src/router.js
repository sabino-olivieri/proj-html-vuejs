import {createRouter, createWebHistory} from "vue-router";
import HomePage from './pages/HomePage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import AboutPage from './pages/AboutPage.vue';
import BlogPage from './pages/BlogPage.vue';
import ElementPage from './pages/ElementPage.vue';
import EventPage from './pages/EventPage.vue';
import ShopPage from './pages/ShopPage.vue';

export const router = createRouter({
    history: createWebHistory(),  
    routes: [
        {
            path: "/",    
            name: "home",    
            component: HomePage 
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage
        },
        {
            path: "/contacts",
            name: "contacts",
            component: ContactsPage
        },
        {
            path: "/blog",
            name: "blog",
            component: BlogPage
        },
        {
            path: "/elements",
            name: "element",
            component: ElementPage
        },
        {
            path: "/events",
            name: "event",
            component: EventPage
        },
        {
            path: "/shop",
            name: "shop",
            component: ShopPage
        },

    ]
});