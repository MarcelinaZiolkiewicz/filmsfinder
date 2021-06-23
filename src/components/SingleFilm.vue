<template>
  <p>{{ film.original_title }}</p>
</template>
<script>
export default {
  name: "SingleFilm.vue",
  props: {
    film: Object
  }
}
</script>

<style scoped>

</style>