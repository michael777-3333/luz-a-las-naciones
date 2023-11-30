<template>
      <div class="container-fluid" >
        <nav v-show="showNav" class="navbar fixed-top navbar-expand-lg bg-body-tertiary" id="nav">
            <div class="container-fluid">
                <div class="contenedorImaLogo" style="margin-left: 30px;">
                    <img src="src/assets/img/logo.png" style="width: 100px;  border-radius: 20px;" alt="logo">
                  </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    
                    
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="class nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mas Paginas
                            </a>
                            <ul class="dropdown-menu" style="color:black">
                              <li><a class="dropdown-item" href="#"><router-link to="/">Principal</router-link></a></li>
                            <li><a class="dropdown-item" href="#"><router-link to="/historia">Historia</router-link></a></li>
                            <li><a class="dropdown-item" href="#"><router-link to="/proyectos">Equipo</router-link></a></li>
                            <!-- <li><a class="dropdown-item" href="#"></a>Unetenos</li> -->
                            </ul>
                        </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Sobre Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Datos Importantes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Galeria</a>
                    </li>
                    
                    </ul>
                </div>
            </div>
          </nav>
    </div>
    <router-view></router-view>

</template>

<script >

import {ref , computed, reactive} from "vue"
import Swal from 'sweetalert2';
import { useWindowSize } from 'vue-window-size';
import $ from 'jquery'
// import {MenuIcon} from 'vue-material-design-icons/Menu.vue';
export default {
  setup() {
  // new Swal('Bievenido a luz a las Naciones');
    $('#nav')

// MOSTRAR LAS SWEETALERT EN ABOUT US 
function mision(value) {

     if (value== 'mision') {
      Swal.fire(
        'Misión',
        'Nuestra Mision es principalmente enviar un mensaje de amor en Cristo Jesús a toda familia, enfoncandonos principalmente en los niños donde ellos puedan recibir de la palabra de Dios, crescan en sabiduría y amor, enseñando la palabra y como seguirla a las familias y las nuevas generaciones que serán el futuro de la humanidad  ',
        'question'
      )
     }else if (value=='vision') {
      Swal.fire(
        'Visión',
        'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
        'question'
      )
    } else if (value=='historia') {
      Swal.fire({
        'title':'Historia',
        'text':'Nuestra Historia como fundación nace de una idea de nuestro fundador Juan Carlos Bennet con su esposa Patricia Bennet, ellos al ser colombianos, pero viviendo en norte america conocian la necesidad de las familias y niños colombianos, entonces con su esposa decidieron crear una fundacion llamada Luz a las Naciones, Juan Bennet creo una iglesia virtual...',
        'confirmButtonText':'Toda la Historia',
        'icon':'question',
        showCancelButton: true,
        showCloseButton: true
      } 
      ).then((result)=>{
        if (result.isConfirmed) {
          location.assign('/src/components/historia.html')
        }
      })
    }
}

// MOSTRAR EL NAVBAR DEPENDIENDO SI EN BAJADA O SUBIDA 
let animateAboutUs= ref(false)
let showNav=ref(true)
let indexUbication= ref(window.scrollY)
window.addEventListener('scroll', function () {
    let currentUbication=ref(window.scrollY) 
    if (currentUbication.value> 350) {
      animateAboutUs.value=true
    }
    if (indexUbication.value>=currentUbication.value) {
        showNav.value=true
    }else{
       showNav.value=false
    }
    indexUbication.value=currentUbication.value
})

// SHOW THE INDEX IMG OF GALERY 


let srcGaleriComplete= ref([
  'src/assets/img/galeria2/galeria1.png',
  'src/assets/img/galeria2/galeria2-fotor-20230624124312.png',
  'src/assets/img/galeria2/galeria3-fotor-20230624124331.png',
  'src/assets/img/galeria2/galeria4-fotor-20230624124350.png',
  'src/assets/img/galeria2/galeria5-fotor-20230624124413.png',
  'src/assets/img/galeria2/galeria6-fotor-20230624124427.png',
  'src/assets/img/galeria2/galeria7-fotor-20230624124444.png',
  'src/assets/img/galeria2/galeria8-fotor-20230624124516.png'
])
let imgSelect =ref()
let indexGlery= ref()
let showSelectImg=ref(false)
let nextImgSrc = ref()
let previousImageSrc= ref()
let previusIndex= ref()
function openFullimg(refer){
  imgSelect.value =refer
  showSelectImg.value=true
  showNav.value= false
}
function closeImg() {
  showSelectImg.value=false
  showNav.value= true
}
function nextImg() {
  for (let i = 0; i < srcGaleriComplete.value.length; i++) {
    if (imgSelect.value== srcGaleriComplete.value[srcGaleriComplete.value.length]) {
      nextImgSrc.value=srcGaleriComplete.value[0]
    }else if (imgSelect.value == srcGaleriComplete.value[i]) {
      indexGlery.value= i+1
      nextImgSrc.value=srcGaleriComplete.value[indexGlery.value]
    }
  }
  if (nextImgSrc.value==undefined) {
    imgSelect.value='src/assets/img/galeria2/galeria1.png'
  }else{
    imgSelect.value=nextImgSrc.value
  }
}
function prevuisImg() {
  for (let i = srcGaleriComplete.value.length-1; i >= 0; i--) {
    if (imgSelect.value == srcGaleriComplete.value[i]) {
      if (i==0) {
        previusIndex.value=srcGaleriComplete.value.length
        previousImageSrc.value=srcGaleriComplete.value[previusIndex.value]
      }else{
        previusIndex.value=i-1
        previousImageSrc.value=srcGaleriComplete.value[previusIndex.value]
      }
    }
  }
if (previousImageSrc.value==undefined) {
    imgSelect.value='src/assets/img/galeria2/galeria8-fotor-20230624124516.png'
}else{
  imgSelect.value=previousImageSrc.value
}
}


// QUITAR ALGUNAS FOTOS EN GALERIA DEPENDIENDO SI EL TAMANO DE LA PANTALLA ES DE CELULAR
const { width, height } = useWindowSize();



return{
  mision,
  showNav,windowWidth: width,animateAboutUs,imgSelect,showSelectImg,indexGlery,nextImgSrc,prevuisImg,
  openFullimg,closeImg,nextImg,srcGaleriComplete,previousImageSrc,previusIndex
}
}

}



      // Use sweetalert2

// return {}
</script>
<style scoped>
.columsProyectos{
  padding-right: 0;
    padding-left: 0;
}

a{
  color:black;
  text-decoration: none

}

</style>