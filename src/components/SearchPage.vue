<template>
  <div class="wrapper">
    <div class="inputBox">
      <h2>Znajdź film w bazie ponad 662 588 filmów!</h2>
      <form v-on:submit.prevent="searchQuery">
        <input type="text" placeholder="Szukaj filmu" v-model="filmToFind"/>
      </form>
    </div>

    <div v-if="resultData" class="sortingButtons">
      <button @click="sortByName">Sortuj po nazwie</button>
      <button @click="sortByPopularity">Sortuj po popularności</button>
    </div>

    <div class="films">
      <FilmsList :resData="resultData" v-if="resultData" @loadMore="getMoreData"/>
    </div>
  </div>
</template>

<script>
import FilmsList from './FilmsList';
import axios from 'axios';

export default {
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
      return `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=${this.language}&query=${this.filmToFind}&page=${this.page}&include_adult=false`
    },
    films() {
      return this.resultData.results
    }
  },
  methods: {
    saveToLocalStorage() {
      let dataToSave = JSON.stringify(this.resultData);
      localStorage.setItem('pageToLoad', this.page);
      localStorage.setItem('query', this.filmToFind);
      localStorage.setItem('loadedData', dataToSave);
    },
    sortByName() {
      this.films.sort((a,b) => a.title > b.title ? 1 : -1)
    },
    sortByPopularity() {
      this.films.sort((a,b) => a.popularity < b.popularity ? 1 : -1)
    },
    searchQuery() {
      this.page = 1;

      if (this.filmToFind) {
        axios
            .get(this.API_SEARCH)
            .then(result => {
              this.resultData = result.data;
              localStorage.removeItem('loadedData');
              this.saveToLocalStorage()
            })
            .catch(err => console.log(err))
      } else {
        alert('Musisz wprowadzić dane');
      }

    },
    getMoreData() {
      this.page++;

      axios
          .get(this.API_SEARCH)
          .then(result => {
            this.resultData.results = this.resultData.results.concat(result.data.results);
            this.saveToLocalStorage()
          })
          .catch(err => console.log(err))
    }
  },
  mounted() {

    if (localStorage.getItem('loadedData') != null) {

      this.page = localStorage.getItem('pageToLoad');
      this.filmToFind = localStorage.getItem('query');

      let data = localStorage.getItem('loadedData');
      this.resultData = JSON.parse(data);

    }

    window.onbeforeunload = function () {
      let storage = window.localStorage;
      storage.clear()
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

  .inputBox{
    padding: 20px 30px;
  }

  .inputBox h2{
    font-size: 28px;
    font-weight: 400;
    text-align: center;
  }

  .inputBox input{
    margin: 20px auto;
    display: block;
    max-width: 1100px;
    border: none;
    background-color: transparent;
    border-bottom: 4px solid #636e72;
    font-size: 80px;
    outline: none;
    padding: 10px 20px;
    color: #636e72;
  }

  .inputBox input:focus{
    border-color: #1abc9c;
  }

  .films{
    padding-bottom: 30px;
  }

  .sortingButtons{
    text-align: left;
    width: 90%;
    margin: 0 auto;
  }
  .sortingButtons button{
    background-color: transparent;
    padding: 5px 10px;
    font-size: 14px;
    margin-left: 10px;
    border: 2px solid black;
    transition: .3s ease;
  }

  .sortingButtons button:hover{
    background-color: black;
    color: white;
  }

  @media (max-width: 1200px) {
    .inputBox input{
      font-size: 30px;
      width: 90%;
    }

    .inputBox h2{
      display: none;
    }
  }

</style>