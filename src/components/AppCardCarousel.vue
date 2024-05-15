<script>
export default {
  data() {
    return {
      activeIndex: 0,
      visibleCards: 3,
    };
  },
  props: {
    array: Array,
  },
  created() {
    // this.startInt();
  },
  methods: {
    getImagePath(Image) {
      return new URL(`../assets/img/card-slider/${Image}`, import.meta.url).href;
    },
    showNext() {
      // this.activeIndex === this.array.length - 1
      //   ? (this.activeIndex = 0)
      //   : this.activeIndex++;

      this.visibleCards = Math.min(this.visibleCards + 1, this.array.length);
      this.visibleCards = Math.max(this.visibleCards - 1, this.array.length);

      // this.startIndex = (this.startIndex + 1) % this.array.length;
      // this.visibleCards++;
      // if (this.visibleCards > this.array.length) {
      //   this.visibleCards = 3;
      // }
    },
    showPrev() {
      // this.activeIndex > 0
      //   ? this.activeIndex--
      //   : (this.activeIndex = this.array.length - 1);
      this.visibleCards = Math.max(this.visibleCards - 1, 1);
    },
    startInt() {
      this.interval = setInterval(() => {
        this.showNext();
      }, 5000);
    },
    clearInt() {
      // console.log("stop:", this.isIntervalActive);

      clearInterval(this.interval);
    },
  },
};
</script>

<template>
  <div class="ms-container-90">
    <div
      id="carousel"
      class="carousel slide"
      v-on:mouseover="clearInt()"
      v-on:mouseleave="startInt()"
    >
      <div class="carousel-inner">
        <div class="carousel-item gap-4">
          <div
            v-for="(curCard, index) in array.slice(0, visibleCards)"
            class="card"
          >
            <img
              :src="getImagePath(curCard.image)"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <span class="card-date">May 5 2019</span>
              <h4 class="card-title">Card title</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn fw-bold">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
        @click="showPrev()"
      >
        <i class="fa-solid fa-arrow-left"></i>

        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
        @click="showNext()"
      >
        <i class="fa-solid fa-arrow-right"></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

.carousel {
  position: relative;
  height: 800px;

  i {
    font-size: 40px;
    color: black;
  }
  .carousel-inner {
    height: 100%;

    .carousel-item {
      height: 100%;
      @include flex(row, center, center);
      background-size: cover;

      .card {
        width: 25rem;
        @include flex(column, start, start);
        a {
          padding: 0;
        }
        border: none;
        img {
          border-radius: 0px;
        }
      }
    }
  }
}
</style>
