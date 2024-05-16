<script>
export default {
    data() {


        return {

            playVideo: false,

        }
    },

    methods: {
        chargeVideo() {
            this.playVideo= true;
            // document.body.style.overflow = "hidden";
        },

        closeVideo() {
            this.playVideo = false;
            // document.body.style.overflow = "auto";
        }
    }
}
</script>

<template>
    <div class="ms_video" @click="chargeVideo()">
        <img src="../assets/img/h1-img-04.jpg" alt="">
        <i class="fa-solid fa-play"></i>
    </div>


        <div class="ms_overlay d-flex justify-content-center align-items-center" :class="playVideo ? '' : 'ms_hidden'" @click="closeVideo()" >
            <iframe src="https://player.vimeo.com/video/92850484?h=92cf136c98&color=ff9933&title=0&byline=0&portrait=0"frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>        </div>




</template>

<style lang="scss" scoped>
.ms_video {
    position: relative;

    img, i {
        cursor: pointer;

    }

    i {
        position: absolute;
        font-size: 5em;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        color: rgba(255, 255, 255, 0.79);
        transition: all 0.5s;
    }

    &:hover i {
        font-size: 6em;
    }
}

.ms_overlay {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    height:100vh;
    width: 100%;
    background-color: rgba(64, 64, 64, 0.504);
    transition: all 0.3s;
    overflow: hidden;

    iframe {
        width: 70%;
        aspect-ratio: 16 / 9;
    }
}

.ms_hidden {
    top: 50%;
    left: 50%;
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
}

</style>