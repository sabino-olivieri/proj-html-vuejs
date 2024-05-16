<script>
import AppButton from './AppButton.vue'
import AppPopUp from './AppPopUp.vue'
import AppTitle from './AppTitle.vue'
export default {
    components: { AppTitle, AppButton, AppPopUp },

    data() {
        return {
            isVisibleYork: false,
            isVisibleLondon: false,
            isVisibleMelburne: false,
        }
    }

}
</script>

<template>
    <div class="container mt-5">
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col ms_world">
                <div class="new-york m-3 p-3" @mouseover="isVisibleYork = true" @mouseleave="isVisibleYork = false">
                    <span ><i class="fa-solid fa-plus"></i></span>
                    <AppPopUp :title="'New York Coaching'" :isVisible="isVisibleYork" />
                </div>

                <div class="london m-3 p-3" @mouseover="isVisibleLondon = true" @mouseleave="isVisibleLondon = false">
                    <span><i class="fa-solid fa-plus"></i></span>
                    <AppPopUp :title="'London Coaching'" :isVisible="isVisibleLondon" />
                </div>

                <div class="melburne m-3 p-3" @mouseover="isVisibleMelburne = true" @mouseleave="isVisibleMelburne = false">
                    <span><i class="fa-solid fa-plus"></i></span>
                    <AppPopUp :title="'Melburne Coaching'" :isVisible="isVisibleMelburne" />
                </div>
            </div>

            <div class="col">
                <AppTitle :justify="'justify-content-start'" :title="'Contact us'"
                    :subTitle="'Lorem ipsum dolor sit amet, consectetur adipiscing elit'"
                    :align="'align-items-start'" />

                <form action="">
                    <div class="col-12 d-flex justify-content-between flex-wrap gap-5">
                        <div class="col-5">
                            <input type="text" placeholder="Your Name" aria-label="Insert your name">
                        </div>
                        <div class="col-5">
                            <input type="text" placeholder="Your Email" aria-label="Insert your email">
                        </div>
                        <div class="col-12">
                            <textarea name="" id="" rows="5" placeholder="Your Message"
                                aria-label="Insert your message"></textarea>

                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <AppButton :bgColor="'orange'" :innerText="'SEND'" :typeBtn="'submit'" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
input,
textarea {
    outline: 0;
    border: 0;
    width: 100%;
    background-color: transparent;
    padding: 5px 20px;
    border-bottom: 1px solid lightgray;
    font-family: "Source Sans 3", sans-serif;
    color: #606060;
    font-weight: 300;
}

.ms_world {
    background-image: url('../assets/img/contact-home/h1-contact-rev-01.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    min-height: 500px;

    span {
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: var(--ms-primary-color);
        cursor: pointer;

    }

    .new-york {
        position: absolute;
        z-index: 5;
        top: 38%;
        left: 18%;
    }

    .london {
        position: absolute;
        z-index: 5;
        top: 28%;
        left: 42%;
    }

    .melburne {
        position: absolute;
        z-index: 5;
        bottom: 25%;
        right: 10%;
    }

}
</style>