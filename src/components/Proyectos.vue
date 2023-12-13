<template>
  <div class="container-fluid" :style="{ 'background-image': 'url(' + imagesFondos.fomdo + ')' }">
    <div class="row">
      <div style="height: 70px"></div>
      <div class="col titles d-flex justify-content-center" style="font-size: 40px">
        <div>Nuestro Equipo</div>
      </div>
    </div>
  
  <div style="display: none;" >{{ count }}</div>
  <div style="display: none;">{{ windowWidth }}</div>
  <div class="container-fluid">
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <h4 v-if="count==0">Fundadores</h4>
          <h4 v-if="count==1">Coordinadora</h4>
          <h4 v-if="count==2">Maestros</h4>
          <h4 v-if="count==3">Maestros</h4>
          <h4 v-if="count==4">Ayudantes</h4>
        </div>
      </div>
    <div class="row ">
      <div class="imgProyects col-xs-auto col-sm-1 col-md-1 d-flex">
        <button v-if="windowWidth > 992" class="btn btn" style="color: black; font-size: 30px;">
          <i class="bi bi-box-arrow-left" @click="countBack()"></i>
        </button>
      </div>
 
      <div v-if="count == 0" class="col-xs-12 col-sm-12 col-md-5 d-flex justify-content-center"
        v-for="(item, index) in fundadores">
        <div class="cardFundador  mb-3" style="border: 1px solid; width: 500px; height: 550px;">
          <div class="contenedorImg d-flex justify-content-center m-2" ><img class=" " v-bind:src="item.img" alt=""></div>
          <div class="cardBody" >
            <div class="d-flex justify-content-center">
              <h5>{{ item.name }}</h5>
            </div>
            <div class="d-flex justify-content-center">
            <p>{{ item.tipo }}</p>
          </div>
          <div class="d-flex justify-content-center">
            <button @click="getInformation(item.id)" class="boton btn btn-dark ">Saber mas </button>
          </div>
          </div>
        </div>       
      </div>


      <div v-if="count == 1" class="col-10 d-flex justify-content-center" v-for="(item, index) in coordinador">
        <div class="cardFundador " style="border: 1px solid; width: 500px; height: 550px;">
          <div class="contenedorImg d-flex justify-content-center m-2" ><img class=" " v-bind:src="item.img" alt=""></div>
          <div class="cardBody" >
            <div class="d-flex justify-content-center">
              <h5>{{ item.name }}</h5>
            </div>
            <div class="d-flex justify-content-center">
            <p>{{ item.tipo }}</p>
          </div>
          <div class="d-flex justify-content-center">
            <button @click="getInformation(item.id)" class="boton btn btn-dark ">Saber mas </button>
          </div>
          </div>
        </div>   
      </div>


      <div v-if="count == 2" class="cardsMaestros mx-3 col-xs-12 col-sm-12 col-md-12 col-lg-3 d-flex justify-content-center"
        v-for="(item, index) in maestros">
        <div class="cardFundador mb-3" style="border: 1px solid; width: 500px; height: 550px;">
          <div class="contenedorImg d-flex justify-content-center m-2" ><img class=" " v-bind:src="item.img" alt=""></div>
          <div class="cardBody" >
            <div class="d-flex justify-content-center">
              <h5>{{ item.name }}</h5>
            </div>
            <div class="d-flex justify-content-center">
            <p>{{ item.tipo }}</p>
          </div>
          <div class="d-flex justify-content-center">
            <button @click="getInformation(item.id)" class="boton btn btn-dark ">Saber mas </button>
          </div>
          </div>
        </div>   
      </div>
        
      <div v-if="count == 3" class="cardsMaestros col-xs-12 col-sm-12 col-md-5 d-flex justify-content-center d-flex justify-content-center"
        v-for="(item, index) in maestros">
        <div class="cardFundador mb-3" style="border: 1px solid; width: 500px; height: 550px;">
          <div class="contenedorImg d-flex justify-content-center m-2" ><img class=" " v-bind:src="item.img" alt=""></div>
          <div class="cardBody" >
            <div class="d-flex justify-content-center">
              <h5>{{ item.name }}</h5>
            </div>
            <div class="d-flex justify-content-center">
            <p>{{ item.tipo }}</p>
          </div>
          <div class="d-flex justify-content-center">
            <button @click="getInformation(item.id)" class="boton btn btn-dark ">Saber mas </button>
          </div>
          </div>
        </div>   
      </div>
   
      <div v-if="count == 4" class="col-xs-12 col-sm-12 col-md-5 d-flex justify-content-center"
        v-for="(item) in ayudantes">
        <div class="cardFundador mb-3" style="border: 1px solid; width: 500px; height: 550px;">
          <div class="contenedorImg d-flex justify-content-center m-2" ><img class=" " v-bind:src="item.img" alt=""></div>
          <div class="cardBody" >
            <div class="d-flex justify-content-center">
              <h5>{{ item.name }}</h5>
            </div>
            <div class="d-flex justify-content-center">
            <p>{{ item.tipo }}</p>
          </div>
          <div class="d-flex justify-content-center">
            <button @click="getInformation(item.id)" class="boton btn btn-dark ">Saber mas </button>
          </div>
          </div>
        </div>   
      </div>

      <div class="imgProyects col-xs-12 col-sm-1 col-md-1 d-flex">
        <button v-if="windowWidth < 575" class=" btn btn" style="color: black; font-size: 30px;">
          <i class="bi bi-box-arrow-left" @click="countBack()"></i>
        </button>
        <button  class=" btn btn" style="color: black; font-size: 30px;">
          <i class="bi bi-box-arrow-right" @click="countProyects()"></i>
        </button>

      </div>
    </div>
    <div class="row m-5">
      <div class="col-12 d-flex justify-content-center">
        <button  @click="volver()" class="volver boton btn btn">Volver</button>
      </div>
    </div>

  </div>
