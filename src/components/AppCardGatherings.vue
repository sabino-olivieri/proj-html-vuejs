<script>
export default {
    props: {
        obj: Object
    },

    methods: {
        getImagePath(Image) {
            return new URL(`../assets/img/our-gatherings/port-list-img-${Image}.jpg`, import.meta.url).href;
        },

    }
}
</script>

<template>
    <div class="div card-g">
        <img :src="getImagePath(obj.image)" alt="">
        <div class="ms_text p-4">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex">
                        <h3>{{obj.title}}</h3>
                        <span></span>
                    </div>
                    <div class="col">
                        <p>
                            {{obj.subTitle}}
                        </p>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-g {
    width: 100%;
    aspect-ratio: auto 1100 / 773;
    overflow: hidden;
    position: relative;


    img {
        object-fit: cover;
        max-width: 100%;
        transition: all 0.5s;
    }

    &:hover img {
        transform: scale(105%);

    }


    .ms_text {
        position: absolute;
        z-index: 10;
        width: 100%;
        bottom: 0;
        left: 0;
        visibility: hidden;
        transform: translateY(100%);
        color: white;
        background-color: var(--ms-bold-color);
        transition: all 0.5s ease;

        .col-12 {
            align-items: baseline;
            width: 100%;

            h3 {
                font-family: "Libre Baskerville", serif;
                font-weight: 700;
                font-size: 1.1rem;

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

        p {
            font-family: "Source Sans 3", sans-serif;
            font-weight: 300;
            font-size: 1rem;
            margin: 0;
        }
    }

    &:hover .ms_text {
        height: auto;
        visibility: visible;
        transform: translateY(0);
    }
}
</style>