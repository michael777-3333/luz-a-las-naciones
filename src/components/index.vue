
<template >
  <!-- CARRUSEL OF PHOTOS  -->
  <div class="container-fluid" id="carrusel">
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner ">
        <div class="carousel-item active">
          <img src="/src/assets/img/puenteTierra-fotor-202306231752.png" class="imgCarrusel d-block w-100 " alt="...">
          <div class="row titleCarrusel" style="color: #900D0D;  text-transform: uppercase;">
            <div class="col-12 divTitleLogo">
              <h1 class="titleLogo">Luz a las Naciones</h1>
            </div>
            <div class="col-12 ">
              <img v-show="showLogo" class="imgLogo" src="/src/assets/img/logo.png" alt="">
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <img src="/src/assets/img/puenteTierra-fotor-202306231752.png" class="imgCarrusel d-block w-100" alt="...">
          <div class="row titleCarrusel" style="color: #900D0D;  text-transform: uppercase;">
            <div class="col-12 divTitleLogo">
              <h1 class="titleLogo">Luz a las Naciones</h1>
            </div>
            <div class="col-12">
              <img v-show="showLogo" class="imgLogo" src="/src/assets/img/logo.png" alt="">
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/src/assets/img/puenteTierra-fotor-202306231752.png" class="imgCarrusel d-block w-100" alt="...">
          <div class="row titleCarrusel" style="color: #900D0D; text-transform: uppercase;">
            <div class="col-12 divTitleLogo">
              <h1 class="titleLogo">Luz a las Naciones</h1>
            </div>
            <div class="col-12">
              <img v-show="showLogo" class="imgLogo" src="/src/assets/img/logo.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <!-- mission, vision, history -->
  <div class="container-fluid" :style="{ 'background-image': 'url(' + imagesFondos.fomdo + ')' }">
    <div style="height: 50px;"></div>
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center">
          <h1 class="titles">Sobre nosotros</h1>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <div class="d-flex justify-content-center text-center" style="width: 600px;">
          <p style="font-size: 30px;">
            Aquí encontrarás tres secciones sobre nosotros,
            que son nuestra Misión, Visión y Historia,
            te hablaremos de ellas, así sabrás
            un poco más de nuestra fundación
          </p>
        </div>

      </div>
    </div>
    <div style="height: 50px;"></div>

    <div class="row" v-show="animateAboutUs">
      <div class="aboutUS col-xs-auto col-sm-12 col-md-4 d-flex justify-content-center m-xs-3 m-sm-3 m-md-0 animate__animated animate__backInLeft">
        <div class="card" style="width: 400px; height: 400px; border-radius: 10px;">
          <img class="card-img" src="/src/assets/img/Photos/escuela.png" alt=""
            style="width: 100%; height: 100%; border-radius: 10px;">
          <div class="card-body" style="color: #fff;">
            <h2 class="card-title">Mision</h2>
            <p class="card-info">Nuestra Mision es principalmente enviar un mensaje de amor en Cristo Jesús a toda
              familia, enfoncandonos principalmente en los niños..</p>


          </div>
          <button type="button" class="btn btn-img d-flex justify-content-center" @click="mision('mision')" id="mision">
            
            <i class="bi bi-arrow-left-circle" style="font-size: 30px; color: #fff;"></i>
          </button>
        </div>

      </div>
      <div
        class="aboutUS col-xs-auto col-sm-12 col-md-4 d-flex justify-content-center m-sm-3 m-md-0 animate__animated animate__backInDown">
        <div class="card" style="width: 400px; height: 400px; border-radius: 10px;">
          <img class="card-img" src="/src/assets/img/Photos/img1194.jpg" alt=""
            style="width: 100%; height: 100%; border-radius: 10px;">
          <div class="card-body" style="color: #fff;">
            <h2 class="card-title">Vision</h2>
            <p class="card-info">Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús
              como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama...</p>
            <!-- <button class="btn btn-card ">Mas</button> -->
          </div>
          <button class="btn btn-img d-flex justify-content-center" @click="mision('vision')">
            <i class="bi bi-arrow-left-circle" style="font-size: 30px; color: #fff;"></i>
          </button>
        </div>

      </div>
      <div
        class="aboutUS col-xs-auto col-sm-12 col-md-4 d-flex justify-content-center m-sm-3 m-md-0 animate__animated animate__bounceIn"
        style="color: #fff;">
        <div class="card" style="width: 400px; height: 400px; border-radius: 10px;">
          <img class="card-img" src="/src/assets/img/Photos/img1102.jpg" alt=""
            style="width: 100%; height: 100%; border-radius: 10px;">
          <div class="card-body" style="color: #fff;">
            <h2 class="card-title">Historia</h2>
            <p class="card-info">Nuestra Historia como fundación nace de por idea de nuestro fundador Juan Carlos Bennet
              con su esposa Patricia Bennet, ellos al ser colombianos y ver la necesidad de las familias y niños...</p>


          </div>
          <button class="btn btn-img d-flex justify-content-center" id="historia" @click="mision('historia')">
            <i class="bi bi-arrow-left-circle" style="font-size: 30px; color: #fff;"></i>
          </button>
        </div>

      </div>
    </div>

    <div style="height: 100px;"></div>
  
  </div>

  <div style="display: none;">{{ count }}</div>

  <!-- PROYECTOS  -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-auto col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center"
      :style="{ 'background-image': 'url(' + imagesFondos.ninaFondo + ')' }">
        <div>
          <h1 class="titles" style="padding-left: 30px; color: #f8efed;">
            Propuestas
          </h1>
          <p style="padding-left: 30px; color: #f8efed;font-size: 30px;">
            Nuestras propuestas van de la mano con las familias de colombia, especialmente la gente de las veredas o campos...

          </p>
          <button id="propuestas" class="btn btn-proyect mb-sm-3 mb-md-3 mb-lg-0"
           @click="sweetProyects('propuestas')" style="margin-left: 30px; color: black; background-color: #f8efed;">Leer más</button>
        </div>


      </div>
      <div class="col-xs-auto col-sm-12 col-md-12 col-lg-6 columsProyectos mb-sm-3 mb-md-3 mb-lg-0"
        style="background-color: #900D0D;">
        <div style="width: 100%;">
          <img class="" src="/src/assets/img/palocortado.jpg" alt="" srcset="" style="width: 100%;">
        </div>
      </div>
    </div>

    <div class="row" style="padding-left: 0%;padding-right: 0%;">
      <div class="col-xs-auto col-sm-12 col-md-12 col-lg-6 columsProyectos" style="background-color: #900D0D;">
        <div style="width: 100%;">
          <img class="" src="/src/assets/img/enfoque.jpg" alt="" srcset="" style="width: 100%;">
        </div>
      </div>

      <div class="col-xs-auto col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center"
      :style="{ 'background-image': 'url(' + imagesFondos.ninoFondo + ')' }">
        <div>
          <h1 class="titles" style="padding-left: 30px; color: #f8efed;">
            Recursos
          </h1>
          <p style="padding-left: 30px; color: #f8efed; font-size: 30px;">
            Nuestros recursos que la fundacion Luz a las Naciones tiene mayormente llegan de la iglesia del pastor Juan Carlos Bennet...
          </p>
          <button value="recursos" id="recursos" class="btn btn-proyect mb-xs-3 mb-sm-3 mb-md-3 mb-lg-0"
           @click="sweetProyects('recursos')" style="margin-left: 30px; color: black; background-color: #f8efed;">Leer más</button>
        </div>
      </div>

    </div>
  </div>

  <!-- PROYECTOS2  -->
  <div class="container-fluid" :style="{ 'background-image': 'url(' + imagesFondos.fomdo + ')' }">
    <div class="row">

      <div class="col">
        <h2 class="titles d-flex justify-content-center m-5">PROYECTOS</h2>
      </div>
    </div>

    <div class="row  d-flex justify-content-center">
      
      <div class="imgProyects col-xs-auto col-sm-1 col-md-1 d-flex ">
        <button v-if="windowWidth > 575" class="btn btn" style="color: black; font-size: 30px;">
          <i class="bi bi-box-arrow-left" @click="countBack()"></i>
        </button>
      </div>

          <div class="imgProyects col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xxl-5 ">

            <img v-if="count == 1" class="imgProyects animate__animated animate__bounceIn d-flex justify-content-center"
              src="/src/assets/img/proyects/paloCortado.jpg" alt="" style="width: 100% ;height:600px;">
            <img v-if="count == 0" class="imgProyects animate__animated animate__bounceIn"
              src="/src/assets/img/proyects/puenteTierra.jpg" alt="" style="width: 100% ;height: 600px;">
            <img v-if="count == 2" class="imgProyects animate__animated animate__bounceIn"
              src="/src/assets/img/proyects/macanillo.jpg" alt="" style="width: 100% ;height: 600px;">
            <img v-if="count == 3" class="imgProyects animate__animated animate__bounceIn"
              src="/src/assets/img/proyects/provi.png" alt="" style="width: 100% ;height: 600px;">
            <img v-if="count == 4" class="imgProyects animate__animated animate__bounceIn"
              src="/src/assets/img/proyects/puertaApuerta.jpg" alt="" style="width: 100% ;height: 600px;">

          </div>
          <div class="proyects col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xxl-5 d-flex justify-content-sm-center">

            <div class="row">
              <div class="titlesProyects d-flex justify-content-ms-center justify-content-lg-center align-items-end" >
                <h3 v-if="count == 1" class="titles titlesProyecto animate__animated animate__bounceIn">Palo Cortado</h3>
                <h3 v-if="count == 0" class="titles titlesProyecto animate__animated animate__bounceIn">Puente Tierra</h3>
                <h3 v-if="count == 2" class="titles titlesProyecto animate__animated animate__bounceIn">Macanillo</h3>
                <h3 v-if="count == 3" class="titles titlesProyecto animate__animated animate__bounceIn">Jose A. Galan</h3>
                <h3 v-if="count == 4" class="titles titlesProyecto animate__animated animate__bounceIn">Puerta a Puerta</h3>
              </div>
              <div class="" style="font-size: 25px;">
                <p v-if="count == 1 "
                  class="animate__animated animate__bounceIn text-center justify-content-ms-center justify-content-lg-center ">
                  Palo cortado es uno de los grandes proyectos hechos por la fundacion, en si palo cortado es el nombre de
                  una vereda en el municipio de San Gil
                  allá se realiza una serie de actividades en la casa de una hermana llamada Doris y su familia, ellos
                  prestan la casa para la realización del culto y las actividades pensadas por la funadción, a esa casa
                  llegan una serie de
                  niños de varias fincas al alrederdor algunos vienen de muy lejos solo para la clase, el fin total es que
                  los niños de Palo cortado crezcan con la semilla de jesus en su corazón
                </p>
                <p v-if="count == 0" class="animate__animated animate__bounceIn text-center">
                  Palo cortado es uno de los grandes proyectos hechos por la fundacion, en si palo cortado es el nombre de
                  una vereda en el municipio de San Gil
                  allá se realiza una serie de actividades en la casa de una hermana llamada Doris y su familia, ellos
                  prestan la casa para la realización del culto y las actividades pensadas por la funadción, a esa casa
                  llegan una serie de
                  niños de varias fincas al alrederdor algunos vienen de muy lejos solo para la clase, el fin total es que
                  los niños de Palo cortado crezcan con la semilla de jesus en su corazón
                </p>
                <p v-if="count == 2" class="animate__animated animate__bounceIn text-center">
                  Palo cortado es uno de los grandes proyectos hechos por la fundacion, en si palo cortado es el nombre de
                  una vereda en el municipio de San Gil
                  allá se realiza una serie de actividades en la casa de una hermana llamada Doris y su familia, ellos
                  prestan la casa para la realización del culto y las actividades pensadas por la funadción, a esa casa
                  llegan una serie de
                  niños de varias fincas al alrederdor algunos vienen de muy lejos solo para la clase, el fin total es que
                  los niños de Palo cortado crezcan con la semilla de jesus en su corazón
                </p>
                <p v-if="count == 3" class="animate__animated animate__bounceIn text-center">
                  Palo cortado es uno de los grandes proyectos hechos por la fundacion, en si palo cortado es el nombre de
                  una vereda en el municipio de San Gil
                  allá se realiza una serie de actividades en la casa de una hermana llamada Doris y su familia, ellos
                  prestan la casa para la realización del culto y las actividades pensadas por la funadción, a esa casa
                  llegan una serie de
                  niños de varias fincas al alrederdor algunos vienen de muy lejos solo para la clase, el fin total es que
                  los niños de Palo cortado crezcan con la semilla de jesus en su corazón
                </p>
                <p v-if="count == 4" class="animate__animated animate__bounceIn text-center">
                  Palo cortado es uno de los grandes proyectos hechos por la fundacion, en si palo cortado es el nombre de
                  una vereda en el municipio de San Gil
                  allá se realiza una serie de actividades en la casa de una hermana llamada Doris y su familia, ellos
                  prestan la casa para la realización del culto y las actividades pensadas por la funadción, a esa casa
                  llegan una serie de
                  niños de varias fincas al alrederdor algunos vienen de muy lejos solo para la clase, el fin total es que
                  los niños de Palo cortado crezcan con la semilla de jesus en su corazón
                </p>
              </div>
            </div>
          </div>

      <div class="imgProyects col-xs-auto col-sm-1 col-md-1 d-flex ">
        <button v-if="windowWidth < 575" class="btn btn" style="color: black; font-size: 30px;">
          <i class="bi bi-box-arrow-left" @click="countBack()"></i>
        </button>
        <button class="btn btn" style="color: black; font-size: 30px;">
          <i class="bi bi-box-arrow-right" @click="countProyects()"></i>
        </button>
      </div>
    </div>
    <div style="height:50px"></div>
  </div>

  <!-- MAESTROS  -->
  <div class="container-fluid" style="background-color: #f8efed;">
    <div style="height: 50px;"></div>
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center">
          <h1 class="titles">Datos Importantes </h1>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <div class="d-flex justify-content-center text-center" style="width: 600px;">
          <p style="font-size: 25px;">
            En esta sección veras la informacion mas relevante de nuestra fundación, tales como
            nuestras tematicas, como ser parte de nuestra fundación, testimonios de los niños y los maestros que hacen
            parte de la fundación
          </p>
        </div>

      </div>
    </div>
    <div style="height: 50px;"></div>

    <div class="row">
      <div
        class="maestros col-xs-auto col-sm-12 col-md-6 col-lg-6 col-xxl-3 mb-xs-3 mb-sm-3 mb-md-3 mb-lg-3 mb-xxl-0 d-flex justify-content-center">
        <div class="card1" style="width: 400px; height: 400px; border-radius: 10px;">
          <img class="card-img" src="/src/assets/img/Photos/tematicas.jpg" alt=""
            style="width: 100%; height: 100%; border-radius: 10px;">
          <div class="card-body2">
            <h2 class="card-title">Tematicas</h2>
            <p class="card-info">Nuestras tematicas se basan principalmente en juegos con una moraleja, en pocas palabras que los niños se diviertan aprendiendo,
               que pasen un divertido momento y nosostros dejando un buen mensaje es sus vidas
            </p>


          </div>
          <button class="btn btn-img d-flex justify-content-center">
            <i class="bi bi-arrow-up-right-circle" style="font-size: 30px; color: #fff;"></i>
          </button>
        </div>

      </div>
      <div
        class="maestros col-xs-auto col-sm-12 col-md-6 col-lg-6 col-xxl-3 mb-xs-3 mb-sm-3 mb-md-3 mb-lg-3 mb-xxl-0 d-flex justify-content-center">
        <div class="card1" style="width: 400px; height: 400px; border-radius: 10px;">
          <img class="card-img" src="/src/assets/img/Photos/grupo.jpg" alt=""
            style="width: 100%; height: 100%; border-radius: 10px;">
          <div class="card-body2">
            <h2 class="card-title">Unetenos</h2>
            <p class="card-info">Se parte de este bonito proyecto, unetenos y hagamos un mundo mejor, contactonos via email, redes sociales o dejanos tu mensaje en nuestro buzon </p>
            <!-- <button class="btn btn-card ">Mas</button> -->
          </div>
          <button @click="unetenos()" class="btn btn-img d-flex justify-content-center">
            <i class="bi bi-arrow-up-right-circle" style="font-size: 30px; color: #fff;"> <a class="nav-link active" href="#contactanos"></a></i>
          </button>
        </div>

      </div>
      <div
        class="maestros col-xs-auto col-sm-12 col-md-6 col-lg-6 col-xxl-3 mb-xs-3 mb-sm-3 mb-md-3 mb-lg-3 mb-xxl-0 d-flex justify-content-center">
        <div class="card1" style="width: 400px; height: 400px; border-radius: 10px;">
          <img class="card-img" src="/src/assets/img/Photos/maestros.jpg" alt=""
            style="width: 100%; height: 100%; border-radius: 10px;">
          <div class="card-body2">
            <h2 class="card-title">Testimonios</h2>
            <p class="card-info">los testimonos de las personasa a las que hemos ayudada, creo que es lo mejor habla de nostros como fundación, dale click en botón</p>


          </div>
          <button class="btn btn-img d-flex justify-content-center" @click="pupVideo('show')">
            <i class="bi bi-arrow-up-right-circle" style="font-size: 30px; color: #fff;"></i>
          </button>
        </div>

      </div>
      <div
        class="maestros col-xs-auto col-sm-12 col-md-6 col-lg-6 col-xxl-3 mb-xs-3 mb-sm-3 mb-md-3 mb-lg-3 mb-xxl-0 d-flex justify-content-center">
        <div class="card1" style="width: 400px; height: 400px; border-radius: 10px;">
          <img class="card-img" src="/src/assets/img/Photos/testimonios.jpg" alt=""
            style="width: 100%; height: 100%; border-radius: 10px;">
          <div class="card-body2">
            <h2 class="card-title">Maestros</h2>
            <p class="card-info">Tenemos un grupo capacitado de maestros, unos de ellos en este momento estudiando Teologia, sabiendo como prioridad que tenemos que enviar un mensaje de amor y salvacón como lo hizo jesús, dale click en el botón y conoce cada uno de ellos</p>


          </div>
          <button @click="maestros()" class="btn btn-img d-flex justify-content-center">
            <i class="bi bi-arrow-up-right-circle" style="font-size: 30px; color: #fff;"></i>
           
            
          </button>
        </div>

      </div>
    </div>

    <div style="height: 50px;"></div>

  </div>

  <!-- GALERIA  -->
  <div class="container-fluid" style="background-color: #900D0D;" id="galeria">
    <div style="display:none">{{ windowWidth }}</div>
    <div style="height: 50px;"></div>
    <div class="row d-flex justify-content-center">
      <div class="d-flex justify-content-center">
        <h2 class="titles" style="color: #f8efed;">Nuestra Galeria</h2>
      </div>
    </div>

    <div class="row">
      <div class="contenedorImg col-xs-auto col-sm-12 col-md-6 col-lg-6  col-xxl-3 d-flex justify-content-center"
        name="imGaleria" v-for="(item, index) in srcGaleriComplete">
        <img class="galeria" @click="openFullimg(item)" :src=item alt="galeria4"
          style="width: 300px; height: 300px; border-radius: 30px;">
          <!-- <div>{{ imagesNext}} {{ item  }}</div> -->
      </div>
    </div>

    <div class="row ">
      <div class="d-flex justify-content-center" >
        <a>
          <button  class="btn btn" type="button" style="background-color:#CF1B1B; color:#fff;" @click="openFullimg(images.galeria1)">Ir a galeria</button>
        </a>
      </div>
    </div>

    <div style="height: 30px;"></div>
  </div>

  <div class="row full-img" v-show="showSelectImg" style="display: flex;" id="filBox">
       <div style="height: 20px;"></div>
       <div class="col-10 d-flex justify-content-end">
        <button class="btn btn" style="color: #fff; font-size: 40px;">
          <i class="bi bi-x-octagon" @click="closeImg()"></i>
        </button>
       </div>
      <div class="col-12 d-flex justify-content-center" >
        <img class="imgSelecGalery animate__animated animate__bounceIn" style="height: 500px; width: 700px;" :src=imgSelect id="fullimg" alt="">
      </div>
          
          <div class="col-6 d-flex justify-content-end">
            <button class="btn btn"  style="color: #fff; font-size: 30px;">
              <i class="bi bi-arrow-left-circle-fill" @click="prevuisImg()"></i>
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn" style="color: #fff; font-size: 30px;">
              <i class="bi bi-arrow-right-circle-fill" @click="nextImg()"></i>
            </button>
          </div>
  </div>

  <div class="row container_modal animate__animated animate__backInDown" v-show="showVideo" style="display: flex;">
   <div class="row">
    <div class="col d-flex justify-content-between">
      <button class="btn btn" style="background-color: transparent;" @click="pupVideo('dontShow')">
      <i class="bi bi-x-circle" style="color: #000000; font-size: 60px;"></i>
    </button>
    </div>
    
   </div>
   <div style="display: none;"></div>
    
    <div v-if="showVideo==true" class="col-12 d-flex justify-content-center" >
      <video style="width: 50%; height: 500px;" autoplay  controls="true">
        <source src="/src/assets/video/testimonios2.mp4" type="video/mp4">
      </video>
      
    </div>

    <div v-else="showVideo==false"></div>
    
  </div>

  <!-- FOOTER  -->
  <div class="container-fluid" style="background-color: #f8efed;" id="contactanos">
    <section id="contactanos">
      <div style="height: 50px;"></div>
    <div class="row d-flex justify-content-xs-center justify-content-sm-center justify-content-md-center">
      <div class="col-xs-auto col-sm-6 col-md-6 col-lg-3 m-sm-3 m-md-3 m-lg-0 d-flex align-items-center justify-content-center">
        
          <img src="/src/assets/img/logo2.png" alt="" style="width: 200px; height: 100px; border-radius: 10px; margin-bottom: 10px">
        
      </div>
      <!-- <div class="col-xs-auto col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center  m-sm-3 m-md-3 m-lg-0 ">
        
      </div> -->
      <div class="col-xs-auto  col-sm-6 col-md-6 col-lg-3 m-sm-3 m-md-3 m-lg-0">
        <div class="d-flex justify-content-center"><h6 class="titles">Contactanos</h6></div>
        
        <div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Nombre">
          <label for="floatingPassword">Nombre</label>
        </div>
        <div class="form-floating my-3">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        </div>
      </div>
      <div class="redes col-xs-auto col-sm-6 col-md-6 col-lg-3  m-sm-3 m-md-3 m-lg-0 m-xxl-0">
       
          <div class=" d-flex justify-content-center mb-3">
            <a href="">
              <img src="/src/assets/img/facebook.png" style="width: 50px; height: 50px" alt="">
            </a>
          </div>
          <div class=" d-flex justify-content-center mb-3">
            <a href="">
              <img src="/src/assets/img/gmail.png" style="width: 50px; height: 50px" alt="">
            </a>
          </div>
          <div class=" d-flex justify-content-center mb-3">
            <a href="">
              <img src="/src/assets/img/instagram.png" style="width: 50px; height: 50px " alt="">
            </a>
          </div>
        
      </div>
    </div>
    <div style="height: 30px;"></div>
    <div class="row d-flex justify-content-center" style="background-color: #000000; color: floralwhite;">
      <p class="d-flex justify-content-center ">
        LUZ A LAS NACIONES ©
      </p>
    </div>
    </section>
 
  </div>
