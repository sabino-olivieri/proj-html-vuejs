<script>
import AppCarouselBanner from "../components/AppCarouselBanner.vue";
export default {
  components: {
    AppCarouselBanner,
  },
  data() {
    return {
      sliderImages: [
        {
          image: "image-1.jpg",
          title: "Our Team",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus, laborum rerum est labore molestiae quidem hic nemo vitae dolorum odio at aliquid dolores sed dignissimos velit perferendis distinctio non?",
        },
        {
          image: "image-2.png",
          title: "Help you achieve anything",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus, laborum rerum est labore molestiae quidem hic nemo vitae dolorum odio at aliquid dolores sed dignissimos velit perferendis distinctio non?",
        },
        {
          image: "image-3.jpg",
          title: "We are EverLead",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus, laborum rerum est labore molestiae quidem hic nemo vitae dolorum odio at aliquid dolores sed dignissimos velit perferendis distinctio non?",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <!-- <h1>Home Page</h1> -->
    <AppCarouselBanner :array="sliderImages" />
  </div>
</template>

<style lang="scss" scoped></style>
