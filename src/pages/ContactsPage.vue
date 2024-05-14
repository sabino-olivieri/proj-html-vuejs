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
      <div class="hero">
        <!-- <h3>Una mappa interattiva per volantini</h3>
        <div id="map" style="height:90vh;"></div> -->
      </div>
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
      <div class="contact-us-bottom">
        <div class="container">
          <div class="row justify-content-xl-end">
            <div class="col-12 col-xl-5">
              <div class="ms_card-bottom">
                <h2>Contact US.</h2>
                <p>Lorem ipsum dolor svit consectetur</p>

                <form action="">
                  <div class="ms_input-conteiner">
                    <input id="name" type="text" aria-label="Add your name" placeholder="Your Name">
                  </div>
                  <div class="ms_input-conteiner">
                    <input id="email" type="email" aria-label="Add your email" placeholder="Your Email">
                  </div>
                  <div class="ms_input-conteiner">
                    <textarea name="" aria-label="Add your message" id="message" rows="3">Your Message</textarea>
                  </div>

                  <button type="submit" class="btn btn-outline-light">SEND</button>
                </form>

              </div>
            </div>

          </div>

        </div>
      </div>


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

  .contact-us-bottom {
    background-image: url('https://everlead.qodeinteractive.com/wp-content/uploads/2019/05/contact-us-img-02.jpg?');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 200px;
    padding: 70px 0;

    .ms_card-bottom {
      background-color: var(--ms-primary-color);
      color: white;
      padding: 50px 40px;

      .ms_input-conteiner {
        display: flex;

        input,
        textarea {
          border: none;
          flex-grow: 1;
          background-color: transparent;
          border-bottom: 1px solid white;
          padding: 40px 20px 30px;
        }

        input::placeholder {
          color: #e2e2e2;
          font-size: 0.8rem;
        }

        textarea {
          color: #e2e2e2;
          font-size: 0.8rem;
          margin-bottom: 20px;

        }
      }
    }
  }
}
</style>