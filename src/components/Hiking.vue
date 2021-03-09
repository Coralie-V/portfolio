<template>
  <div class="container">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'Hiking',
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
</style>