</template>
<script >
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, reactive } from "vue"
import Swal from 'sweetalert2';
import { useWindowSize } from 'vue-window-size';
import { filename } from 'pathe/utils'
// import {MenuIcon} from 'vue-material-design-icons/Menu.vue';
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    // new Swal('Bievenido a luz a las Naciones');

  
    // MOSTRAR LAS SWEETALERT EN ABOUT US 
function mision(value) {

      if (value == 'mision') {
        Swal.fire(
          'Misión',
          'Nuestra Mision es principalmente enviar un mensaje de amor en Cristo Jesús a toda familia, enfoncandonos principalmente en los niños donde ellos puedan recibir de la palabra de Dios, crescan en sabiduría y amor, enseñando la palabra y como seguirla a las familias y las nuevas generaciones que serán el futuro de la humanidad  ',
          // 'question'
        )
      } else if (value == 'vision') {
        Swal.fire(
          'Visión',
          'Nuestra visión es cada una de las familias y niños donde hemos visitado, reciban a Jesús como su señor y salvador, donde entiendan que no están solos que hay un Dios que los ama, y asi como ellos recibieron de la palabra lo compartan con sus amigos y conocidos y la fundación luz a las Naciones crezca  ',
          // 'question'
        )
      } else if (value == 'historia') {
        Swal.fire({
          'title': 'Historia',
          'text': 'Nuestra Historia como fundación nace de una idea de nuestro fundador Juan Carlos Bennet con su esposa Patricia Bennet, ellos al ser colombianos, pero viviendo en norte america conocian la necesidad de las familias y niños colombianos, entonces con su esposa decidieron crear una fundacion llamada Luz a las Naciones, Juan Bennet creo una iglesia virtual...',
          'confirmButtonText': 'Toda la Historia',
          // 'icon': 'question',
          showCancelButton: true,
          showCloseButton: true
        }
        ).then((result) => {

          if (result.isConfirmed) {
            router.push({ path: '/historia', replace: true })
          }
        })
      }
}

    // MOSTRAR EL NAVBAR DEPENDIENDO SI EN BAJADA O SUBIDA 
