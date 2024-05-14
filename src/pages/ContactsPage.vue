<script>
export default {
  data() {
    return {
      icons: ['fa-solid fa-location-dot', 'fa-solid fa-phone', 'fa-regular fa-envelope'],
      contact: [
        {
          icon: 'fa-solid fa-location-dot',
          title: 'LA',
          position: '457 BIgBlue Street, NY 10013',
          number: '(111) 1234-5678',
          email: 'everlead1@qodeinteractive.com',
        },
        {
          icon: 'fa-solid fa-phone',
          title: 'NY',
          position: '457 BIgBlue Street, NY 10013',
          number: '(222) 1234-5678',
          email: 'everlead2@qodeinteractive.com',
        },
        {
          icon: 'fa-regular fa-envelope',
          title: 'NO',
          position: '289 O\'Keefe Ave, NO 70112',
          number: '(333) 1234-5678',
          email: 'everlead3@qodeinteractive.com',
        },
      ]
    }
  }
}
</script>

<template>
  <div>
    <!-- <h1>Contacts Pagee</h1> -->
    <main>
      <!-- Hero  -->
      <div class="hero"></div>
      <!-- /Hero  -->

      <div class="contact-us-top py-5">
        <div class="ms_title-top text-center">
          <h2>Contact us</h2>
          <p class="mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div class="container">
          <div class="row row-cols-1 row-cols-xl-3">
            <div v-for="curCont in contact" class="col">
              <div class="ms_footer-card">
                <h3>{{ curCont.title }}</h3>
                <ul>
                  <li>
                    <i :class="icons[0]"></i>
                    <span>{{ curCont.position }}</span>
                  </li>
                  <li>
                    <i :class="icons[1]"></i>
                    <span>{{ curCont.number }}</span>
                  </li>
                  <li>
                    <i :class="icons[2]"></i>
                    <span>{{ curCont.email }}</span>
                  </li>
                </ul>

                <div class="ms_soc-icon">
                  <i class="fa-brands fa-linkedin-in"></i>
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-us-bottom"></div>


    </main>

  </div>
</template>

<style lang="scss" scoped>
main {
  background-color: #fafafa;

  .contact-us-top {

    .ms_title-top {

      p {
        margin-bottom: 0;
        color: gray;
      }

      &::after {
        content: '';
        display: inline-block;
        width: 70px;
        height: 1.5px;
        margin: 20px 0;
        background-color: var(--ms-primary-color);
        text-align: center;
      }
    }

    .ms_footer-card {
      background-color: white;
      padding: 40px;

      h3 {
        &::after {
          content: '';
          background-color: var(--ms-primary-color);
          display: inline-block;
          width: 5px;
          aspect-ratio: 1;
          border-radius: 50%;
        }
      }

      ul {
        list-style-type: none;
        padding-left: 0;
        margin: 20px 0;

        li {
          i {
            color: var(--ms-primary-color);
            margin-right: 8px;
          }

          span {
            color: rgb(172, 172, 172);
          }
        }
      }

      .ms_soc-icon {

        i {
          display: inline-block;
          background-color: var(--ms-primary-color);
          color: white;
          width: 30px;
          aspect-ratio: 1;
          border-radius: 50%;
          line-height: 30px;
          text-align: center;
          margin-right: 8px;
        }
      }
    }

  }
}
</style>