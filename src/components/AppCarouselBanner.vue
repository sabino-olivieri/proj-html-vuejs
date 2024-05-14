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
      <div class="carousel-item active">
        <div class="info gap-3">
            <h1>{{ array[this.activeIndex].title }}</h1>
            <span>{{ array[this.activeIndex].content }}</span>
            <div class="btn-container d-flex gap-3 pt-3">
                <a href="#" class="white-link">read more</a>
                <a href="#" class="orange-link">purchase</a>
            </div>
        </div>
        <img
          :src="getImagePath(array[this.activeIndex].image)"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
      @click="showPrev()"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
      @click="showNext()"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>

@use "../style/partials/mixins" as *;


.carousel-control-prev,
.carousel-control-next {
  color: red !important;
}

.carousel{
    position: relative;

    .carousel-item{

        @include flex(column,center,start);

        .info{
            position: absolute;
            margin-left: 300px;
    
            
            max-width: 35%;
    
            h1{
                font-size: 80px;
            }
            span{
                font-size: 20px;
            }
    
    
        }
    }

    
}


</style>
