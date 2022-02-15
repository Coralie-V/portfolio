<template>
  <div class="container">
    <h1 class="row mt-5">2021 - Léon</h1>
    <hr class="row col-3">

    <div class="projet row my-5">
      <div class="texte col-12 col-md-8">
        <h2>Description du projet</h2>
        <p>Léon est un restaurant spécialisé dans les fruits de mer. J'ai réalisé un projet collectif durant ma Licence Pro Webdesign qui consistait à faire une refonte graphique de la page d'accueil et de la carte des repas de leur site. J'ai réalisé ce travail sur Figma.</p>
      </div>
      <div class="photo col-12">
        <img class="image-projet" src="static/img/leon.png" alt="Mockup de la page d'accueil de Léon">
      </div>
      <div class="texte col-12 col-md-8">
        <h2>Outils</h2>
        <p>Figma</p>
      </div>
      <div class="texte col-12 col-md-8">
        <a class="button-redirection" href="https://www.figma.com/file/uE2Vy2jtgWY1JzJBTOuZvr/Maquette-L%C3%A9on?node-id=0%3A1">Voir la maquette</a>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Leon',
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
