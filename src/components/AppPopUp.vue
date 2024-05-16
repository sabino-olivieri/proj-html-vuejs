<script>
    export default {
        props: {
            title: String,
            isVisible: Boolean
        },

        data() {
            return {
                mouseOver: false,
            }
        }
    }
</script>

<template>
    <div @mouseover="mouseOver = true" @mouseleave="mouseOver = false">
        <div class="pop-up p-3" :class="isVisible || mouseOver ? '' : 'ms_hidden'" >
            <h4>{{ title }}</h4>
            <a href="" class="arrowHoverText">READ MORE</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>


    .pop-up {
        background-color: white;
        position: absolute;
        z-index: 10;
        top: 50px;
        left: 0;
        min-width: 250px;
        opacity: 1;
        box-shadow: 0 3px 10px 0 rgba(0, 0, 0, .09);
        transition: all 0.5s;
        

        h4 {
            font-family: "Libre Baskerville", serif;
            color: var(--ms-bold-color);
            font-weight: 700;
            font-size: 1.1rem;
        }
        
    }

    .ms_hidden {
    opacity: 0;
    left: -1000%;
    overflow: hidden;
    
}
</style>