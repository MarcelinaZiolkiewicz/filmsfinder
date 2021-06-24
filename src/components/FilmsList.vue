<template>
  <div class="wrapper">

    <div class="amount">
      <h3>Znalezione filmy: {{totalResults}}</h3>
      <h3>Wyświetlone: {{films.length}}</h3>
    </div>
    <SingleFilm v-for="item in films" :key="item.id" :film="item" class="filmsBox"/>

    <div class="buttonWrapper">
      <button class="loadMore" v-if="totalResults > 20 && films.length < totalResults" @click="getMoreData">Wczytaj więcej</button>
    </div>

    <BackToTop v-if="showBackButton" @backToTop="backToTop"/>
  </div>
</template>

<script>
import SingleFilm from './SingleFilm';
import BackToTop from "@/components/BackToTop";

export default {
  components: {BackToTop, SingleFilm},
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      showBackButton: false,
    }
  },
  props: {
    resData: Object
  },
  methods: {
    getMoreData() {
      this.$emit('loadMore');
    },
    handleScroll() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        this.showBackButton = true
      }
      else{
        this.showBackButton = false
      }
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
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
  justify-content: center;
  flex-flow: row wrap;
}

.amount{
  width: 90%;
  margin-top: 20px;
}

.amount h3{
  margin-left: 20px;
  display: inline;
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

@media (max-width: 460px) {
  .amount h3{
    display: block;
  }
}
</style>