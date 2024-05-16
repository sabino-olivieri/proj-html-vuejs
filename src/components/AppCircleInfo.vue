<script>
export default {
  data() {
    return {
      circleDate: [
        {
          number: '12',
          descrip: 'Your of experience',
        },
        {
          number: '36',
          descrip: 'Successful projects',
        },
        {
          number: '76',
          descrip: 'Raliable clients',
        },
        {
          number: '12',
          descrip: 'Your of experience',
        },
      ]
    }
  }
}
</script>

<template>
  <div class="container py-5">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-5 py-5">
      <div v-for="circle in circleDate" class="col d-flex justify-content-center">
        <div class="ms_card-cirle">
          <div class="cir-number">{{ circle.number }}</div>
          <div class="cir-descrip">{{ circle.descrip }}</div>
        </div>
      </div>
    </div>
  </div>


</template>
<style lang="scss" scoped>
.ms_card-cirle {
  width: 250px;
  aspect-ratio: 1;
  background-color: var(--ms-primary-color);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 12px 8px rgba(0, 0, 0, 0.15);

  .cir-number {
    font-size: 3rem;
    font-weight: 700;
    color: white;

  }

  .cir-descrip {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(243, 243, 243);

    &::after {
      content: '';
      display: block;
      width: 70px;
      height: 1.5px;
      margin: 20px 0;
      background-color: white;

    }

  }
}
</style>