let animateAboutUs = ref(false)
let showNav = ref(true)
let indexUbication = ref(window.scrollY)
window.addEventListener('scroll', function () {
      let currentUbication = ref(window.scrollY)
      if (currentUbication.value > 350) {
        animateAboutUs.value = true
      }
      if (indexUbication.value >= currentUbication.value) {
        showNav.value = true
      } else {
        showNav.value = false
      }
      indexUbication.value = currentUbication.value
})

    
    // SHOW THE INDEX IMG OF GALERY 

let showLogo= ref(true)
let imgSelect = ref()
let indexGlery = ref()
let showSelectImg = ref(false)
let nextImgSrc = ref()
let previousImageSrc = ref()
let previusIndex = ref()
let count = ref(0)
let showDiv=ref(false)
let pasadorProyectos = ref(false)
let letNewLap=ref(false)
let showVideo= ref(false)
const glob = import.meta.glob('/src/assets/img/galeria2/*png', { eager: true })
// console.log(glob);
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)

const fondos = import.meta.glob('/src/assets/img/fondos/*png', { eager: true })
// console.log(glob);
const imagesFondos = Object.fromEntries(
  Object.entries(fondos).map(([key, value]) => [filename(key), value.default])
)
console.log(imagesFondos);
console.log(imagesFondos.fomdo);
let srcGaleriComplete = ref([
  images.galeria1,
  images.galeria2_fotor_20230624124312,
  images.galeria3_fotor_20230624124331,
  images.galeria4_fotor_20230624124350,
  images.galeria5_fotor_20230624124413,
  images.galeria6_fotor_20230624124427,
  images.galeria7_fotor_20230624124444,
  images.galeria8_fotor_20230624124516 
])

