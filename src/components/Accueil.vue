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

p{
  font-family: "Noto Sans", sans-serif;
}

.nom{
  font-size: 3rem;
  font-family: Anton;
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


</style>
