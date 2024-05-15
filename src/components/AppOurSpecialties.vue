<script>
import AppTitle from './AppTitle.vue';
export default {
  components: { AppTitle },
  props: {
    itemArray: Array,
  },
  methods: {
    getImagePath(Image) {
      return new URL(`../assets/img/specialties/${Image}`, import.meta.url)
        .href;
    },
  },
};
</script>

<template>
  <div class="ms-container-90 gap-3">
    <AppTitle :title="'Our specialties'" :subTitle="'Lorem ipsum dolor sit amet, consectetur adipiscing elit'" />
    <ul class="gap-4">
      <li class="gap-2" v-for="curItem in itemArray">
        <img :src="getImagePath(curItem.image)" alt="" />
        <h4 class="fw-bold">{{ curItem.subtitle }}</h4>
        <span class="description">{{ curItem.text }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

.ms-container-90 {
  @include flex(column, start, center);
  padding: 70px 80px;
  background-color: white;

  h1 {
    font-size: 50px;
    i {
      font-size: 15px;
      color: var(--ms-primary-color);
    }
    & + span{
      font-size: 20px;
      color: var(--ms-secondary-color);
    }
  }

  

  .description {
    padding: 0px 40px;
  }

  ul {
    @include flex(row, center, center);
    padding-top: 20px;

    li {
      @include flex(column, center, center);
      text-align: center;
      max-width: 20%;

      span{
        color: var(--ms-secondary-color);
      }
    }
  }
}
</style>
