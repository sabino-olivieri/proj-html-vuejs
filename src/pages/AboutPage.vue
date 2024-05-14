<script>
import { store } from '../store';

export default {
    data () {
        return {
            store,
        }
    },
    created() {
        store.isHeaderHome = false;
    }
}
</script>

<template>

    <section class="hero d-flex justify-content-center align-items-center w-100">
        <h1>About us</h1>
    </section>
</template>

<style lang="scss" scoped>
    .hero {
        background-image: url("../assets/img/about-us-title.jpg");
        background-position: center;
        background-size: cover;
        height: 500px;

        h1 {
            font-family: "Libre Baskerville", serif;
            font-size: 4rem;
            color: white;
            font-weight: 700;
        }
    }
</style>