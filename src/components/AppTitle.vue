<script>
export default {
    props: {
        title: String,
        subTitle: String,
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <h2>{{title}}</h2>
                <span></span>
            </div>
            <div class="col d-flex flex-column align-items-center">
                <p>
                    {{ subTitle }}    
                </p>
                
                <div class="separator"></div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

    .col-12{
        align-items: baseline;
        width: 100%;
        h2 {
            font-family: "Libre Baskerville", serif;
            color: var(--ms-bold-color);
            font-weight: 700;
            font-size: 3rem;

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

    p {
        font-family: "Source Sans 3", sans-serif;
        color: #606060;
        font-weight: 300;
        font-size: 1.5rem;
        margin: 0;
    }

    .separator {
            padding: 0px 0;
            border: 1px solid var(--ms-primary-color);
            background-color: var(--ms-primary-color);
            width: 70px;
            margin: 20px 0;
        }


</style>