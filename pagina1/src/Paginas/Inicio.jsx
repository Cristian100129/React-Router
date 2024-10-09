import React from "react";
import '../EstilosPaginas/Inicio.css'; 
import CuadroInicio from '../Componentes/CuadroInicio';
import Footer1 from "../Componentes/Footer1";
import Encabezado from '../Componentes/Encabezado';



const Inicio = () => {
    return(
        <>
        <Encabezado/>
        <div className="Contenedor-principal">
        <h1 className="Encabezado-Inicio">Esta es mi primera pagina web con React</h1>
        <h3 className="Sub-Encabezado">Elaborado por el ingeniero Cristian grosso</h3>
        <CuadroInicio/>
        <Footer1/>
        </div>
        </>
    )
  };
  
  export default Inicio;