</div>
</template>

<script >
import { ref, computed, reactive } from "vue"
import Swal from 'sweetalert2';
import { useWindowSize } from 'vue-window-size';
import { useRouter, useRoute } from 'vue-router'
import { filename } from 'pathe/utils'
// import $ from jquery
export default {
  setup() {
    const router = useRouter()
    let letNumber2=ref(true)
    let count = ref(0)
    const glob2 = import.meta.glob('/src/assets/img/maestros/*jpg', { eager: true })
// console.log(glob);
const images2 = Object.fromEntries(
  Object.entries(glob2).map(([key, value]) => [filename(key), value.default])
)
const fondos = import.meta.glob('/src/assets/img/fondos/*png', { eager: true })
// console.log(glob);
const imagesFondos = Object.fromEntries(
  Object.entries(fondos).map(([key, value]) => [filename(key), value.default])
)
    let fundadores = ref([
      {
        id:1,
        name: "Juan Bennet",
        tipo: "Pastor Fundador",
        img: images2.juan,
      },
      {
        id:2,
        name: "Patricia Bennet",
        tipo: "Pastora Co-Fundadora",
        img: "src/sfds",
      },
    ]);

    let coordinador = ref([
      {
        id:3,
        name: "Magda Suarez",
        tipo: "Coordinadora",
        img: images2.magda,
      },
    ]);

    let maestros = ref([
      {
        id:4,
        name: "Leonardo Fiallo",
        tipo: "Maestra",
        img: images2.leo,
        visible:true
      },
      {
        id:5,
        name: "Maria Porras",
        tipo: "Maestra",
        img: images2.maria,
      },
      {
        id:6,
        name: "Miguel Duran",
        tipo: "Pastor",
        img: images2.miguel,
      },

    ]);

    let ayudantes = ref([
      {
        id:7,
        name: "Isaac Inca",
        tipo: "Ayudante",
        img: images2.isaac,
      },
      {
        id:8,
        name: "Michael Sarmiento",
        tipo: "Ayudante",
        img: images2.michael,
      },
    ]);

    function countProyects() {
      count.value += 1
      if(count.value==3){
        maestros.value=[
        {
          id:9,
          name: "Laura Galviz",
          tipo: "Maestra",
          img: images2.laura,
        },
        {
          id:10,
          name: "Doris",
          tipo: "Maestra",
          img: images2.doris,
        },
        ]
      }
      if(count.value==4){
        console.log(maestros.value);

        maestros.value=[
        {
        id:4,
        name: "Leonardo Fiallo",
        tipo: "Maestra",
        img: images2.leo,
        visible:true
      },
      {
        id:5,
        name: "Maria Porras",
        tipo: "Maestra",
        img: images2.maria,
      },
      {
        id:6,
        name: "Miguel Duran",
        tipo: "Pastor",
        img: images2.miguel,
      },
        ]
      }
      if (count.value == 5) {
        count.value = 0
      }
    }
    function countBack() {
      count.value -= 1
      if(count.value==2){
        letNumber2.value=false
      }
      if (count.value == -1) {
        count.value = 3
      }
      if(count.value==2){

        maestros.value=[
        {
        id:4,
        name: "Leonardo Fiallo",
        tipo: "Maestra",
        img: images2.leo,
        visible:true
      },
      {
        id:5,
        name: "Maria Porras",
        tipo: "Maestra",
        img: images2.maria,
      },
      {
        id:6,
        name: "Miguel Duran",
        tipo: "Pastor",
        img: images2.miguel,
      },
        ]
      }
      if(count.value==3){
      
      maestros.value=[
      {
        id:9,
        name: "Laura Galviz",
        tipo: "Maestra",
        img: images2.laura,
      },
      {
        id:10,
        name: "Doris",
        tipo: "Maestra",
        img: images2.doris,
      },
      ]
      }
    }

function getInformation(params) {
      switch (params) {
        case 1:
        Swal.fire(
          'Juan Bennet',
          'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
          // 'question'
        )
          break;
        case 2:
        Swal.fire(
          'Patricia Bennet',
          'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
          // 'question'
        )
          break;    
        case 3:
        Swal.fire(
          'Magda Suarez',
          'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
          // 'question'
        )
          break;
        case 4:
        Swal.fire(
          'Leonardo Fiallo',
          'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
          // 'question'
        )
          break;
        case 5:
          Swal.fire(
          'Maria Porras',
          'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
          // 'question'
        )
          break;
        case 6:
          Swal.fire(
          'Miguel Duran',
          'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
          // 'question'
        )
          break;
        case 7:
          Swal.fire(
          'Isaac Inca',
          'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
          // 'question'
        )
          break;
        case 8:
          Swal.fire(
          'Michael Sarmiento',
          'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
          // 'question'
        )
          break;
        case 9:
          Swal.fire(
          'Laura Galviz',
          'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
          // 'question'
        )
          break;
          default:
        Swal.fire(
          'Doris',
          'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
          // 'question'
        )
          break;
}
}
function volver(params) {
  router.push({ path: '/', replace: true })}
    

    const { width, height } = useWindowSize();
    return {
      count, fundadores, coordinador, maestros, ayudantes, countProyects, countBack, windowWidth: width,
      letNumber2,getInformation,volver,images2,imagesFondos
    }


  }
}



</script>

<style scoped>
img {

  object-fit:cover;
  width:30%;
  height:150px;
  border-radius: 50%;
  display:flex;
  position: relative;
  top: 80px;
}

.cardFundador  {
  border-radius: 10px;
  background-color: brown;
}
.boton{
  background-color: #900D0D;
  color: #f8efed;
}
.cardBody{
  background-color: #f8efed;
  border-right: 100px solid transparent;
  border-top: 100px solid #900D0D;
  border-left: 100px solid transparent;
  border-bottom: 100px solid transparent;
}
/* .email{
  border-right: 100px solid transparent;
     border-top: 100px solid transparent;
     border-left: 100px solid transparent;
     border-bottom: 100px solid #f0ad4e;
} */
/* .galery-item{

} */
</style>
