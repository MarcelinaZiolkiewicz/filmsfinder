<template>
  <div class="wrapper">
    <h3>Znalezione filmy: {{totalResults}} | Wyświetlone: {{films.length}}</h3>
    <SingleFilm v-for="item in films" :key="item.id" :film="item" class="filmsBox"/>

    <div class="buttonWrapper">
      <button class="loadMore" v-if="totalResults > 20 && films.length < totalResults" @click="getMoreData">Wczytaj więcej</button>
    </div>
  </div>
</template>

<script>
import SingleFilm from './SingleFilm';

export default {
  components: {SingleFilm},
  props: {
    resData: Object
  },
  methods: {
    getMoreData() {
      this.$emit('loadMore');
    }
  },
  computed: {
    films() {
      return this.resData.results
    },
    totalResults() {
      return this.resData.total_results
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

.buttonWrapper{
  width: 100%;
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