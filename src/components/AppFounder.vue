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
            if (this.imageActive < this.carouselImage.length - 1) {
                this.imageActive++;
            } else {
                this.imageActive = 0;
            }
            this.autoPlay();

        },

        prevImage() {
            clearInterval(this.interval);
            if (this.imageActive === 0) {
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
            <div class="col-12 col-md-6">
                <div class="ms_carousel">
                    <div class="ms_carousel-item" :class="index === imageActive ? 'ms_active' : ''"
                        v-for="(imageName, index) in carouselImage">
                        <img :src="getImagePath(imageName)" alt="">
                    </div>
                    <div class="d-flex ms_container-button">
                        <button @click="prevImage()"><i class="fa-solid fa-arrow-left"></i></button>
                        <button @click="nextImage()"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 position-relative">
                <div class="ms_ticket">
                    <h3>Jason Bickford</h3>
                    <span>Founder and Executive Director</span>
                    <div class="separator"></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua...
                    </p>
                    <div class="icon d-flex gap-3">
                        <a href="https://www.linkedin.com/company/qode-themes/" target="_blank">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a href="https://www.facebook.com/QodeInteractive/" target="_blank">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="https://twitter.com/QodeInteractive" target="_blank">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>

                    </div>

                    <p class="sign">
                        Jason Brick
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container {
    padding: 100px 0;


    .ms_carousel {
        width: 100%;
        aspect-ratio: 4/3;
        display: flex;
        position: relative;

        .ms_container-button {
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

                &:hover .fa-arrow-left {
                    transform: translate(-50%);
                }

                &:hover .fa-arrow-right {
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

    .ms_ticket {
        background-color: white;
        width: 100%;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 35%;
        padding: 60px 80px;
        box-shadow: 0 3px 10px 0 rgba(0, 0, 0, .09);

        h3 {
            font-family: "Libre Baskerville", serif;
            color: var(--ms-bold-color);
            font-weight: 700;
            font-size: 2.2rem;
        }

        span {
            font-family: "Source Sans 3", sans-serif;
            font-size: 0.9rem;
            font-weight: 400;
            color: #606060;
        }

        .separator {
            padding: 0px 0;
            border: 1px solid var(--ms-primary-color);
            background-color: var(--ms-primary-color);
            width: 70px;
            margin: 15px 0;
        }

        p {

            font-family: "Source Sans 3", sans-serif;
            font-size: 1.1rem;
            font-weight: 300;
            color: grey;
        }

        .icon {
            font-size: 1.2em;
            color: white;

            a {

                width: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                aspect-ratio: 1/1;
                border-radius: 50%;
                background-color: var(--ms-primary-color);
                transition: all 0.5s;

                &:hover {
                    background-color: var(--ms-bold-color);
                }

            }


        }

        .sign {
            font-family: "Tangerine", cursive;
            font-weight: 400;
            font-style: normal;
            font-size: 3rem;
            position: absolute;
            right: 80px;
            bottom: 30px;
            color: var(--ms-primary-color);
        }

    }

}
</style>