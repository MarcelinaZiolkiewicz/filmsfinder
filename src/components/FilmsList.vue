<template>
  <div>
    <h3>Lista filmów</h3>
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
h3{
  margin-top: 20px;
}
</style>