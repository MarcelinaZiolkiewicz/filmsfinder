<template>
  <div class="wrapper">
    <img :src="getBackground" alt="">
    <h3 class="title">{{film.title}}</h3>
    <p>Popularność: <strong>{{film.popularity}}</strong></p>
    <p>Liczba głosów: <strong>{{film.vote_count}}</strong></p>
  </div>
</template>
<script>
import noImg from '../assets/noImage.png';

export default {
  name: "SingleFilm.vue",
  props: {
    film: Object
  },
  computed: {
    getBackground() {
      if (this.film.poster_path != null){
        return `https://image.tmdb.org/t/p/original${this.film.poster_path}`
      }
      return noImg;
    }
  }
}

</script>

<style scoped>
  .wrapper img{
    width: 10vw;
    background-position: center;
    background-repeat: no-repeat;
    -o-background-size: cover;
    margin: 10px 10px;
  }

  .wrapper{
    width: 12vw;
    display: inline-block;
    text-align: center;
    margin: 5px;
  }

  .title{
    height: 24px;
    overflow: hidden;
    text-after-overflow: '...';
  }
</style>