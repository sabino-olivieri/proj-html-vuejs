import {createRouter, createWebHistory} from "vue-router";
import HomePage from './pages/HomePage.vue'
import ContactsPage from './pages/ContactsPage.vue'
import AboutPage from './pages/AboutPage.vue'

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

    ]
});