<script>
export default {
  data() {
    return {
      visibleCards: [],
      cardWidth: 0,
      bgColor: "",
    };
  },
  created() {
    this.visibleCards = this.array;
    this.startInt();
    this.isLogoInArray
      ? (this.bgColor = "transparent")
      : (this.bgColor = "white");
  },
  props: {
    array: Array,
    icon: String,
    tagText: String,
    isReadMore: Boolean,
    isLogoInArray: Boolean,
    numOfItem: Number,
  },

  methods: {
    getImagePath(image) {
      return new URL(`${image}`, import.meta.url).href;
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
          <div v-for="index in numOfItem" :key="index">
            <div class="card" :style="{
              width: 'calc(100% / numOfItem)' + 'px',
              backgroundColor: bgColor,
            }" v-on:mouseover="clearInt()" v-on:mouseleave="startInt()">
              <div class="img-ctn">
                <img v-if="
                  getImagePath(visibleCards[index].image) !== '' &&
                  !isLogoInArray
                " :src="getImagePath(visibleCards[index].image)" class="card-img-top" alt="Card Image" />
                <img v-if="
                  getImagePath(visibleCards[index].image) !== '' &&
                  isLogoInArray
                " :src="getImagePath(visibleCards[index].image)" class="card-img-top logo" alt="Card Image" />
              </div>

              <div class="card-body">
                <a v-if="tagText" href="#" class="orange-link gap-2">
                  <i :class="`${icon}`"></i> {{ tagText }}</a>
                <a v-else-if="icon" href="#" class="orange-link">
                  <span class="hover-soc-ctn">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                  </span>
                  <i :class="`${icon}`"></i>
                </a>

                <span v-if="visibleCards[index].date" class="card-date">{{
                  visibleCards[index].date
                  }}</span>
                <h4 v-if="visibleCards[index].title" class="card-title fw-bold fs-2">
                  {{ visibleCards[index].title }}
                </h4>
                <p v-if="visibleCards[index].text" class="card-text">
                  {{ visibleCards[index].text }}
                </p>
                <a v-if="isReadMore" href="#" class="btn fw-bold arrowHoverText">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button v-if="!isLogoInArray" class="carousel-control-prev" type="button" data-bs-target="#carousel"
        data-bs-slide="prev" @click="showPrev()">
        <i class="fa-solid fa-arrow-left"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button v-if="!isLogoInArray" class="carousel-control-next" type="button" data-bs-target="#carousel"
        data-bs-slide="next" @click="showNext()">
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
  // height: 800px;
  padding: 50px;

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
        max-width: 25rem;
        overflow: hidden;

        @include flex(column, start, center);

        .logo {
          width: 10rem;
        }

        a {
          padding: 0;
        }

        border: none;

        .img-ctn {
          overflow: hidden;

          img {
            border-radius: 0px;
            transition: all 0.5s;

            &:hover {
              transform: scale(1.1);
            }
          }
        }

        .card-body {
          width: 100%;
          z-index: 999;
          position: relative;

          span,
          p {
            color: var(--ms-secondary-color);
          }

          .orange-link {
            position: absolute;
            top: -20px;
            padding: 10px 30px;
            text-transform: capitalize;
            font-weight: 100;
            right: 0px;
            @include flex(row, center, center);

            i {
              font-size: smaller;
              color: white;
            }

            .hover-soc-ctn {
              margin-left: -30px;

              i {
                color: var(--ms-primary-color);
                background-color: white;
                width: 20px;
                aspect-ratio: 1;
                border-radius: 50%;
                line-height: 20px;
                text-align: center;
                margin-right: 10px;
                overflow: hidden;
                width: 0;
                transition: all 0.5s;
              }
            }

            &:hover .hover-soc-ctn {
              margin-left: -15px;
            }

            &:hover .hover-soc-ctn i {
              overflow: visible;
              width: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