function pupVideo(refer) {
  if (refer=='show') {
    showVideo.value= true  
  }else{
    showVideo.value=false
  }
  

}

function openFullimg(refer) {
  imgSelect.value=refer
  let sizeImage=imgSelect.value.length
  console.log(sizeImage);
  let referRecor=refer.slice(25,sizeImage-4)
  console.log(referRecor);
  showSelectImg.value = true
  showNav.value = false
}
function closeImg() {
      showSelectImg.value = false
      showNav.value = true
}

function nextImg() {
  let imgSelectComparative= imgSelect.value
      for (let i = 0; i < srcGaleriComplete.value.length; i++) {
        if (imgSelectComparative == srcGaleriComplete.value[srcGaleriComplete.value.length-1]) {
          imgSelect.value=srcGaleriComplete.value[0]
          letNewLap.value=true
        } else if ( imgSelectComparative == srcGaleriComplete.value[i]) {
          indexGlery.value = i+1
          imgSelect.value = srcGaleriComplete.value[indexGlery.value]
        }
      }
      if (letNewLap.value==false) {
        imgSelectComparative=srcGaleriComplete.value[indexGlery.value]
      }else{
        imgSelectComparative=srcGaleriComplete.value[0]
        letNewLap.value=false
      }
    }
function prevuisImg() {
  let imgSelectRecor= imgSelect.value
      for (let i = srcGaleriComplete.value.length - 1; i >= 0; i--) {
        if (imgSelectRecor == srcGaleriComplete.value[i]) {
          if (i == 0) {
            previusIndex.value = srcGaleriComplete.value.length-1
            imgSelect.value = srcGaleriComplete.value[previusIndex.value]
            letNewLap.value=false
          } else {
            previusIndex.value = i - 1
            imgSelect.value = srcGaleriComplete.value[previusIndex.value]
          }
        }
      }
      if (letNewLap.value==false) {
        imgSelectRecor=srcGaleriComplete.value[previusIndex.value]
      }else{
        imgSelectRecor=srcGaleriComplete.value[0]
        letNewLap.value=true
      }
}
// PASAR PROYECTOS 
function countProyects() {
      count.value += 1
      if (count.value == 5) {
        count.value = 0
      }
    }
