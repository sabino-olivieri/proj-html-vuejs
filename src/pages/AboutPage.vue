<script>
import AppFounder from '../components/AppFounder.vue';
import AppOurSpecialties from '../components/AppOurSpecialties.vue';
import { store } from '../store';

export default {
    components: { AppOurSpecialties, AppFounder },
    data() {
        return {
            store,
            ourSpecialtiesItem: [
                {
                    image: "svg-1.svg",
                    subtitle: "knowing",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing"
                },
                {
                    image: "svg-2.svg",
                    subtitle: "Selling",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing"
                },
                {
                    image: "svg-3.svg",
                    subtitle: "Learning",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing"
                },
                {
                    image: "svg-4.svg",
                    subtitle: "Contact",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing"
                },

            ]
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

    <AppOurSpecialties :itemArray="ourSpecialtiesItem" />

    <AppFounder />
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