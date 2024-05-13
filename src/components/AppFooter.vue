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
          </div>
        </div>
      </div>
    </div>
    <div class="ms_footer-bottom">
      <a href="">© 2019 Qode Interactive, All Rights Reserved</a>
    </div>
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
    list-style-type: none;
    padding-left: 0;

    i {
      color: var(--ms-primary-color);
    }
  }

  .ms_footer-bottom {
    background-color: var(--ms-primary-color);
    text-align: center;
    padding: 15px 0;

    a {
      color: #eeeeee;
      text-decoration: none;
    }
  }
}
</style>