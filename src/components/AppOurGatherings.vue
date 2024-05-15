<script>
import AppButton from './AppButton.vue'
import AppCardGatherings from './AppCardGatherings.vue'
import AppLoad from './AppLoad.vue'
import AppTitle from './AppTitle.vue'
export default {
    components: { AppTitle, AppCardGatherings, AppButton, AppLoad },

    data() {
        return {
            cardImage: [
                {
                    image: "01",
                    title: "Motivation theories",
                    subTitle: "Educative"
                },
                {
                    image: "02",
                    title: "Performance analysis",
                    subTitle: "Educative"
                },
                {
                    image: "03",
                    title: "Need-based theories",
                    subTitle: "Educative"
                },
                {
                    image: "04",
                    title: "Expectancy theory",
                    subTitle: "Educative"
                },
                {
                    image: "05",
                    title: "Project blue",
                    subTitle: "Educative"
                },
                {
                    image: "06",
                    title: "Creative motivation",
                    subTitle: "Educative"
                },
                {
                    image: "07",
                    title: "Online education",
                    subTitle: "Educative"
                },
                {
                    image: "08",
                    title: "Great leader",
                    subTitle: "Educative"
                },
                {
                    image: "09",
                    title: "Online coaching",
                    subTitle: "Educative"
                },
            ],

            visibleCard: 6,
            loading: false,
        }

        
    },
    
    methods: {
        loadMore() {
            this.loading = true;
            setTimeout(()=> {
                this.loading = false;
                this.visibleCard += 3;
            }, 2000);
            
        }
    }
}
</script>

<template>
    <AppTitle :title="'Our Gatherings'" :subTitle="'Lorem ipsum dolor sit amet, consectetur adipiscing elit'" />

    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
            <div class="col" v-for="num in visibleCard">
                <AppCardGatherings :obj="cardImage[num-1]" />
            </div>
        </div>
        <div class="row">
            
            <AppLoad :isLoad="loading" />

            <div class="col-12 text-center mb-4">
                <AppButton :bgColor="'orange'" :innerText="'LOAD MORE'" @click="loadMore()" v-if="visibleCard < cardImage.length"/>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>