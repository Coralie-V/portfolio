<template>
  <div>
    <div class="container">
      <h1 class="row mt-5">Mes projets</h1>
      <hr class="row col-3">

      <div class="projet row my-5">
        <div class="texte col-12 col-md-7">
          <h2>2022 - Mashoo</h2>
          <p>Il s'agit d'un projet collectif réalisé en Licence Pro Webdesign dans lequel il fallait créer un site de précommande en ligne de chaussures personnalisables. Le projet a été réalisé sur Vue.js avec l'API Rest de WordPress.</p>
          <router-link class="nav-link" to="/Mashoo">Voir les détails</router-link>
        </div>
        <div class="photo col-12 col-md-5">
          <img class="image-projet" src="static/img/mashoo.png" alt="capture d'écran de la page d'accueil du site Mashoo">
        </div>
      </div>

      <div class="projet row my-5">
        <div class="texte col-12 col-md-7">
          <h2>2020 - The Hiking</h2>
          <p>Le projet "Hiking" est un site WordPress que j'ai réalisé durant ma deuxième année de MMI, je l'ai conçu grâce au thème AVADA et il est entièrement responsive. Je devais réaliser ce site grâce à une maquette graphique fournie.</p>
          <router-link class="nav-link" to="/Hiking">Voir les détails</router-link>
        </div>
        <div class="photo col-12 col-md-5">
          <img class="image-projet" src="static/img/hiking-pc.png" alt="page d'accueil hiking pc">
        </div>
      </div>

      <div class="projet row my-5">
        <div class="texte col-12 col-md-7">
          <h2>2020 - Affiches Art Nouveau </h2>
          <p>
            Ce travail consistait à reproduire des affiches de 3 styles de l'Art Nouveau : Roycroft, Glasgow et Secession Viennoise. J'ai reproduit la deuxième et la troisième en vectoriel sur Illustrator et la première par retouche d'images sur Photoshop.
          </p>
          <router-link class="nav-link" to="/Affiches">Voir les détails</router-link>
        </div>
        <div class="photo col-12 col-md-5">
          <img class="image-projet" src="static/img/affiches.jpg" alt="affiches">
        </div>
      </div>

      <div class="projet row my-5">
        <div class="texte col-12 col-md-7">
          <h2>2020 - Indiglu </h2>
          <p>
            Ce travail consistait à reproduire l'identité visuelle du site Indiglu et à créer la maquette graphique de la page d'accueil avec la nouvelle identité visuelle choisie.
          </p>
          <router-link class="nav-link" to="/Indiglu">Voir les détails</router-link>
        </div>
        <div class="photo col-12 col-md-5">
          <img class="image-projet" src="static/img/indiglu.png" alt="page d'accueil indiglu, maquette version pc">
        </div>
      </div>

      <div class="projet row my-5">
        <div class="texte col-12 col-md-7">
          <h2>2020 - Portraits de classe </h2>
          <p>
            Ce travail consistait à dessiner les portraits de mon groupe de TP en SVG sur Illustrator.
          </p>
          <router-link class="nav-link" to="/Portraits">Voir les détails</router-link>
        </div>
        <div class="photo col-12 col-md-5">
          <img class="image-projet" src="static/img/portraits.png" alt="images des portraits">
        </div>
      </div>


    </div>
  </div>

</template>

<script>
export default {
  name: 'Projet',
  data () {
    return {
      msg: 'Mes projets'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
.nav-link{
  border-radius: 80px;
  background-color:#413737 ;
  color: white;
  display: inline;
}
.nav-link:hover{
  background-color: #361515;
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
  max-width: 500px;
}

@media (max-width: 767px) {
  .image-projet{
  max-width: 300px;
}
}

@media (min-width: 768px) and (max-width: 1200px) {
.projet{
    flex-direction: column;
  }
}


.projet{
  margin-bottom: 10rem!important;
}
p{
  font-family: "Noto Sans", sans-serif;
}
.projet h2{
  font-weight: bold;
}

</style>
