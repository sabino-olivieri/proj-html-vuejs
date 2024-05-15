<script>
export default {
  data() {
    return {
      visibleCards: [],
    };
  },
  created() {
    this.visibleCards = this.array;
    this.startInt();
  },
  props: {
    array: Array,
    icon: String,
    tagText: String,
    isReadMore: Boolean

  },

  methods: {
    getImagePath(image) {
      return new URL(`${image}`, import.meta.url)
        .href;
    },
    startInt() {
      this.interval = setInterval(() => {
        this.showNext();
      }, 3000);
    },
    showNext() {
      const newElem = this.visibleCards[0];

      this.visibleCards.shift();
      this.visibleCards.push(newElem);
    },
    showPrev() {
      const newElem = this.visibleCards[this.visibleCards.length - 1];

      this.visibleCards.pop();
      this.visibleCards.unshift(newElem);
    },
    clearInt() {
      clearInterval(this.interval);
    },
  },
};
</script>
<template>
  <div class="ms-container-90">
    <div id="carousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item gap-4">
          <div v-for="index in 3" :key="index">
            <div
              class="card"
              v-on:mouseover="clearInt()"
              v-on:mouseleave="startInt()"
            >
              <img
                v-if="getImagePath(visibleCards[index].image) !== ''"
                :src="getImagePath(visibleCards[index].image)"
                class="card-img-top"
                alt="Card Image"
              />
              <div class="card-body">
                <a v-if="tagText || icon" href="#" class="orange-link gap-2"> <i :class="`${icon}`"></i> {{ tagText }}</a> 
                <span v-if="visibleCards[index].date" class="card-date">{{ visibleCards[index].date }}</span>
                <h4 v-if="visibleCards[index].title" class="card-title fw-bold fs-2">
                  {{ visibleCards[index].title }}
                </h4>
                <p v-if="visibleCards[index].text" class="card-text">{{ visibleCards[index].text }}</p>
                <a v-if="isReadMore" href="#" class="btn fw-bold arrowHoverText">READ MORE</a>
              </div>
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

        .card-body{
          width: 100%;
          position: relative;
          span, p {
            color: var(--ms-secondary-color);
          }

          .orange-link{
            position: absolute;
            top:-20px;
            padding: 10px 30px;
            text-transform: capitalize;
            font-weight: 100;
            right: 0px;
            @include flex(row,center,center);
  
  
            i{
              font-size: smaller;
              color: white;
            }
          }
        }

    
      }
    }
  }
}
</style>
