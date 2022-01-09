<template>
  <div class="container">
    <h1 class="row mt-5">2020 - Indiglu</h1>
    <hr class="row col-3">

    <div class="projet row my-5">
      <div class="texte col-12 col-md-8">
        <h2>Description du projet</h2>
        <p>
          Ce travail consistait à reproduire l'identité visuelle du site Indiglu et à créer la maquette graphique de la page d'accueil avec la nouvelle identité visuelle choisie.
        </p>
        <p>
          Dans un premier temps, j'ai fait une analyse connotée et dénotée du logo existant Indiglu puis j'ai fait la même analyse avec 2 logos concurrents à Indiglu (Creamsoft et Fatsecret). J'ai ensuite fait une comparaison de ces 3 logos.
        </p>
        <p>
          Je me suis ensuite interéssée à la cible d'Indiglu et j'ai réalisé 2 personas (un persona primaire et un persona secondaire).
        </p>
        <p>
          J'ai élaboré une carte heuristique pour chercher des idées pour faire un nouveau logo et j'ai dessiné les idées sur papier.
        </p>
        <p>
          J'ai ensuite dessiné les logos les plus pertinents en vectoriel sur Illustrator avec des variations de typographies, de taille, de couleur, de contraste, de graisse...
        </p>
        <p>
          Une fois mon logo choisi, j'ai justifié ma proposition et je suis passée à la maquette.
        </p>
      </div>

      <div class="photo col-12">
        <img class="image-projet" src="static/img/indiglu.png" alt="page d'accueil indiglu, maquette version pc">
      </div>


      <div class="texte col-12 col-md-8">
        <h2>Outils</h2>
        <p>Adobe XD</p>
        <p>Adobe Illustrator</p>
        <p>OpenOffice</p>
        <p>Papier et crayon</p>
      </div>
      <div class="texte col-12 col-md-8">
        <h2>Aperçu du travail</h2>
        <a href="http://coralievarrier.fr/indiglu/indiglu.pdf">-> Lien vers la maquette graphique</a>
        <a href="https://indiglu.com/">-> Lien vers le site Indiglu d'origine</a>

      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Indiglu',
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


a{
  color: black;
  display: block;
}
a:hover{
  color: #dc3545;
}
</style>
