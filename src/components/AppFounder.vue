<script>
export default {
    data() {
        return {
            carouselImage: ["h1-img-01", "h1-img-02", "h1-img-03"],
            imageActive: 0,
            interval: "",
        }
    },
    methods: {
        getImagePath(Image) {
            return new URL(`../assets/img/carousel-founder/${Image}.jpg`, import.meta.url).href;
        },

        autoPlay() {
            this.interval = setInterval(() => {
            this.nextImage();
        }, 5000);
        },

        nextImage() {
            clearInterval(this.interval);
            if(this.imageActive < this.carouselImage.length - 1) {
                this.imageActive++;
            } else {
                this.imageActive = 0;
            }
            this.autoPlay();

        },

        prevImage() {
            clearInterval(this.interval);
            if(this.imageActive === 0) {
                this.imageActive = this.carouselImage.length - 1;
            } else {
                this.imageActive--;
            }
            this.autoPlay();
        }

    },

    created() {
        this.autoPlay();
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
                    <div class="d-flex ms_container-button">
                        <button @click="prevImage()"><i class="fa-solid fa-arrow-left"></i></button>
                        <button @click="nextImage()"><i class="fa-solid fa-arrow-right"></i></button>
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
        position: relative;

        .ms_container-button{
            position: absolute;
            bottom: 0;
            left: 0;

            button {
                border: 0;
                background-color: var(--ms-primary-color);
                padding: 25px;
                color: white;

                i {
                    transition: all 0.5s;
                }

                &:hover .fa-arrow-left{
                    transform: translate(-50%);
                }

                &:hover .fa-arrow-right{
                    transform: translate(+50%);
                }
            }
        }

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