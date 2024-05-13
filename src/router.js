import {createRouter} from "vue-router";

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
            name: "about"
            component: AboutPage
        },
        {
            path: "/contacts",
            name: "contacts"
            component: ContactsPage
        },

    ]
});