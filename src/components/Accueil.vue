<template>
  <div>
    <div class="container">
       <div class="texte col-12 col-md-12">
         <p class="nom">
          Coralie VARRIER        
        </p>
        <p class="chapo">
          Je m'appelle Coralie, j'ai 20 ans, je suis actuellement étudiante en Licence Pro Webdesign à Montbéliard.
        </p>
        <div class="projets">
          <div class="projet-img">
          <img class="image-projet" src="static/img/hiking-pc.png" alt="page d'accueil hiking pc">
          </div>
          <div class="button">
          <router-link class="nav-link" to="/Projet"> > Voir les détails</router-link>
          </div>
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
h1 {
  font-weight: normal;
}

hr{
  color: #dc3545;
  background-color: #dc3545;

}

p, .nav-link{
  font-family: "Noto Sans", sans-serif;
}
.nav-link{
  border-radius: 80px;
  background-color:#413737 ;
  color: white;
}
.nav-link:hover{
  background-color: #361515;

}

.nom{
  font-size: 3rem;
  font-family: Anton;
  margin-top: 1em;
}
@media (max-width: 480px) {
  .container .nom{
  font-size: 0.5rem;
}
}

@media (max-width: 767px) {
  .container .nom{
  font-size: 2rem;
}
}

.projets{
  padding: 3em;
  background-color: #9b9183;
  margin-bottom: 5em;
 
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
.button{
   display: flex;
  justify-content: center;
  margin-top: 2em;
}

.projet-img{
  display: flex;
  justify-content: center;
}

</style>
