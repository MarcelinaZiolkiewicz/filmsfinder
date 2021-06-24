<template>
  <div @click="backToTop">
    <div class="arrow"></div>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  methods: {
    backToTop() {
      this.$emit('backToTop');
    }
  }
}
</script>

<style scoped>
  div{
    height: 80px;
    width: 80px;
    background-color: #636e72;
    opacity: 0.8;
    position: fixed;
    bottom: 2vw;
    right: 2vw;
    border-radius: 25px;
    cursor: pointer;
  }

  .arrow{
    background-image: url("../assets/arrow-up.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

</style>