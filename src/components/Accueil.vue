<template>
  <div>
    <div class="container">
      <h1 class="row mt-5">Mes projets</h1>
      <hr class="row col-3">

      <div class="projet row my-5">
        <div class="texte col-12 col-sm-7">
          <h2>2020 - The Hiking</h2>
          <p>Le projet "Hiking" est un site WordPress que j'ai réalisé durant ma deuxième année de MMI, je l'ai conçu grâce au thème AVADA et il est entièrement responsive. Je devais réaliser ce site grâce à une maquette graphique fournie.</p>
          <router-link class="nav-link" to="/Hiking">Voir les détails</router-link>
        </div>
        <div class="photo col-12 col-sm-5">
          <img class="image-projet" src="static/img/hiking-pc.png">
        </div>
      </div>

      <div class="projet row my-5">
        <div class="texte col-12 col-sm-7">
          <h2>2020 - Affiches Art Nouveau </h2>
          <p>
            Ce travail consistait à reproduire des affiches de 3 styles de l'Art Nouveau : Roycroft, Glasgow et Secession Viennoise. J'ai reproduit la première et la dernière en vectoriel sur Illustrator et la deuxième par retouche d'images sur Photoshop.
          </p>
          <router-link class="nav-link" to="/Affiches">Voir les détails</router-link>
        </div>
        <div class="photo col-12 col-sm-5">
          <img class="image-projet" src="static/img/affiches.jpg">
        </div>
      </div>

      <div class="projet row my-5">
        <div class="texte col-12 col-sm-7">
          <h2>2020 - Indiglu </h2>
          <p>
            Ce travail consistait à reproduire l'identité visuelle du site Indiglu et à créer la maquette graphique de la page d'accueil avec la nouvelle identité visuelle choisie.
          </p>
          <router-link class="nav-link" to="/Indiglu">Voir les détails</router-link>
        </div>
        <div class="photo col-12 col-sm-5">
          <img class="image-projet" src="static/img/indiglu.PNG">
        </div>
      </div>

      <div class="projet row my-5">
        <div class="texte col-12 col-sm-7">
          <h2>2020 - Portraits de classe </h2>
          <p>
            Ce travail consistait à dessiner les portraits de mon groupe de TP en SVG sur Illustrator.
          </p>
          <router-link class="nav-link" to="/Indiglu">Voir les détails</router-link>
        </div>
        <div class="photo col-12 col-sm-5">
          <img class="image-projet" src="static/img/portraits.png">
        </div>
      </div>


    </div>
  </div>

</template>

<script>
export default {
  name: 'Accueil',
  data () {
    return {
      msg: 'Bienvenue sur mon portfolio'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.nav-link{
  color: black;
  border: black solid 1px;
  border-radius: 80px;
  display: inline;
}
.nav-link:hover{
  color: #dc3545;
  border-color: #dc3545;
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
  max-width: 400px;
}

.projet{
  margin-bottom: 10rem!important;
}
p{
  font-family: "Noto Sans";
}


</style>
