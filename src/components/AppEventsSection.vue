<script>
export default {};
</script>

<template>
  <div class="container">
    <h2 class="fw-bold">Upcoming Events</h2>
    <span>Sorry, no posts matched your criteria</span>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

.container {
  @include flex(column, center, start);
  min-height: 400px;
  background: none;

  h2 {
    padding: 30px 60px;
    background-color: white;
    box-shadow: 3px 3px 5px #dddcdc;
    width: 500px;

    & + span {
      color: var(--ms-secondary-color);
    }
  }
}
</style>
