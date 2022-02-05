<template>
  <div class="container">
    <h1 class="row mt-5">2022 - Mashoo</h1>
    <hr class="row col-3">

    <div class="projet row my-5">
      <div class="texte col-12 col-md-8">
        <h2>Description du projet</h2>
        <p>Il s'agit d'un projet collectif réalisé en Licence Pro Webdesign dans lequel il fallait créer un site de précommande en ligne de chaussures personnalisables. Le projet a été réalisé sur Vue.js avec l'API Rest de WordPress.</p>
      </div>
      <div class="photo col-12">
        <img class="image-projet" src="static/img/mashoo.png" alt="capture d'écran de la page d'accueil de mashoo">
      </div>
      <div class="texte col-12 col-md-8">
        <h2>Outils</h2>
        <p>Figma</p>
        <p>Visual Studio Code</p>
        <p>Gitkraken et Github</p>
        <p>WordPress</p>
      </div>
      <div class="texte col-12 col-md-8">
        <a class="button-redirection" href="https://mashoo.mathistogni.fr/">Voir le site</a>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Hiking',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.container .projet p{
  margin: 1.5rem 0;
}
hr{
  color: #dc3545;
  background-color: #dc3545;

}
.image-projet{
  margin-top: 2rem;
  max-width: 600px;
  margin-bottom: 5rem!important;

}

@media (max-width: 576px) {
  .image-projet{
    max-width: 400px;
  }
}
p{
  font-family: "Noto Sans", sans-serif;
}
.projet h2{
  font-weight: bold;
}


a.button-redirection{
  border-radius: 80px;
  background-color:#413737 ;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
}
a.button-redirection:hover{
  background-color: #361515;
}
</style>
