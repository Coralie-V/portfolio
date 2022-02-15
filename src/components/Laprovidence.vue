<template>
  <div class="container">
    <h1 class="row mt-5">2022 - La Providence</h1>
    <hr class="row col-3">

    <div class="projet row my-5">
      <div class="texte col-12 col-md-8">
        <h2>Description du projet</h2>
        <p>Il s'agit d'un projet individuel réalisé en Licence Pro Webdesign qui consistait à faire une refonte d'un site Internet. J'ai choisi le site d'école et collège La Providence de Chèvremont. J'ai proposé une nouvelle charte graphique et j'ai réalisé les maquettes graphiques sur Figma ainsi que l'intégration du site final sur WordPress.</p>
        <p>J'ai commencé par réaliser un dossier de communication pour ensuite élaborer une nouvelle charte graphique.</p>
        <p>J'ai ensuite réalisé des maquettes graphiques version mobile et desktop des différentes pages du site.</p>
        <p>Une fois les maquettes graphiques réalisées, j'ai intégré ces pages en HTML/CSS avant de les intégrer sur WordPress.</p>
        <p>J'ai ensuite réalisé mon propre thème sur mesure WordPress dans lequel j'ai ajouté mes styles et templates de pages spécifiques. J'ai intégré le contenu des pages en utilisant Gutemberg de WordPress ainsi que les plugins CPTUI et ACF. </p>


      </div>
      <div class="photo col-12">
        <img class="image-projet" src="static/img/laProvidence.png" alt="capture d'écran de la page d'accueil de mashoo">
      </div>
      <div class="texte col-12 col-md-8">
        <h2>Outils</h2>
        <p>Figma</p>
        <p>Visual Studio Code</p>
        <p>Gitkraken et Github</p>
        <p>WordPress</p>
      </div>
      <div class="texte col-12 col-md-8">
        <a class="button-redirection" href="https://laprovidence.coralievarrier.fr/">Voir le site</a>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Laprovidence',
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
