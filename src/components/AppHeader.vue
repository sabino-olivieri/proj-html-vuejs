<script>
export default {
    data() {
        return {
            navList: [
                {
                    title: "homes",
                    subTitle: [],
                },
                {
                    title: "pages",
                    subTitle: [],
                },
                {
                    title: "blog",
                    subTitle: [],
                },
                {
                    title: "shop",
                    subTitle: [],
                },
                {
                    title: "events",
                    subTitle: [],
                },
                {
                    title: "elements",
                    subTitle: [],
                },
            ]
        }
    }
}
</script>

<template>
    <header class="d-flex align-items-center">
        <div class="container">
            <div class="row justify-content-between py-2">
                <div class="col-auto">
                    <router-link :to="{ name: 'home' }">
                        <img src="../assets/img/logo.png" alt="">
                    </router-link>
                </div>

                <div class="col-auto d-flex align-items-center">
                    <ul class="d-flex gap-5">
                        <li v-for="link in navList">{{ link.title.toUpperCase() }}</li>
                        <li><i class="fa-solid fa-magnifying-glass"></i></li>
                        <li><i class="fa-solid fa-bars"></i></li>
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

    img {
        
        max-width: 150px;
    }

    ul {
        list-style: none;
        margin: 0;

        .fa-magnifying-glass {
            transform: rotatey(180deg);
        }

        li {
            transition: color 0.5s;
            position: relative;
        }

        li:hover {
            color: var(--ms-primary-color);

            &::before {
                // font-size: 0.9rem;
                width: 100px;
            }
        }

        li::before {
            content: "\f178";
            position: absolute;
            display: inline-block;
            font: var(--fa-font-solid);
            left: -1.3rem;
            color: #ff4612;
            font-size: 1.2rem;
            overflow: hidden;
            width: 0;   
            transition: all 0.8s;


        }

        .fa-bars {
            line-height: unset;
        }
    }

    // debug
    border: 1px solid black;
}
</style>