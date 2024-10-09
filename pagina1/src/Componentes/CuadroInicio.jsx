import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../EstiloComponentes/CuadroInicio.css';
import imagen1 from '../imagenes/imagen1.jpg';
import imagen2 from '../imagenes/imagen2.jpg'; 
import imagen3 from '../imagenes/imagen3.jpg'; 


function Cuadros() {
    const imagenes ={

        'imagen-1': imagen1,
        'imagen-2': imagen2,
        'imagen-3': imagen3
    }
    return (
        
        <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={imagenes['imagen-1']} class="d-block w-100" alt="ave"/>
            <div class="carousel-caption d-none d-md-block">
            <h5>Primera imagen</h5>
            <p>Esta es un ave</p>
      </div>
          </div>
          <div class="carousel-item">
            <img src={imagenes['imagen-2']} class="d-block w-100" alt="caballo"/>
            <div class="carousel-caption d-none d-md-block">
            <h5>Segunda imagen </h5>
            <p>Este es un caballo</p>
      </div>
          </div>
          <div class="carousel-item">
            <img src={imagenes['imagen-3']} class="d-block w-100" alt="cabra"/>
            <div class="carousel-caption d-none d-md-block">
            <h5>Tercer imagen</h5>
            <p>Esta es una cabra</p>
      </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
     
    );
}

export default Cuadros;

