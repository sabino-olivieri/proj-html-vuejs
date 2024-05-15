<script>
import {store} from "../store";
import AppSidebar from './AppSidebar.vue';

export default {
  components: { AppSidebar },
    data() {
        return {
            store,
            searchIsVisible: false,
            navList: [
                {
                    title: "homes",
                    subTitle: ["Main Home", "Buisness coaching", "Blog divided", "Grid home", "Coaching events", "Wellness coaching", "Landing"],
                    link: "home"
                },
                {
                    title: "pages",
                    subTitle: ["About us", "About me", "Become a coach", "Pricing plans", "Get in touch", "Contact us", "Portfolio lists", "Portfolio layouts", "Portfolio singles", "404 error page"],
                    link: "about"
                },
                {
                    title: "blog",
                    subTitle: ["Standard lists", "Masonry", "Post types"],
                    link: "blog"
                },
                {
                    title: "shop",
                    subTitle: ["Product list", "Product single", "Shop layouts", "Shop pages"],
                    link: "shop"
                },
                {
                    title: "events",
                    subTitle: ["Event day", "Event list", "Event list", "Event calendar", "Single event", "Event types"],
                    link: "event"
                },
                {
                    title: "elements",
                    subTitle: [],
                    link: "element"
                },
            ]
        }
    }
}
</script>

<template>
    <header class="d-flex align-items-center" :class="store.isHeaderHome ? 'header-home' : 'header-normal' ">
        <AppSidebar />
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-auto d-flex align-items-center">
                    <router-link :to="{ name: 'home' }">
                        <img src="../assets/img/logo.png" alt="">
                    </router-link>
                </div>

                <div class="col-auto d-flex align-items-center">

                    <div class="ms_search-bar d-flex align-items-center" :class="searchIsVisible ? '' : 'ms_hidden'">
                        <input type="text" placeholder="Search...">
                        <i class="fa-solid fa-x" @click="searchIsVisible = false"></i>
                    </div>
                    <div class="ms_overlay" :class="searchIsVisible ? '' : 'ms_hidden'" @click="searchIsVisible = false"></div>

                    <ul class="d-flex align-items-center gap-5">
                        <li class="d-flex align-items-center ms_nav" v-for="link in navList">
                            <router-link :to="{ name: link.link }" class="nav-link">{{ link.title.toUpperCase()
                                }}</router-link>
                            <div class="sub-menu-container">
                                <div class="sub-menu">
                                    <ul>
                                        <li v-for="sublink in link.subTitle"> {{ sublink }}</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex align-items-center p-2"><i class="fa-solid fa-magnifying-glass" @click="searchIsVisible = true"></i></li>
                        <li class="d-flex align-items-center p-2"><i class="fa-solid fa-bars" @click="store.isSidebar = true"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>

.header-home {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
}

.header-normal {
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 999;
}

header {
    width: 100%;
    height: 100px;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--ms-bold-color);

    .container,
    .row,
    .col-auto {
        height: 100%;
    }

    img {

        max-width: 150px;
    }

    i {
        cursor: pointer;
        transition: color 0.5s;

        &:hover {
            color: var(--ms-primary-color);
        }
    }
    .ms_nav .nav-link {
        transition: color 0.5s;
    }

    .ms_nav .nav-link:hover {
        color: var(--ms-primary-color);
            

            &::before {
                // font-size: 0.9rem;
                width: 100px;
            }
        }

        .ms_nav .nav-link::before {
            content: "\f178";
            position: absolute;
            display: inline-block;
            font: var(--fa-font-solid);
            left: -1.3rem;
            color: var(--ms-primary-color);
            font-size: 1.2rem;
            overflow: hidden;
            width: 0;
            transition: all 0.5s;
            cursor: pointer;


        }

    ul {
        list-style: none;
        margin: 0;
        height: 100%;

        .fa-magnifying-glass {
            transform: rotatey(180deg);
        }

        .ms_nav {
            position: relative;
            height: 100%;

            &:hover .sub-menu-container {
                height: 300px;
                opacity: 1;
                visibility: visible;
                overflow: visible;
            }

            .sub-menu-container {
                color: #bdbdbd;
                position: absolute;
                display: block;
                left: -14px;
                top: 100%;
                height: 0px;
                visibility: hidden;
                overflow: hidden;
                
                z-index: 10;
                transition: all 0.5s ease;
                

                .sub-menu {
                    
                    position: relative;
                    display: block;
                    padding: 0;
                    margin: 0;
                    z-index: 997;

                    ul {

                        position: relative;
                        display: inline-block;
                        vertical-align: middle;
                        background-color: #191516;
                        padding: 38px 0 42px;
                        width: 300px;

                        li {
                        padding: 10px 30px;
                        font-weight: 400;
                        font-size: 1rem;
                        cursor: pointer;

                        &:hover {
                            color: white;
                        }
                        
                    }
                    }


                }
            }
        }


        .fa-bars {
            line-height: unset;
        }

        .router-link-active {
            color: var(--ms-primary-color);
            &::after {
            content: "\f178";
            position: absolute;
            font: var(--fa-font-solid);
            left: -1.3rem;
            color: var(--ms-primary-color);
            font-size: 1.2rem;
            width: auto;
            }
        }
    }

    .ms_search-bar {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9999;
        height: 100%;
        width: 100%;
        padding: 0px 20px;
        background-color: white;
        transition: all 0.3s;

        input {
            padding: 10px;
            border: 0;
            width: 100%;

            &:focus {
                outline: 0;
            }

        }
        .fa-x{
            position: absolute;
            right: 30px;
        } 
    }

    .ms_overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: 100;
    }

    .ms_hidden {
    width: 0;
    opacity: 0;
    z-index: -1;
    overflow: hidden;
}

}
</style>