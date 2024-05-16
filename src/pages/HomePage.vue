<script>
import AppCarouselBanner from "../components/AppCarouselBanner.vue";
import AppOurSpecialties from "../components/AppOurSpecialties.vue";
import AppEventsSection from "../components/AppEventsSection.vue";
import AppCreativeLeaderSection from "../components/AppCreativeLeaderSection.vue";
import AppFounder from "../components/AppFounder.vue";
import AppCardCarousel from "../components/AppCardCarousel.vue";
import { store } from "../store.js";
import AppPlans from "../components/AppPlans.vue";
import AppContactHome from "../components/AppContactHome.vue";
import AppTitle from "../components/AppTitle.vue";
import AppVideo from '../components/AppVideo.vue';

export default {
  components: {
    AppCarouselBanner,
    AppOurSpecialties,
    AppEventsSection,
    AppCreativeLeaderSection,
    AppFounder,
    AppCardCarousel,
    AppPlans,
    AppContactHome,
    AppTitle,
    AppVideo,
  },
  created() {
    store.isHeaderHome = true;
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
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        },
        {
          image: "svg-2.svg",
          subtitle: "Selling",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        },
        {
          image: "svg-3.svg",
          subtitle: "Learning",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        },
        {
          image: "svg-4.svg",
          subtitle: "Contact",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        },
      ],
      cardImages: [
        {
          image: "../assets/img/card-slider/image-1.jpg",
          date: "May 5 2019",
          title: "Next Investment",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
        },
        {
          image: "../assets/img/card-slider/image-2.jpg",
          date: "May 5 2019",
          title: "Team Building",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
        },
        {
          image: "../assets/img/card-slider/image-3.jpg",
          date: "May 5 2019",
          title: "New Business Day",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
        },
        {
          image: "../assets/img/card-slider/image-4.jpg",
          date: "May 5 2019",
          title: "Boost Motivation",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
        },
      ],
      teacherCard: [
        {
          image: "../assets/img/card-teacher/teacher-1.jpg",
          title: "Christine Yin",
          text: "Founder",
        },
        {
          image: "../assets/img/card-teacher/teacher-2.jpg",
          title: "Stephen Griffin",
          text: "Life Coach",
        },
        {
          image: "../assets/img/card-teacher/teacher-3.jpg",
          title: "Sandra Harley",
          text: "Instructor",
        },
        {
          image: "../assets/img/card-teacher/teacher-4.jpg",
          title: "Ruth Hunter",
          text: "Manager",
        },
        {
          image: "../assets/img/card-teacher/teacher-5.jpg",
          title: "Maya Adams",
          text: "Nutritionist",
        },
      ],
      cardLogo: [
        {
          image: "../assets/img/card-logo/logo-1.png",
        },
        {
          image: "../assets/img/card-logo/logo-3.png",
        },
        {
          image: "../assets/img/card-logo/logo-5.png",
        },
        {
          image: "../assets/img/card-logo/logo-7.png",
        },
        {
          image: "../assets/img/card-logo/logo-9.png",
        },
        {
          image: "../assets/img/card-logo/logo-2.png",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="homePage">
    <!-- <h1>Home Page</h1> -->
    <AppCarouselBanner :array="sliderImages" />
    <AppOurSpecialties :itemArray="ourSpecialtiesItem" />
    <AppFounder />
    <AppEventsSection />
    <AppCreativeLeaderSection />
    <AppTitle
      :title="'Latest News'"
      :subTitle="'Lorem ipsum dolor sit amet, consectetur adipiscing elit'"
    />
    <AppCardCarousel
      :array="cardImages"
      :icon="'fa-solid fa-tag'"
      :tagText="'business, leading'"
      :isReadMore="true"
      :numOfItem="3"
    />
    <AppVideo/>
    <AppCircleInfo/>
    <AppTitle
      :title="'We can teach you'"
      :subTitle="'Lorem ipsum dolor sit amet, consectetur adipiscing elit'"
    />
    <AppCardCarousel
      :array="teacherCard"
      :icon="'fa-solid fa-share-nodes'"
      :numOfItem="3"
    />
    
    <AppContactHome />
    <AppCardCarousel :array="cardLogo" :isLogoInArray="true" :numOfItem="5" />
    <AppPlans />
  </div>
</template>

<style lang="scss" scoped>
.homePage {
  background-color: rgb(250, 250, 250);
}
</style>
