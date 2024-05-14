<script>
import AppCarouselBanner from "../components/AppCarouselBanner.vue";
import AppOurSpecialties from "../components/AppOurSpecialties.vue";
import AppEventsSection from "../components/AppEventsSection.vue";
export default {
  components: {
    AppCarouselBanner,
    AppOurSpecialties,
    AppEventsSection
  },
  data() {
    return {
      sliderImages: [
        {
          image: "image-1.jpg",
          title: "Our Team",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus, laborum",
        },
        {
          image: "image-2.png",
          title: "Help you achieve anything",
        },
        {
          image: "image-3.jpg",
          title: "We are EverLead",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus, laborum rerum est labore molestiae quidem hic nemo vitae dolorum odio at aliquid dolores sed dignissimos velit perferendis distinctio non?",
        },
      ],
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
    };
  },
};
</script>

<template>
  <div class="homePage">
    <!-- <h1>Home Page</h1> -->
    <AppCarouselBanner :array="sliderImages" />
    <AppOurSpecialties :itemArray="ourSpecialtiesItem"/>
    <AppEventsSection/>
  </div>
</template>

<style lang="scss" scoped>

.homePage{
  background-color: rgb(250, 250, 250);
}

</style>
