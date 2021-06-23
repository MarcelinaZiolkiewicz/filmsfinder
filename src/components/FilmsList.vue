<template>
  <div>
    <p>Lista filmów</p>
    <SingleFilm/>
  </div>
</template>

<script>
import SingleFilm from './SingleFilm';

export default {
name: "FilmsList.vue",
  components: {SingleFilm}
}
</script>

<style scoped>

</style>