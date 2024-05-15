<script>
import AppButton from './AppButton.vue'
import AppTitle from './AppTitle.vue'
export default {
    components: { AppTitle, AppButton },

}
</script>

<template>
    <div class="container my-5 py-5">
        <div class="row">
            <div class="col">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut voluptate voluptatibus sapiente
                corporis beatae doloremque alias eius explicabo enim id mollitia odio quisquam provident, vel facilis
                aliquam, a accusantium.
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
                            <textarea name="" id="" rows="5" placeholder="Your Message" aria-label="Insert your message"></textarea>
                            
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
    input, textarea {
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

</style>