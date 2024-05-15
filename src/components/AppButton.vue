<script>
export default {
  props: {
    bgColor: String, //orange or white
    innerText: String,
    wantBorder: Boolean,
    typeBtn: String,
  },
  data() {
    return {

    }
  },
  methods: {
    getBgColor() {
      if (this.bgColor.toLowerCase() === 'orange') {
        return 'ms_bgColorOrange'
      } else if (this.bgColor.toLowerCase() === 'white') {
        return 'ms_bgColorWhite'
      }
    }
  }

}
</script>

<template>
  <button :type="typeBtn" :class="[getBgColor(), { 'ms_border-white': wantBorder }]">
    {{ innerText }}
    <span>
      <i class="fa-solid fa-arrow-right-long"></i>
    </span>
  </button>

</template>

<style lang="scss" scoped>
button {
  border: none;
  padding: 15px 20px;
  display: inline-block;
  background-color: transparent;
  position: relative;

  span {
    margin-left: 20px;
    transition: margin-left 0.15s, margin-right 0.15s;

    &::before {
      content: '';
      position: absolute;
      display: inline-block;
      width: 1px;
      height: 34px;
      top: 50%;
      transform: translateY(-50%);
      transition: opacity 0.1s, margin-left 0.15s, margin-right 0.15s;
    }

    i {
      margin-left: 20px;
    }
  }

  &:hover span::before {
    opacity: 0;
  }

  &:hover span,
  &:hover span i {
    margin-left: 0;
    margin-right: 20px;
  }
}

.ms_bgColorOrange {
  background-color: var(--ms-primary-color);
  color: white;

  span::before {
    background-color: white;
  }
}

.ms_bgColorWhite {
  background-color: white;
  color: black;

  span::before {
    background-color: black;
  }
}

.ms_border-white {
  border: 1px solid white;
}
</style>

<!-- :style="{ backgroundColor: bgColor, border: `1px solid ${bgColor}` }" -->
