<template>
  <div id="app">
    <div class="inputBox">
      <h2>Szukaj filmów</h2>
      <form v-on:submit.prevent="searchQuery">
        <input type="text" placeholder="Szukaj" v-model="filmToFind"/>
      </form>
    </div>
    <div class="films">
      <FilmsList :resData="resultData" v-if="resultData"/>
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
      API_KEY: '6867970f578bc54a2df62f33811ee300'
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
      return `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=${this.language}&query=${this.filmToFind}&page=1&include_adult=false`
    }
  },
  methods: {
    searchQuery() {
      if (this.filmToFind) {
        axios
            .get(this.API_SEARCH)
            .then(result => this.resultData = result.data)
            .catch(err => console.log(err))
      } else {
        alert('Musisz wprowadzić dane');
      }
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
    max-width: 1440px;
    background-color: #dfe6e9;
    height: 100%;
    min-height: 100vh;
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
    padding-bottom: 30px;
  }

</style>
