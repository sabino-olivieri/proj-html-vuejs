<script>
export default {
    data() {
        return {
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
    <header class="d-flex align-items-center">
        <div class="container">
            <div class="row justify-content-between align-items-center py-2">
                <div class="col-auto d-flex align-items-center">
                    <router-link :to="{ name: 'home' }">
                        <img src="../assets/img/logo.png" alt="">
                    </router-link>
                </div>

                <div class="col-auto d-flex align-items-center">
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
                        <li class="d-flex align-items-center p-2"><i class="fa-solid fa-magnifying-glass"></i></li>
                        <li class="d-flex align-items-center p-2"><i class="fa-solid fa-bars"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
header {
    position: sticky;
    height: 100px;
    font-family: "Source Sans Pro", sans-serif;
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
    }

    .ms_nav:hover, i:hover {
            color: var(--ms-primary-color);
            

            &::before {
                // font-size: 0.9rem;
                width: 100px;
            }
        }

        .ms_nav::before {
            content: "\f178";
            position: absolute;
            display: inline-block;
            font: var(--fa-font-solid);
            left: -1.3rem;
            color: #ff4612;
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

        li {
            transition: color 0.5s;
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
                opacity: 0;
                z-index: 10;
                -webkit-transition: top .15s ease-out;
                -o-transition: top .15s ease-out;
                transition: all .5s ease-out;
                

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
                        font-weight: 100;
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
        }
    }

    // debug
    border: 1px solid black;
}
</style>