<template>
  <div id="app">
    <header>
      <div class="nav-container">
        <nav class="navbar navbar-expand-md">

          <button class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navigation">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/About">À propos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Contact">Contact</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app .nav-container{
  background-color:#343a40;
}
.navbar{
  padding: 1.2rem 1rem;
}
.nav-container a{
  font-family: Anton;
  color: #6c757d;
}
.navbar-toggler-icon{
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

@media (min-width: 768px) {
  .navbar-expand-md .navbar-nav .nav-link {
    padding: 0 0.5rem 0 0.5rem;
    margin-left: 3rem;
  }
}

@media (max-width: 536px) {
  .nav-container a{
    padding : 1.1rem 0;
  }
}

</style>