function countBack() {
      count.value -= 1
      if (count.value == -1) {
        count.value = 4
      }
    }

function maestros() {
      router.push({ path: '/proyectos', replace: true })
}
function unetenos() {
      router.push({ path: '/unetenos', replace: true })
}
function showGalery() {
  showDiv.value=true
}


function sweetProyects(params) {
  if (params==='propuestas') {
    Swal.fire(
          'Propuestas',
          'Nuestras propuestas van de la mano con las familias de colombia, especialmente la gente de las veredas o campos, nuestra idea es abarcar varios sectores de veredales, en los municipios San Gil, Mogotes y Pinchote',
          // 'question'
        )
  }else if (params==='recursos') {
    Swal.fire(
          'Recursos',
          'Nuestros recursos que la fundacion Luz a las Naciones tiene mayormente llegan de la iglesia del pastor Juan Carlos Bennet, las familias pertenecientes a la iglesa donan para el funcionamiento de la fundación asi como todos los recursos que son empleados en cada una de las actividades realizadas por la fundación, tambíen las danaciones a las familias que la fundación ayuda.',
          // 'question'
        )
  }
}
    // QUITAR ALGUNAS FOTOS EN GALERIA DEPENDIENDO SI EL TAMANO DE LA PANTALLA ES DE CELULAR
const { width, height } = useWindowSize();

    return {
      mision,
      showNav, windowWidth: width, animateAboutUs, imgSelect, showSelectImg, indexGlery, nextImgSrc, prevuisImg, pasadorProyectos,showGalery,unetenos,fondos,showLogo,pupVideo,
      openFullimg,showVideo, closeImg, nextImg, srcGaleriComplete, previousImageSrc, previusIndex, count, countProyects, countBack,maestros, glob,images,showDiv,sweetProyects,imagesFondos
    }
  }

}



// Use sweetalert2

// return {}
</script>

<style scoped>
.columsProyectos {
  padding-right: 0;
  padding-left: 0;
}
.galeriaFlotante{
  position:absolute;
  height: 100vh;
  width: 100%;
  background-color: red;
}
.imgProyects{
  border-radius: 10px;
}
</style>
