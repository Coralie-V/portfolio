import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hiking from '@/components/Hiking'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Accueil', component: Accueil},
    {path: '/about', name: 'About', component: About},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/hiking', name: 'Hiking', component: Hiking}

  ]
})
