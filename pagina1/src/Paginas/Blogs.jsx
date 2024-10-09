import React from "react";
import CuadroBlogs from "../Componentes/CuadroBlogs";
import Footer1 from "../Componentes/Footer1";

const Blogs = () => {
  
    return (
      <>
      
      <CuadroBlogs
        imagen="imagen1"
        Titulo ="El ave"
        texto='Lorem' 
      />
       <CuadroBlogs
        imagen="imagen1"
        Titulo ="El ave"
        texto='Lorem' 
      />
       <CuadroBlogs
        imagen="imagen1"
        Titulo ="El ave"
        texto='Lorem' 
      />
      <Footer1/>
      </>
    );
  };
  
  export default Blogs;