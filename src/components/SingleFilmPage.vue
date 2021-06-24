<template>
  <div>
    <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: "SingleFilmPage",
  props: {
    id: Number
  },
  mounted() {
    console.log('Zamontowane gotowe do fetchowania');
  }
}
</script>

<style scoped>

</style>