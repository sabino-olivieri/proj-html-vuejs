<script>
import AppCarouselBanner from '../components/AppCarouselBanner.vue';
export default {
    components:{
        AppCarouselBanner
    },
    data(){
        return{
            sliderImages: [
                "image-1.jpg",
                "image-2.png",
                "image-3.jpg"

            ]
        }
    }
}
</script>

<template>
    <div>
        <!-- <h1>Home Page</h1> -->

        <AppCarouselBanner :array="sliderImages"/>
    </div>
</template>


<style lang="scss" scoped></style>