<template >
    <div style="height: 100px; "></div>
    <div class="container-fluid" style="background-image: url('/src/assets/img/fondos/fomdo.png')">
            <div class="row ">
        
        <div class="col-12 d-flex justify-content-center">
            
            <h4 style="color: black;">

             Unetenos

            </h4>
        </div>

    </div>

    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            <div style="width: 800px;" class="">
                <div class="input-group mb-3" style="height: 70px; ">
                    <input type="text" class="form-control" placeholder="Correo" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <div style="height: 30px; "></div>
                <div class="input-group mb-3" style="height: 70px;">
                    <input type="text" class="form-control" placeholder="Nombre" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <div style="height: 30px; "></div>
                <div class="input-group" style="height: 150px;">
                    
                    <textarea class="form-control" placeholder="Comentario" aria-label="With textarea"></textarea>
                </div>
                <div style="height: 30px; "></div>
                <div class=" d-flex justify-content-center">
                    <button class="btn btnUnetenos" style="background-color:#900D0D ; color: #fff; width: 200px; height: 80px;">
                    Enviar
                </button>

                </div>
                
            </div>
            
        </div>
        
    </div>
    <button @click="volver()" class="btn btn" style="background-color:#900D0D ; color: #fff; width: 100px; height: 50px;">Volver</button>
    <div style="height: 300px;"></div>

    </div>


    
</template>
<script >

import {ref , computed, reactive} from "vue"
import { useRouter, useRoute } from 'vue-router'
// import {MenuIcon} from 'vue-material-design-icons/Menu.vue';
export default {
  setup() {
    const router = useRouter()
  // new Swal('Bievenido a luz a las Naciones');
    function volver(params) {
        router.push({ path: '/', replace: true })
    }
return{
    volver
}
}

}



      // Use sweetalert2

// return {}
</script>

<style >
.form-control{
    border-color:  #900D0D;
}
.btnUnetenos{
    background-color: #900D0D;
    border-color: #900D0D;
}
</style>

