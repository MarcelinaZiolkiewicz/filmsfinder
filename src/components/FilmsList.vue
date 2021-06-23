<template>
  <div class="wrapper">
    <h3>Znalezione filmy: {{resData.total_results}}</h3>
    <SingleFilm v-for="item in resData.results" :key="item.id" :film="item" class="filmsBox"/>
    <button class="loadMore" v-if="resData.total_results > 20" @click="getMoreData">Wczytaj więcej</button>
  </div>
</template>

<script>
import SingleFilm from './SingleFilm';

export default {
  name: "FilmsList.vue",
  components: {SingleFilm},
  props: {
    resData: Object
  },
  methods: {
    getMoreData() {
      console.log('Wczytaj więcej danych');
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

h3{
  margin-top: 20px;
  display: block;
  width: 90%;
}

.loadMore{
  background-color: transparent;
  border: 2px solid goldenrod;
  font-size: 24px;
  padding: 10px 20px;
  display: block;
  margin: 30px auto 0 auto;
  font-weight: 600;
  transition: .3s;
}

.loadMore:hover{
  background-color: goldenrod;
  color: white;
}
</style>