<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  props: {
    array: Array,
  },
  created() {
    this.startInt();
  },
  methods: {
    getImagePath(Image) {
      return new URL(`../assets/img/slider/${Image}`, import.meta.url).href;
    },
    showNext() {
      this.activeIndex === this.array.length - 1
        ? (this.activeIndex = 0)
        : this.activeIndex++;
    },
    showPrev() {
      this.activeIndex > 0
        ? this.activeIndex--
        : (this.activeIndex = this.array.length - 1);
    },
    startInt() {
      this.interval = setInterval(() => {
        this.showNext();
      }, 5000);
    },
  },
};
</script>

<template>
  <div id="carousel" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item" :style="{ backgroundImage: `url(${getImagePath(array[this.activeIndex].image)})`}">
        <div class="info gap-3">
          <h1>
            {{ array[this.activeIndex].title }}
            <i class="fa-solid fa-circle"></i>
          </h1>
          <span>{{ array[this.activeIndex].content }}</span>
          <div class="btn-container d-flex gap-3 pt-3">
            <a href="#" class="white-link">read more</a>
            <a href="#" class="orange-link">purchase</a>
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
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

.carousel {
  position: relative;
  height: 1080px;
  max-height: 1080px;

  i {
    font-size: 40px;
    color: black;
  }
  .carousel-inner{
    height: 100%;

    
      .carousel-item {
        height: 100%;
        @include flex(column, center, start);
        background-size: cover;
        
    
        .info {
            @include flex(column, space-between,start);
          position: absolute;
          margin-left: 200px;
    
          max-width: 40%;
    
          h1 {
            font-size: 80px;
            i {
              font-size: 15px;
              color: var(--ms-primary-color);
            }
          }
          span {
            font-size: 20px;
            color: var(--ms-secondary-color);
          }
        }
      }
  }

}
</style>
