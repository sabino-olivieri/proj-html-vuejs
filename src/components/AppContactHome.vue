<script>
import AppButton from './AppButton.vue';

export default {
  components: {
    AppButton
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="home-contacts">
    <div class="container">
      <div class="h-c-big-title text-center">
        <h2>Pricing plans.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="home-cont-card">
            <h3 class="h-c-title">Basic plan</h3>
            <div class="h-c-price">
              100
              <span class="ms-currency">$</span>
            </div>
            <ul>
              <li>
                <i class="fa-solid fa-check"></i>
                Lorem ipsum dolor svit elit
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                Adipiscing elit sed eiusi et
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                Tempor incididunt ut labor
              </li>
            </ul>
            <AppButton :innerText="'PURCHASE'" :bgColor="'orange'" />
          </div>
        </div>
        <div class="col">
          <div class="home-cont-card bg-dark">
            <h3 class="h-c-title">Basic plan</h3>
            <div class="h-c-price">
              200
              <span class="ms-currency">$</span>
            </div>
            <ul>
              <li>
                <i class="fa-solid fa-check"></i>
                Lorem ipsum dolor svit elit
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                Adipiscing elit sed eiusi et
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                Tempor incididunt ut labor
              </li>
            </ul>
            <AppButton :innerText="'PURCHASE'" :bgColor="'orange'" />
          </div>
        </div>
        <div class="col">
          <div class="home-cont-card">
            <h3 class="h-c-title">Basic plan</h3>
            <div class="h-c-price">
              150
              <span class="ms-currency">$</span>
            </div>
            <ul>
              <li>
                <i class="fa-solid fa-check"></i>
                Lorem ipsum dolor svit elit
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                Adipiscing elit sed eiusi et
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                Tempor incididunt ut labor
              </li>
            </ul>
            <AppButton :innerText="'PURCHASE'" :bgColor="'orange'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-contacts {
  background-image: url('https://everlead.qodeinteractive.com/wp-content/uploads/2019/05/h1-img-05.jpg?id=2509');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 100px 0;

  .h-c-big-title {
    color: white;

    p {
      margin-bottom: 0;
      color: rgb(218, 218, 218);
    }

    &::after {
      content: '';
      display: inline-block;
      width: 70px;
      height: 1.5px;
      margin: 20px 0;
      background-color: white;
      text-align: center;
    }
  }

  .home-cont-card {
    background-color: white;
    padding: 80px 50px;

    .h-c-title {
      &::after {
        content: '';
        background-color: var(--ms-primary-color);
        display: inline-block;
        width: 5px;
        aspect-ratio: 1;
        border-radius: 50%;
      }
    }

    .h-c-price {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 20px;
      position: relative;

      &::after {
        content: '';
        display: block;
        width: 50px;
        height: 1.5px;
        margin: 10px 0;
        background-color: var(--ms-primary-color);
        text-align: center;
      }

      .ms-currency {
        font-size: 1.5rem;
        position: absolute;
        top: 5px;
      }
    }

    li {
      font-size: 1.4rem;
      color: rgb(161, 161, 161);
      margin-bottom: 10px;

      i {
        color: grey;
        font-size: 1rem;
        margin-right: 5px;
      }
    }
  }
}

.bg-dark {
  background-color: black;
  color: white;
}
</style>