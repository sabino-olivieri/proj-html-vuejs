<script>
export default {
    data() {
        return {
            carouselImage: ["h1-img-01", "h1-img-02", "h1-img-03"],
            imageActive: 0,
        }
    },
    methods: {
        getImagePath(Image) {
            return new URL(`../assets/img/carousel-founder/${Image}.jpg`, import.meta.url).href;
        }

    },

    created() {
        setInterval(() => {
            if(this.imageActive < this.carouselImage.length - 1) {
                this.imageActive++;
            } else {
                this.imageActive = 0;
            }
        }, 5000)
    }

}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="ms_carousel">
                    <div class="ms_carousel-item" :class="index === imageActive ? 'ms_active' : ''" v-for="(imageName, index) in carouselImage">
                        <img :src="getImagePath(imageName)" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container {
    padding: 100px 0;


    .ms_carousel {
        width: 50%;
        aspect-ratio: 4/3;
        display: flex;

        .ms_carousel-item {
            width: 0;
            
            overflow: hidden;
            transition: all 1s;

            img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }

        .ms_active {
            width: 100%;
        }
        
    }

}
</style>