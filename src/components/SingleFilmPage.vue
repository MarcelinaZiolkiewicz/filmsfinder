<template>
  <div class="wrapper" v-if="resultData">
    <div>
      <h1>{{resultData.title}}</h1>
      <img src="" alt="">
    </div>
    <div class="infoBox">
<!--    gatunek, link IMDB, opis, kraj produkcji -->
      <ul>
        <li v-for="genre in resultData.genres" :key="genre.id">{{genre.name}}</li>
        <li v-for="country in resultData.production_countries" :key="country.iso_3166_1">Kraj produkcji: {{country.name}}</li>
        <li>{{resultData.imdb_id}}</li>
      </ul>
      <div>
        {{resultData.overview}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SingleFilmPage",
  data() {
    return {
      resultData: null,
      language: 'pl-PL',
      API_KEY: '6867970f578bc54a2df62f33811ee300'
    }
  },
  mounted() {
    axios
      .get(this.API_MOVIE)
      .then(result => this.resultData = result.data)
      .catch(err => console.log(err))
  },
  computed: {
    API_MOVIE() {
      return `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${this.API_KEY}&language=${this.language}`
    }
  }
}
</script>

<style scoped>

  .wrapper{
    max-width: 1440px;
    background-color: #dfe6e9;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
  }

  .infoBox{
    background-color: white;
  }

</style>
