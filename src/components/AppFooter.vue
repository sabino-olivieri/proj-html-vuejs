<script>
export default {
  data() {
    return {
      importLink: ['About me', 'About us', 'Language packs', 'Become a coach', 'Monthly events'],
      contactMe: [
        {
          icon: 'fa-solid fa-location-dot',
          contact: '457 BigBlue Street, NY 10013'
        },
        {
          icon: 'fa-solid fa-phone',
          contact: '(315) 5512-2579'
        },
        {
          icon: 'fa-regular fa-envelope',
          contact: 'everlead@qodeinteractive.com'
        },
      ]
    }
  }
}
</script>

<template>
  <footer>
    <!-- Footer top  -->
    <div class="container ms_footer-top py-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div class="col py-3">
          <div class="ms_card">
            <h5>About</h5>
            <p>We created Everlead to effectively become the stepping stone towards meeting all your goals
              & achieving
              business success.</p>
          </div>
        </div>
        <div class="col py-3">
          <div class="ms_card">
            <h5>Twitter</h5>
            <p>Couldn't connect with Twitter</p>
          </div>
        </div>
        <div class="col py-3">
          <div class="ms_card">
            <h5>Important links</h5>
          </div>

          <ul>
            <li v-for="curLink in importLink">
              {{ curLink }}
            </li>
          </ul>
        </div>
        <div class="col py-3">
          <div class="ms_card">
            <h5>Contact me</h5>
            <ul>
              <li v-for="curContact in contactMe">
                <i :class="curContact.icon"></i>
                <span class="mx-2">{{ curContact.contact }}</span>
              </li>
            </ul>
            <div class="ms_subscrive-con">
              <input id="subscribe" type="text" placeholder="Your Name">
              <label for="subcribe">SUBSCRIBE</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Footer top  -->

    <!-- Footer Bottom  -->
    <div class="ms_footer-bottom">
      <a href="">© 2019 Qode Interactive, All Rights Reserved</a>
    </div>
    <!-- /Footer Bottom  -->
  </footer>

</template>

<style lang="scss" scoped>
footer {
  background-color: var(--ms-bold-color);
  color: grey;
  font-size: 0.8rem;

  h5 {
    color: white;
    margin-bottom: 20px;

    &::after {
      content: '';
      display: block;
      width: 32px;
      height: 1px;
      margin: 20px 0;
      background-color: var(--ms-primary-color)
    }
  }

  ul {
    padding-left: 0;

    li {
      cursor: pointer;
      transition: color 0.15s;
    }

    li:hover {
      color: rgb(190, 190, 190);
    }

    i {
      color: var(--ms-primary-color);
    }
  }

  .ms_subscrive-con {
    border-bottom: 1px solid white;
    padding: 8px 0;
    display: flex;
    justify-content: space-between;

    input {
      background-color: transparent;
      border: none;
      flex-grow: 1;
      color: rgb(190, 190, 190);

      &:focus-visible {
        outline: none;
      }
    }

    label {
      color: white;
      font-size: 0.7rem;

      &::before {
        content: "\f178";
        position: absolute;
        display: inline-block;
        font: var(--fa-font-solid);
        left: -1.3rem;
        color: var(--ms-primary-color);
        font-size: 0.8rem;
        overflow: hidden;
        width: 0;
        transition: all 0.5s;
        cursor: pointer;
      }

      &:hover:before {
        overflow: visible;
        left: -1rem;
      }
    }

    &,
    input,
    label {
      cursor: pointer;
      position: relative;


    }
  }

  .ms_footer-bottom {
    background-color: var(--ms-primary-color);
    text-align: center;
    padding: 15px 0;

    a {
      color: #dadada;
      text-decoration: none;
      font-weight: normal;
      font-size: 0.7rem;
      letter-spacing: 0.3px;
    }
  }
}
</style>