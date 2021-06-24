<template>
  <div class="wrapper" @click="goToPath">
    <div class="imageBox">
      <img :src="getBackground" alt="film poster">
    </div>

    <div class="titleBox">
      <h3 class="title">{{film.title}}</h3>
    </div>
    <div class="infoBox">
      <p>Popularność: {{film.popularity}}</p>
      <p>Liczba głosów: {{film.vote_count}}</p>
    </div>
  </div>
</template>

<script>
import noImg from '../assets/noImage.png';

export default {
  props: {
    film: Object
  },
  computed: {
    getBackground() {
      if (this.film.poster_path != null){
        return `https://image.tmdb.org/t/p/original${this.film.poster_path}`
      }
      return noImg;
    },
    filmPath() {
      return `/film/${this.film.id}`
    }
  },
  methods: {
    goToPath() {
      this.$router.push(this.filmPath);
    }
  }
}

</script>

<style scoped>

  .infoBox{
    padding: 5px 10px;
  }

  .imageBox{
    overflow: hidden;
  }

  .imageBox img{
    width: 100%;
    transition: transform .5s ease;
  }

  .imageBox:hover img{
    transform: scale(1.1);
  }

  .wrapper{
    width: 200px;
    background-color: #b2bec3;
    margin: 8px;
    cursor: pointer;
  }

  .titleBox{
    padding: 5px;
    font-size: 16px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 450px) {
    .wrapper{
      width: 300px;
    }
  }

</style>