<template>
  <div id="app">
    <div class="inputBox">
      <h2>Szukaj filmów</h2>
      <form v-on:submit.prevent="searchQuery">
        <input type="text" placeholder="Szukaj" v-model="filmToFind"/>
      </form>
    </div>
    <div class="mostPopulars films">
      <h3>Znalezione</h3>
      <p><strong>API link:</strong> {{API_SEARCH}}</p>

      <FilmsList :films="resultData"/>

    </div>
    <div class="finded films">
      <h3>Najpopularniejsze filmy</h3>
    </div>
  </div>
</template>

<script>
import FilmsList from './components/FilmsList';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    FilmsList

  },
  data() {
    return {
      resultData: null,
      filmToFind: '',
      movieId: null,
      page: 1,
      language: 'pl-PL',
      API_KEY: 'xxx'
    }
  },
  computed: {
    API_DISCOVER_URL() {
      return `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=${this.language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.page}&with_watch_monetization_types=flatrate`
    },
    API_GENRES() {
      return `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}&language=${this.language}`
    },
    API_MOVIE() {
      return `https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.API_KEY}&language=${this.language}`
    },
    API_SEARCH() {
      return `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&query=${this.filmToFind}&page=1&include_adult=false`
    }
  },
  methods: {
    searchQuery() {
      axios
          .get(this.API_SEARCH)
          .then(result => this.resultData = result)
          .catch(err => console.log(err))
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }

  #app{
    max-width: 1280px;
    background-color: #ddd;
    height: 100vh;
    margin: 0 auto;
  }

  .inputBox{
    padding: 20px 30px;
  }

.inputBox h2{
  font-size: 28px;
  font-weight: 400;
}

  .inputBox input{
    margin: 20px auto;
    display: block;
    width: 100%;
    max-width: 1100px;
    border: none;
    background-color: transparent;
    border-bottom: 3px solid goldenrod;
    font-size: 80px;
    outline: none;
    padding: 10px 20px;
  }

  .films{
    padding: 20px 30px;
  }

</style>
