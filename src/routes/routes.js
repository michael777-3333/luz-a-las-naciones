import Historia from '../components/Historia.vue'
import Index from '../components/index.vue'
import Proyectos from '../components/Proyectos.vue'
import Unetenos from '../components/Unetenos.vue'
export const routes =[
    {path:'/', component:Index},
    {path:'/historia', component:Historia},
    {path: '/proyectos', component:Proyectos},
    {path: '/unetenos', component:Unetenos}
]