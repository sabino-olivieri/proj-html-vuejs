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
    getImagePath(image) {
      return new URL(`../assets/img/card-testimonials/${image}`, import.meta.url).href;
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
    clearInt() {
      // console.log("stop:", this.isIntervalActive);

      clearInterval(this.interval);
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="upper-section" v-on:mouseover="clearInt()" v-on:mouseleave="startInt()">
      <button
        class="prevBtn"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
        @click="showPrev()"
      >
        <i class="fa-solid fa-arrow-left"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <div class="slider gap-4">
        <img :src="getImagePath(array[this.activeIndex].image)" alt="" />
        <h4>{{array[this.activeIndex].name}}</h4>
        <span>{{ array[this.activeIndex].cit }}</span>
      </div>
      <button
        class="nextBtn"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
        @click="showNext()"
      >
        <i class="fa-solid fa-arrow-right"></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="button-list">
      <ul>
        <li><button @click="this.activeIndex = 0" :class="{'active': this.activeIndex === 0}">&nbsp;</button></li>
        <li><button @click="this.activeIndex = 1" :class="{'active': this.activeIndex === 1}">&nbsp;</button></li>
        <li><button @click="this.activeIndex = 2" :class="{'active': this.activeIndex === 2}">&nbsp;</button></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

.container-fluid {
  @include flex(column, center, center);
  //   height: 600px;
//   background-color: lightblue;
  padding: 0;
  background-color: rgba($color: #000000, $alpha: 0.9);

  .upper-section {
    padding: 40px 0;

    @include flex(row, space-between, center);
    width: 100%;
    .prevBtn,
    .nextBtn {
      color: white;
      width: 50px;
      background: none;
      border: none;
      font-size: 50px;
      margin: 80px;

      &:hover {
        color: var(--ms-secondary-color);
      }
    }

    .slider {
      height: 400px;
      width: 800px;
      //   background-color: black;
    //   border: 2px solid white;
      @include flex(column,center,center);


      h4{
        color: white;
        font-weight: bold;
      }

      span{
        color: var(--ms-secondary-color);
      }

      
      
    }
  }
  .button-list {
    width: 310px;
    ul {
      @include flex(row, space-between, center);

      button {
        width: 100px;
        height: 2px;
        border: none;
        background-color: lightgrey;
      }

      .active{
        background-color: gray;
      }
    }
  }
}
</style>
