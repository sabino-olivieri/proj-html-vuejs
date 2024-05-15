
<template>
  <div class="ms-container-90">
    <div id="carousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item gap-4">
          <div v-for="curCard in visibleCards" class="card">
            <img :src="getImagePath(curCard.image)" class="card-img-top" alt="Card Image" />
            <div class="card-body">
              <span class="card-date">{{ curCard.date }}</span>
              <h4 class="card-title">{{ curCard.title }}</h4>
              <p class="card-text">{{ curCard.text }}</p>
              <a href="#" class="btn fw-bold">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev" @click="showPrev()">
        <i class="fa-solid fa-arrow-left"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next" @click="showNext()">
        <i class="fa-solid fa-arrow-right"></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startIndex: 0,
      visibleCards: this.array.slice(0, 3),
    };
  },
  props: {
    array: Array,
  },
  methods: {
    getImagePath(image) {
      return new URL(`../assets/img/card-slider/${image}`, import.meta.url).href;
    },
    showNext() {
      if (this.array.length > this.visibleCards.length) {
        this.startIndex = (this.startIndex + 1) % this.array.length;
        this.visibleCards = this.array.slice(this.startIndex, this.startIndex + 3);
      }
    },
    showPrev() {
      if (this.array.length > this.visibleCards.length) {
        this.startIndex = (this.startIndex - 1 + this.array.length) % this.array.length;
        this.visibleCards = this.array.slice(this.startIndex, this.startIndex + 3);
      }
    },
  },
};
</script>

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
