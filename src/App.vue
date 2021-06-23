<template>
  <div id="app">
    <div class="inputBox">
      <h2>Szukaj filmów</h2>
      <input type="text" placeholder="Szukaj" v-model="valueToFind"/>
    </div>
    <div class="mostPopulars films">
      <h3>Znalezione</h3>
    </div>
    <div class="finded films">
      <h3>Najpopularniejsze filmy</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      valueToFind: '',
      API_KEY: 'xxx',
      API_DISCOVER_URL: `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
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
