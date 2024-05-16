<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },

    mounted() {
        window.addEventListener('scroll', this.closeSidebar);
    },

    methods: {
        closeSidebar() {
            store.isSidebar = false
        }
    }

}
</script>

<template>


    <div class="ms_overlay" :class="store.isSidebar ? '' : 'ms_hidden'" @click="closeSidebar()">
        <div class="ms_sidebar text-center" :class="store.isSidebar ? '' : 'ms_hidden'" @click.stop="">
            <i class="fa-solid fa-x" @click="store.isSidebar = false"></i>
            <img src="../assets/img/logo-side.png" alt="">
            <div class="d-flex justify-content-center">
                <h3>Everlead Theme</h3>
                <span></span>
            </div>

            <a href="https://www.google.com/maps/search/457+BIgBlue+Street,+NY+10013/@40.7217901,-74.0116358,17z/data=!3m1!4b1"
                target="_blank">
                <i class="fa-solid fa-location-dot"></i>
                <span>457 BigBlue Street, NY 10013</span>
            </a>

            <a href="tel:%20(315)%205512-2579" target="_self">
                <i class="fa-solid fa-phone"></i>
                <span>(315) 5512-2579</span>
            </a>

            <a href="mailto:%20everlead@qodeinteractive.com" target="_self">
                <i class="fa-solid fa-envelope"></i>
                <span>everlead@qodeinteractive.com</span>
            </a>

            <div class="ms_form mt-5">
                <input type="text" placeholder="Your Name" class="w-100" aria-label="Insert your name">
                <a href="">SUBSCRIBE</a>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.ms_sidebar {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    width: 530px;
    height: 100vh;
    background-color: var(--ms-bold-color);
    transition: all .6s;
    color: white;
    padding: 50px 70px;

    .fa-x {
        position: absolute;
        right: 30px;
        top: 30px;
        transition: color 0.5s;
        cursor: pointer;
        padding: 10px;

        &:hover {
            color: var(--ms-primary-color);
        }
    }

    div {
        align-items: baseline;
        width: 100%;


        h3 {
            font-family: "Libre Baskerville", serif;
            margin: 25px 0;
            font-size: 2.7rem;

            font-weight: 700;

        }

        span {
            margin-left: 2px;
            display: inline-block;
            width: 8px;
            aspect-ratio: 1/ 1;
            background-color: var(--ms-primary-color);
            border-radius: 50%;
        }
    }

    a {
        text-transform: none;
        display: block;
        margin-bottom: 10px;

        i {
            margin-right: 10px;
            color: var(--ms-primary-color);
        }

        span {
            font-weight: 100;
            color: rgb(210, 210, 210);
        }
    }

    .ms_form {

        border-bottom: 2px solid white;
        position: relative;

        input {
            border: 0;
            background-color: transparent;
            padding: 5px 0;
            color: white;

            &:focus {
                outline: 0;
            }
        }

        a {
            position: absolute;
            transform: translate(0, -50%);
            top: 50%;
            right: 0;
            margin: 0
        }
    }

}

.ms_overlay {
    background-color: rgba(0, 0, 0, 0.332);
    position: fixed;
    z-index: 9998;
    top: 0;
    right: 0;
    width: 100%;
    height: 150vh;
}

.ms_hidden {
    right: -530px;
    z-index: -1;
    overflow: hidden;
    transition: all 0.6s;
}
</style>