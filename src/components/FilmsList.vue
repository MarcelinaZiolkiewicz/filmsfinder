<template>
  <div>
    <h3 v-if="films">Znalezione filmy</h3>
    <SingleFilm v-for="item in films" :key="item.id" :film="item"/>
  </div>
</template>

<script>
import SingleFilm from './SingleFilm';

export default {
  name: "FilmsList.vue",
  components: {SingleFilm},
  props: {
    films: Array
  }
}
</script>

<style scoped>
h3{
  margin-top: 20px;
}
</style>