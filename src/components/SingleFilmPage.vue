<template>
  <div class="wrapper" v-if="resultData">
    <div class="background">
      <img :src="getBackground" alt="">
    </div>
    <h1 class="title">{{resultData.title}} | {{releaseDate}} r.</h1>
    <div class="infoBox">
      <ul>
        <li>
          Kategorie:
          <p v-for="genre in resultData.genres" :key="genre.id">
            {{genre.name}},
          </p>
        </li>

        <li>
          Kraje produkcji:
          <p v-for="country in resultData.production_countries" :key="country.iso_3166_1">
            {{country.name}},
          </p>
        </li>

        <li>
          Ocena: {{resultData.vote_average}}
        </li>

        <li>
          <a :href="imdbLink" target="_blank">Strona IMDB</a>
        </li>
      </ul>
      <div class="overview">
        {{resultData.overview}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import noImg from "@/assets/noImage.png";

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
    },
    imdbLink() {
      return `https://www.imdb.com/title/${this.resultData.imdb_id}`
    },
    getBackground() {
      if (this.resultData.backdrop_path != null){
        return `https://image.tmdb.org/t/p/original${this.resultData.backdrop_path}`
      }
      return noImg;
    },
    releaseDate() {
      return this.resultData.release_date.slice(0,4)
    },
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

  .infoBox ul{
    background-color: #b2bec3;
    padding: 15px;
    font-size: 18px;
    font-weight: 600;
  }

  .infoBox p{
    display: inline-block;
    margin-left: 5px;
  }
  .infoBox a{
    color: black;
    text-decoration: none;
    border-bottom: 2px solid black;
  }


  .infoBox ul li{
    display: inline;
    border-left: 2px solid black;
    padding: 0 5px;
  }

  .infoBox ul li:last-of-type{
    border-right: 2px solid black;
  }

  .background{
    overflow: hidden;
  }

  .background img{
    height: 45vh;
    width: 100%;
    object-fit: cover;
    object-position: center;
    transition: .3s ease;
  }

  .background:hover img{
    transform: scale(1.1);
  }

  .title{
    color: black;
    padding: 15px 30px;
  }

  .overview{
    padding: 20px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: .5px;
  }

  @media (max-width: 450px) {
    .infoBox ul li{
      display: block;
      border: none;
      margin: 10px 0;
    }

    .infoBox ul li:last-of-type{
      border: none;
    }
  }

</style>
