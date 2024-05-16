<script>
export default {
  data() {
    return {
      stats: [
        {
          statName: "Membership",
          percentuage: "78"
        },
        {
          statName: "Education",
          percentuage: "96"
        },
        {
          statName: "Learning",
          percentuage: "65"
        },
        {
          statName: "Motivation",
          percentuage: "83"
        },
      ]
    }
  }
};
</script>

<template>
  <div class="bg">
    <div class="container">
      <div class="presentation">
        <div class="col-12 d-flex">
          <h2>Creative Leader</h2>
          <span></span>
        </div>
        <span class="border-bt-line"></span>
        <p class="pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit
          facere fuga sapiente consequuntur ad, quis temporibus asperiores
          repudiandae laboriosam autem, debitis amet sint necessitatibus eum
          quasi cupiditate? Est, veritatis!
        </p>
        <a href="#">read more</a>
      </div>
      <div class="stats gap-5">
        <div class="progress-bar" v-for="curStat in this.stats" :key="curStat">
          <div class="label">
            <label class="fw-bold">{{ curStat.statName }}</label>
            <div class="fw-bold">{{ curStat.percentuage }}%</div>
          </div>
          <div class="bar">
            <div class="fill" :style="{ width: `${curStat.percentuage}` + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

.bg {
  background-color: white;
}

.container {
  @include flex(row, space-between, start);
  padding: 100px 0;

  .presentation {
    @include flex(column, center, start);
    width: 50%;

    .col-12 {
      align-items: baseline;
      width: 100%;

      h2 {
        font-family: "Libre Baskerville", serif;
        color: var(--ms-bold-color);
        font-weight: 700;
        font-size: 2rem;

      }

      span {
        margin-left: 2px;
        display: inline-block;
        width: 8px;
        aspect-ratio: 1/ 1;
        background-color: var(--ms-primary-color);
        border-radius: 50%;
      }
    }

    h2 {
      font-size: 40px;

      i {
        font-size: 8px;
        color: var(--ms-primary-color);
      }
    }

    p {
      font-family: "Source Sans 3", sans-serif;
      font-weight: 300;
      color: var(--ms-secondary-color);
      font-size: 20px;
    }

    a {
      text-transform: uppercase;
      color: black;
    }
  }

  .stats {
    @include flex(column, start, start);
    width: 50%;
    

    .progress-bar {
      @include flex(column, start, start);
      width: 100%;

      .label {
        @include flex(row, space-between, center);
        width: 100%;

        label, div {

          font-family: "Libre Baskerville", serif;
        }

      }

      .bar {
        width: 100%;
        background-color: #e0e0e0;
        position: relative;
      }

      .fill {
        height: 5px;
        background-color: var(--ms-primary-color);
      }

      .percentage {
        position: absolute;
        right: 0;
        top: 0;
        padding: 0 10px;
      }
    }
  }
}
</style>
