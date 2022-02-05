import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hiking from '@/components/Hiking'
import Indiglu from '@/components/Indiglu'
import Affiches from '@/components/Affiches'
import Portraits from '@/components/Portraits'
import Projet from '@/components/Projet'
import Mashoo from '@/components/Mashoo'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Accueil', component: Accueil},
    {path: '/about', name: 'About', component: About},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/hiking', name: 'Hiking', component: Hiking},
    {path: '/indiglu', name: 'Indiglu', component: Indiglu},
    {path: '/affiches', name: 'Affiches', component: Affiches},
    {path: '/portraits', name: 'Portraits', component: Portraits},
    {path: '/projet', name: 'Projet', component: Projet},
    {path: '/mashoo', name: 'Mashoo', component: Mashoo}


  ]
})
