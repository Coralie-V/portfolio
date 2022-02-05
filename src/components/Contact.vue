<template>
  <div class="container">
    <h1 class="row mt-5">Me contacter</h1>
    <hr class="row col-3">

    <div class="contact row my-5">
      <div class="texte col-12 col-md-7">
        <h2>Mes réseaux sociaux</h2>
        <a href="https://fr-fr.facebook.com/Koreals.Vrtrs">
          <img src="static/img/facebook.svg" alt="facebook">
        </a>
        <a href="https://github.com/Coralie-V">
          <img src="static/img/github.svg" alt="github">
        </a>
        <a href="https://www.instagram.com/coralie.varrier/?hl=fr">
          <img src="static/img/instagram.svg" alt="instagram">
        </a>
        <a href="https://www.linkedin.com/in/coralie-varrier-499b91197/">
          <img src="static/img/linkedin.svg" alt="linkedin">
      </a>

      </div>
      <div class="texte col-12 col-md-7">
        <a href="mailto:coralievarrier@gmail.com" class="mail">Me contacter par mail</a>

      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'me contacter'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container .projet p{
  margin: 1.5rem 0;
}
hr{
  color: #dc3545;
  background-color: #dc3545;

}
.contact{
  margin-bottom: 10rem!important;
}
p{
  font-family: "Noto Sans", sans-serif;
}
.contact h2{
  font-weight: bold;
  margin-bottom: 2rem;
}
.contact img{
  width: 50px;
  display: inline-block;
  margin-right: 2rem;
}
.texte{
  margin-bottom: 6rem;
}
.mail{
  border: black solid 2px;
  padding: 0.75rem;
  color: black;
}
</style>
