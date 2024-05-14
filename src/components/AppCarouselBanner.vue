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
  created(){
    this.startInt()
  },
  methods: {
    getImagePath(Image) {
      return new URL(`../assets/img/slider/${Image}`, import.meta.url).href;
    },
    showNext(){
        this.activeIndex === this.array.length - 1
        ? (this.activeIndex = 0)
        : this.activeIndex++;
    },
    showPrev(){
        this.activeIndex > 0
        ? this.activeIndex--
        : (this.activeIndex = this.array.length - 1);
    },
    startInt() {
      this.interval = setInterval(() => {

        this.showNext()
      }, 5000);
    },
    
  },
};
</script>

<template>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="getImagePath(array[this.activeIndex])" class="d-block w-100" alt="..." />
      </div>
      <!-- <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="..." />
      </div> -->
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
      @click="showPrev()"

    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
      @click="showNext()"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>

</style>
