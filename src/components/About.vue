<template>
  <div class="container">
    <div class="a-propos row my-5">
      <div class="texte col-12 col-md-7">
        <h2>Présentation</h2>
        <p>
          Je m'appelle Coralie, j'ai 19 ans, je suis actuellement en 2ème année de DUT MMI (Métiers du Multimédia et de l'Internet).
        </p>
        <p>
          J'ai rejoint cette formation car j'étais intéressée par le design graphique et l'audiovisuel et maintenant j'aime un peu de tout.
        </p>
        <p>
          Je suis également passionnée par les animes et les mangas.
        </p>
      </div>
      <div class="photo col-12 col-md-5">
        <img class="image-moi" src="static/img/photo-coralie.jpg" alt="photo de moi">
      </div>
      <div class="texte competences col-12 col-md-7">
        <h2>Compétences</h2>
        <p>HTML/CSS/JS</p>
        <p>VueJs</p>
        <p>Bootstrap</p>
        <p>WordPress</p>
        <p>Adobe Premiere</p>
        <p>Adobe Photoshop</p>
        <p>Adobe Illustrator</p>
        <p>Adobe XD</p>
        <p>Adobe After Effect</p>
      </div>
      <a class="cv" href="http://coralievarrier.fr/coralie-varrier-cv.pdf">Accéder au CV</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'À propos'
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
.image-moi{
  margin: 2rem 0;
  max-width: 400px;
}

.a-propos{
  margin-bottom: 10rem!important;
}
p{
  font-family: "Noto Sans", sans-serif;
}
.a-propos h2{
  font-weight: bold;
}

@media (max-width: 576px) {
  .image-moi{
    max-width: 300px;
  }
}
.competences p{
  display: inline-block;
  border: black solid 1px;
  border-radius: 80px;
  padding: 0.30rem;
  margin: 0.2rem;
}
.cv{
  margin-top: 3.5rem;
  margin-left: 1rem;
  color: #dc3545;

}
</style>
