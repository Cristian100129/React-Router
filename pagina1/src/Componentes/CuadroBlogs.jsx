import React from "react";
import '../EstiloComponentes/Blogs.css'

const CuadroBlogs = (props) => {
    return (
      <div className="Blogs"> 
        <div className="Contenedor-General">
        <div className="Contenedor-imagen">
        <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.jpg`)} alt='El ave' />
        </div>
        <div className="texto-testimonio">
          <h1 className="titulo-contenedor">{props.Titulo}</h1>
          <p>{props.texto}</p>
        </div>
        </div>
      </div>
      
    );
  };
  
  export default CuadroBlogs;