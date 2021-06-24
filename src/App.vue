<template>
  <div id="app">
    <router-view/>
    <footer>
      Strona wykonana na potrzeby rekrutacji @Michał Ziółkiewcz | 2021
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }

  footer{
    text-align: center;
    padding: 10px;
  }

</style>
