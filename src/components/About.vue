<template>
  <div class="container">
    <div class="a-propos row my-5">
      
      <div class="texte competences">
        <h2>Compétences</h2>

        <div class="row">
          <div class="col-sm-4">
            <img src="static/img/html.png" class="img-competence" alt="logo HTML">
            <p>HTML 5</p>
          </div>
          <div class="col-sm-4">
            <img src="static/img/css.png" class="img-competence" alt="logo CSS">
            <p>CSS 3</p>
          </div>
          <div class="col-sm-4">
            <img src="static/img/javascript.png" class="img-competence js" alt="logo JS">
            <p>JavaScript</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <img src="static/img/vue.png" class="img-competence" alt="logo Vue JS">
            <p>Vue JS</p>
          </div>
          <div class="col-sm-4">
            <img src="static/img/bootstrap.png" class="img-competence" alt="logo Bootstrap">
            <p>Bootstrap</p>
          </div>
          <div class="col-sm-4">
            <img src="static/img/wordpress.jpg" class="img-competence" alt="logo WordPress">
            <p>WordPress</p>
          </div>
        </div>

      </div>
      <div class="texte logiciels">
          <h2>Logiciels</h2>


        <div class="row">
          <div class="col-sm-4">
            <img src="static/img/premierepro.jpeg" class="img-logiciel" alt="logo Premiere">
            <p>Adobe Premiere Pro</p>
          </div>
          <div class="col-sm-4">
            <img src="static/img/aftereffect.jpeg" class="img-logiciel" alt="logo After Effects">
            <p>Adobe After Effects</p>
          </div>
          <div class="col-sm-4">
            <img src="static/img/adobeXD.jpg" class="img-logiciel" alt="logo Adobe XD">
            <p>Adobe XD</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <img src="static/img/photoshop.jpeg" class="img-logiciel" alt="logo Photoshop">
            <p>Adobe Photoshop</p>
          </div>
          <div class="col-sm-4">
            <img src="static/img/illustrator.png" class="img-logiciel" alt="logo Illustrator">
            <p>Adobe Illustrator</p>
          </div>
          <div class="col-sm-4">
            <img src="static/img/indesign.png" class="img-logiciel" alt="logo Adobe Indesign">
            <p>Adobe Indesign</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <img src="static/img/figma.png" class="img-logiciel" alt="logo Figma">
            <p>Figma</p>
          </div>
          <div class="col-sm-4">
            <img src="static/img/Phpstorm.png" class="img-logiciel" alt="logo PhpStorm">
            <p>PhpStorm</p>
          </div>
          <div class="col-sm-4">
            <img src="static/img/vscode.png" class="img-logiciel" alt="logoVisual Studio Code">
            <p>Visual Studio Code</p>
          </div>
        </div>

      </div>
    </div>
      <div class="info-cv"> 
        <a class="cv" href="http://coralievarrier.fr/coralie-varrier-cv.pdf">Télécharger mon CV</a>
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

.img-competence, .img-logiciel{
  display: block;
  margin: auto;
  width: 45%;
  padding: 20px;
}
.js{
  width: 75% ;
}

p{
  font-family: "Noto Sans", sans-serif;
}
.row p{
  text-align: center;
}

.a-propos h2{
  font-weight: bold;
}

@media (max-width: 576px) {
  .image-moi{
    max-width: 200px;
  }
}

.cv{
  color: #1f1f1f;
  border: 2px solid #1f1f1f;
  padding: 0.5rem 1.5rem;

}

.info-cv{
  margin-bottom: 3em;
  place-content: center;
}
</style>
